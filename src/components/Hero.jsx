import React, { useState, useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

const Hero = ({ seed }) => {
  const [isNotationDone, setIsNotationDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsNotationDone(true);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  const notationSettings = {
    type: "highlight",
    padding: [0, 2],
    iterations: 1,
  };

  return (
    <div className='container px-4 mx-auto text-amber-200'>
      <div className='lg:flex lg:flex-wrap lg:-mx-4'>
        <div className='lg:w-2/3 lg:px-4'>
          <RoughNotationGroup show={true}>
            <h1 className='text-2xl font-bold text-gray-900 lg:text-4xl'>
              I'm Prateek, a{" "}
              <RainbowHighlight className='text-gray-900' colorIndex={seed[0]}>
                developer
              </RainbowHighlight>{" "}
              based <br />
              in India.
            </h1>

            <div className='mt-4 text-gray-700'>
              <p>
                As a devoted developer, my primary focus is on crafting tools
                that are not only <br />
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[1]}
                >
                  user-friendly
                </RainbowHighlight>{" "}
                but also intuitive and{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[2]}
                >
                  delightful
                </RainbowHighlight>
                .
              </p>

              <p>
                Through a combination of self-guided learning and hands-on
                practice, I've attained a profound understanding of both{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[3]}
                >
                  front-end
                </RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[6]}
                >
                  back-end web development
                </RainbowHighlight>
                .
              </p>

              <p>
                In addition to my technical prowess, I possess a distinct set of
                attributes that define my{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[5]}
                >
                  work ethic{" "}
                </RainbowHighlight>
                {"  "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[6]}
                >
                  clarity
                </RainbowHighlight>{" "}
                and{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[0]}
                >
                  collaboration
                </RainbowHighlight>
                .
              </p>
              <p>
                Embracing the fluid nature of the tech landscape, I approach
                challenges with{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[5]}
                >
                  unwavering enthusiasm{" "}
                </RainbowHighlight>
                and resolve, demonstrating a steadfast commitment to overcoming
                obstacles and{" "}
                <RainbowHighlight
                  className='text-gray-700'
                  colorIndex={seed[6]}
                >
                  achieving success.
                </RainbowHighlight>
                .
              </p>
            </div>
          </RoughNotationGroup>

          <div>
            <div className='text-gray-700 mt-6'>
              <span
                className={
                  isNotationDone
                    ? "transition duration-1000 ease-in-out opacity-100"
                    : "transition duration-1000 ease-in-out opacity-0"
                }
              >
                I'm currently looking for
              </span>{" "}
              <span
                className={
                  isNotationDone
                    ? "transition duration-1000 ease-in-out delay-300 opacity-100"
                    : "transition duration-1000 ease-in-out delay-300 opacity-0"
                }
              >
                a new role as a developer.{" "}
              </span>
              <span
                className={
                  isNotationDone
                    ? "transition duration-1000 ease-in-out delay-500 opacity-100"
                    : "transition duration-1000 ease-in-out delay-500 opacity-0"
                }
              >
                <RoughNotation
                  {...notationSettings}
                  show={isNotationDone}
                  type='circle'
                  animationDuration={1500}
                  animationDelay={1700}
                  strokeWidth={1.5}
                  iterations={4}
                  padding={5}
                >
                  <a
                    href='#contact'
                    className='font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none'
                  >
                    Hire me?
                  </a>
                </RoughNotation>
              </span>
            </div>

            <div className='flex flex-wrap mt-6 space-x-4'>
              <a
                target='_blank'
                className='inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800'
              >
                View Resume
              </a>
              <a
                target='_blank'
                className='inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800'
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
