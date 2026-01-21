import React from "react";
import { Typewriter } from "react-simple-typewriter";
import rk from "../img/rk4.jpg";

export default function Home({ onProject }) {

  return (
    <div className="pt-20 lg:pt-0 relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] text-white">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-[DodgerBlue]/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[420px] w-[420px] rounded-full bg-yellow-400/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative grid min-h-screen grid-cols-1 items-center gap-6 px-6 lg:grid-cols-2 lg:px-28">

        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-4xl md:text-6xl font-light mb-6">
            Hello, Myself
          </h1>

          <h2 className="lg:text-6xl text-5xl md:text-7xl leading-tight font-extrabold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            Karthikeyan R
          </h2>

          <div className="text-2xl md:text-3xl pb-2 mb-6 flex justify-center lg:justify-start">
            <Typewriter
              words={["Aspiring Software Developer"]}
              loop={0}
              cursor
              typeSpeed={90}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Pre Final Year B.Tech – Information Technology
          </p>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1vl1fEWKk_yLVp_bNeuxAEiBGSK3vEi82/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[DodgerBlue] px-10 py-5 text-lg font-semibold shadow-xl transition hover:scale-105 hover:bg-blue-600"
            >
              Download CV
            </a>

            <button
              onClick={onProject}
              className="rounded-2xl cursor-pointer border-2 border-yellow-400 px-10 py-5 text-lg font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              View Projects
            </button>
          </div>
        </div>


        <div className="flex justify-center">
          <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-yellow-400 via-orange-400 to-blue-500 shadow-2xl">
            <img
              src={rk}
              alt="Profile"
              className="h-[340px] w-[340px] md:h-[460px] md:w-[460px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
