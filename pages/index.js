import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import SchoolProjectCard from "../components/SchoolProjectCard";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { Playfair_Display } from "next/font/google";
import { useTheme } from "next-themes";

// Local Data
import data from "../data/portfolio.json";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair' // pour utiliser avec Tailwind ou CSS
});

export default function Home() {
  // Ref
  const elinasLegacyRef = useRef();
  const persoProjectsRef = useRef();
  const schoolProjectsRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sections = {
    elinasLegacy: elinasLegacyRef,
    persoProjects: persoProjectsRef,
    schoolProjects: schoolProjectsRef,
    about: aboutRef,
  }

  // Handling Scroll
  const handleScroll = (section) => {
    const headerHeight = document.getElementById("header-desktop").offsetHeight;
    window.scrollTo({
      top: sections[section].current.offsetTop - headerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  // split text by half at nearest \n
  const splitHalf = (text) => {
    const midpoint = Math.floor(text.length / 2);
    let splitIndex = text.indexOf('\n', midpoint);
    if (splitIndex === -1) {
      splitIndex = text.indexOf(' ', midpoint);
    }
    if (splitIndex === -1) {
      splitIndex = midpoint; // if no space found, split at midpoint
    }
    const firstHalf = text.slice(0, splitIndex).trim();
    const secondHalf = text.slice(splitIndex).trim();
    return [firstHalf, secondHalf];
  }

  // useIsomorphicLayoutEffect(() => {
  //   stagger(
  //     [textOne.current, textTwo.current, textThree.current, textFour.current],
  //     { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
  //     { y: 0, x: 0, transform: "scale(1)" }
  //   );
  // }, []);

  const renderTitle = (title) => {
    return (
      <div style={{display: 'inline-block'}}>
        <h1 className="text-4xl text-bold" style={{paddingRight: '0px'}}>{title}</h1>
        <hr className="divider" style={{borderColor: theme === 'dark' ? 'white' : 'black'}}></hr>
      </div>
    )
  }

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      {/* <div className="gradient-circle"></div> */}
      {/* <div className="gradient-circle-bottom"></div> */}

      <Header
        handleScroll={handleScroll}
      />
    
      <div className="container mx-auto mb-10">

        <div className="laptop:mt-20 mt-10">

          {/* <div className="mt-5">
            <h1
              ref={textOne}
              className={"text-3xl tablet:text-6xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 " + playfairDisplay.className}
              style={{whiteSpace: 'pre-line', width: '70%', minHeight: '20%', fontSize: '2.5rem'}} // Use the font variable here
            >
              <Typewriter
                words={["“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”\n\n- Steve Jobs"]}
                typeSpeed={30}
                cursor
              />
            </h1>
          </div> */}

          
        </div>

        <div className="mt-10 laptop:mt-30 p-2" ref={elinasLegacyRef}>
            {renderTitle("Projet de fin d'études - Elina's Legacy")}

            <div className='mt-5 tablet:m-10'>

              <iframe
                src="https://www.youtube.com/embed/3mrUXGXAdP0?si=SU6NZHgCtNwRPsQU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{aspectRatio: 16 / 9 }}
              ></iframe>

              <div style={{display: 'flex', alignItems: 'center'}}>

                <div
                  className="tablet:m-10 mt-2 laptop:text-3xl opacity-40"
                  style={{lineHeight: '1.5', whiteSpace: 'pre-line', fontSize: '1.1rem', textWrap: 'wrap', flex: 1 }}
                >
                  {data.elinasLegacyPara}
                </div>
              </div>

            </div>
            

          {/* <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.mobileApps.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div> */}
        </div>

        <div className="mt-10 laptop:mt-30 p-2" ref={schoolProjectsRef}>

          {renderTitle("Projets étudiants")}

          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.schoolProjects.map((schoolProject, index) => (
              <SchoolProjectCard
                key={index}
                name={schoolProject.title}
                stack={schoolProject.stack}
                description={schoolProject.description}
                url={schoolProject.url}
              />
            ))}
          </div>
        </div>


        <div className="mt-10 laptop:mt-30 p-2" ref={persoProjectsRef}>
            {renderTitle("Projets perso")}

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.mobileApps.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2" ref={aboutRef}>
          {renderTitle("À propos de moi")}
          
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div
              className="tablet:m-10 mt-2 laptop:text-3xl opacity-40"
              style={{lineHeight: '1.5', whiteSpace: 'pre-line', fontSize: '1.1rem', textWrap: 'wrap' }}
            >
              {splitHalf(data.aboutpara)[0]}
            </div>

            <div
              className="tablet:m-10 mt-2 laptop:text-3xl opacity-40"
              style={{lineHeight: '1.5', whiteSpace: 'pre-line', fontSize: '1.1rem', textWrap: 'wrap' }}
            >
              {splitHalf(data.aboutpara)[1]}
            </div>
          </div>
{/* 
          <div className="mt-5">
            <h1
              ref={textOne}
              className={"text-3xl tablet:text-6xl laptop:text-4xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 " + playfairDisplay.className}
              style={{whiteSpace: 'pre-line', width: '70%', fontSize: '2rem'}} // Use the font variable here
            >
              <Typewriter
                words={["“You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.”\n\n- Steve Jobs"]}
                typeSpeed={0}
                cursor
              />
            </h1>
          </div> */}
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
