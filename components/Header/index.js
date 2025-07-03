import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Socials from "../Socials";
import config from "../../next.config";

// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { name, showBlog, showResume } = data;

  const basePath = config.basePath ? config.basePath : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
  , []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between container mx-auto laptop:p-0">

              <div className="flex items-center">
                <img
                  width={40}
                  src="https://avatars.githubusercontent.com/u/44845299?s=400&u=df344c41d7de353a9145eac48c0b22a2b99a6e01&v=4"
                  style={{marginRight: "10px", zIndex: 1000, borderRadius: 20}}
                ></img>
                <h1
                  onClick={() => router.push("/")}
                  className="font-medium"
                  style={{marginTop: "2px"}}
                >
                  {name}
                </h1>
              </div>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`${basePath}/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`${basePath}/images/${
                      !open
                        ? (theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg")
                        : (theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg")
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 p-4 backdrop-blur-md border ${
                theme === "dark" ? "border-white/100 bg-black/30" : "border-black/20 bg-white/30"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={() => handleScroll('mobileApps')}>Mes apps</Button>
                  <Button onClick={() => handleScroll('schoolProjects')}>Projets étudiants</Button>
                  {/* <Button onClick={() => handleScroll('music')}>Musique</Button>
                  <Button onClick={() => handleScroll('art')}>Dessin et 3D</Button> */}
                  <Button onClick={() => handleScroll('about')}>À propos de moi</Button>
                  <Socials />
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={`mt-10 hidden sticky
        dark:text-white top-0 z-10 tablet:flex
        ${scrolled ? `backdrop-blur-md ${theme === "light" ? "bg-white/30": "bg-black/30"} border-white/20 border-b border-white/10 shadow-md` : ""}
      `} id='header-desktop'>

      <div
        className={`container mx-auto hidden flex-row items-center justify-between tablet:flex dark:text-white`}
      >
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <img
              width={40}
              src="https://avatars.githubusercontent.com/u/44845299?s=400&u=df344c41d7de353a9145eac48c0b22a2b99a6e01&v=4"
              style={{marginRight: "10px", zIndex: 1000, borderRadius: 20}}
            ></img>
            <h1
              className="font-medium mob:p-2 laptop:p-0"
              style={{marginTop: "4px"}}
            >
              {name}
            </h1>
          </div>
          {!isBlog ? (
            <div className="flex items-center">
              <Button onClick={() => handleScroll('mobileApps')}>Mes apps</Button>
              <Button onClick={() => handleScroll('schoolProjects')}>Projets étudiants</Button>
              {/* <Button onClick={() => handleScroll('music')}>Musique</Button>
              <Button onClick={() => handleScroll('art')}>Dessin et 3D</Button> */}
              <Button onClick={() => handleScroll('about')}>À propos de moi</Button>
              <Socials />
              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`${basePath}/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
              )}
            </div>
          ) : (
            <div className="flex">
              <Button onClick={() => router.push("/")}>Home</Button>
              {showBlog && (
                <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
              {showResume && (
                <Button
                  onClick={() => router.push("/resume")}
                  classes="first:ml-1"
                >
                  Resume
                </Button>
              )}

              <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
                Contact
              </Button>

              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`${basePath}/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
