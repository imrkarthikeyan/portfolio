import { FiExternalLink } from "react-icons/fi";
import { SiFirebase, SiPostgresql, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";
import java from '../img/java.png';
import opm from '../img/openWeatherMap api.png';
import bms from '../img/bms-img.png';
// import rk_servehub from '../img/rk-sh.mp4';
// import weather from '../img/live weather.mp4';
// import bmsv from '../img/bms.mp4';
// import rks from '../img/rk-s.mp4';
// import mk from '../img/mobile-kitchen.png';
// import hms from '../img/ksrhms.png';

export default function Project(){

    const onRkservehub=()=>{
        window.open("https://rkservehub.vercel.app/","_blank")
    }
    const onRkshgithub=()=>{
        window.open("https://github.com/imrkarthikeyan/RK-ServeHub","_blank")
    }

    const onLiveweather=()=>{
        window.open("https://liveweatherapplication.vercel.app/","_blank")
    }
    const onLwgithub=()=>{
        window.open("https://github.com/imrkarthikeyan/weather-application","_blank")
    }

    const onBankingSystem=()=>{
        window.open("https://github.com/imrkarthikeyan/Banking-System","_blank")
    }

    const onHmsGithub=()=>{
        window.open("https://github.com/imrkarthikeyan/hms-frontend","_blank")
    }

    const onHms=()=>{
        window.open("https://ksrhostelmanagementsystem.vercel.app/","_blank")
    }

    const onAuctonix=()=>{
        window.open("https://auctonix.vercel.app/","_blank")
    }
    const onAuctonixGithub=()=>{
        window.open("https://github.com/imrkarthikeyan/Auctonix","_blank")
    }

    return(
        <div className="bg-gray-950 bg-cover min-h-screen text-center pt-10">
            <div className="pt-4">
                
                <h1 className="lg:text-6xl text-4xl font-bold mb-5 text-[DodgerBlue] relative inline-block font-[500]">
                    <span className="absolute mr-1 top-1/2 left-[-60px] w-[50px] block h-[3px] ml-1 bg-[DodgerBlue]"></span>
                    My Projects
                    <span className="absolute top-1/2 right-[-56px] w-[50px] block h-[3px] ml-2 bg-[DodgerBlue]"></span>
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 md:pl-60 lg:gap-5 lg:p-15 p-10 lg:pl-30">
                
                <div className="text-white lg:py-0 py-5">
                    <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                        <div className="relative w-full h-[220px] overflow-hidden bg-gray-200 rounded-lg shadow-xl flex justify-center items-start">
                            <iframe
                                src="https://auctonix.vercel.app/"
                                title="RK ServeHub"
                                className="absolute top-0 left-0 w-[1740px] h-[1100px] origin-top-left scale-[0.22] border-none rounded-md"
                                loading="lazy"
                            />
                        </div>


                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold">Auctonix</h1>
                            <FiExternalLink className="cursor-pointer" onClick={onAuctonixGithub}/>
                            </div>
                            <p className="text-left text-sm text-gray-400 pt-1 cursor-pointer hover:underline" onClick={onAuctonix}>
                                auctonix.vercel.app
                            </p>
                            <div className="text-left flex flex-wrap gap-1 pt-3">
                                <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <SiReact className="text-cyan-300" />
                                <p className="text-sm">React</p>
                            </div>
                            <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <SiTailwindcss className="text-blue-500" />
                                <p className="text-sm">Tailwind CSS</p>
                            </div>
                            <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <img src={java} alt="Java" className="w-[20px]" />
                                <p className="text-sm">Java</p>
                            </div>
                            < div className="w-full" />
                                <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                    <SiSpringboot className="text-green-600" />
                                    <p className="text-sm">Springboot</p>
                                </div>
                                <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                    <SiPostgresql className="text-blue-600" />
                                    <p className="text-sm">PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white lg:py-0 py-5">
                    <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                        <div className="relative w-full h-[220px] overflow-hidden bg-gray-200 rounded-lg shadow-xl flex justify-center items-start">
                            <iframe
                                src="https://rkservehub.vercel.app/"
                                title="RK ServeHub"
                                className="absolute top-0 left-0 w-[1740px] h-[1100px] origin-top-left scale-[0.22] border-none rounded-md"
                                loading="lazy"
                            />
                        </div>


                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold">RK ServeHub</h1>
                            <FiExternalLink className="cursor-pointer" onClick={onRkshgithub}/>
                            </div>
                            <p className="text-left text-sm text-gray-400 pt-1 cursor-pointer hover:underline" onClick={onRkservehub}>
                                rkservehub.vercel.app
                            </p>
                            <div className="text-left flex flex-wrap gap-1 pt-3">
                                <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <SiReact className="text-cyan-300" />
                                <p className="text-sm">React</p>
                            </div>
                            <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <SiTailwindcss className="text-blue-500" />
                                <p className="text-sm">Tailwind CSS</p>
                            </div>
                            <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                <img src={java} alt="Java" className="w-[20px]" />
                                <p className="text-sm">Java</p>
                            </div>
                            < div className="w-full" />
                                <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                                    <SiSpringboot className="text-green-600" />
                                    <p className="text-sm">Springboot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white lg:py-0 py-5">
                    <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                {/* <video
                    src={bmsv}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                /> */}
                <div className="relative w-full h-[220px] overflow-hidden bg-gray-200 rounded-lg shadow-xl flex justify-center items-start">
                    <iframe
                        src="https://ksrhostelmanagementsystem.vercel.app/"
                        title="RK ServeHub"
                        className="absolute top-0 left-0 w-[1740px] h-[1100px] origin-top-left scale-[0.22] border-none rounded-md"
                        loading="lazy"
                    />
                </div>

                <div className="p-4">
                    <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Hostel Management System</h1>
                    <FiExternalLink className="cursor-pointer" onClick={onHmsGithub}/>
                    </div>
                    <p className="text-left text-sm text-gray-400 pt-1 cursor-pointer hover:underline" onClick={onHms}>
                    ksrhostelmanagementsystem.vercel.app
                    </p>
                    <div className="text-left flex flex-wrap gap-1 pt-3">
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiReact className="text-cyan-300" />
                        <p className="text-sm">React</p>
                    </div>
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiTailwindcss className="text-blue-500" />
                        <p className="text-sm">Tailwind CSS</p>
                    </div>
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <img src={java} alt="Java" className="w-[20px]" />
                        <p className="text-sm">Java</p>
                    </div>
                    <div className="w-full" />
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiSpringboot className="text-green-600" />
                        <p className="text-sm">Springboot</p>
                    </div>
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiFirebase className="text-green-600" />
                        <p className="text-sm">Firebase auth</p>
                    </div>
                    </div>
                </div>
                    </div>
                </div>

                <div className="text-white lg:py-0 py-5">
                <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                
                <img src={bms} alt="" />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Banking System</h1>
                    <FiExternalLink className="cursor-pointer" onClick={onBankingSystem}/>
                    </div>
                    <p className="text-left text-sm text-gray-400 pt-1 cursor-pointer hover:underline" onClick={onBankingSystem}>
                    rkbankingsystem.vercel.app
                    </p>
                    <div className="text-left flex flex-wrap gap-1 pt-3">
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiReact className="text-cyan-300" />
                        <p className="text-sm">React</p>
                    </div>
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiTailwindcss className="text-blue-500" />
                        <p className="text-sm">Tailwind CSS</p>
                    </div>
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <img src={java} alt="Java" className="w-[20px]" />
                        <p className="text-sm">Java</p>
                    </div>
                    <div className="w-full" />
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiSpringboot className="text-green-600" />
                        <p className="text-sm">Springboot</p>
                    </div>
                    </div>
                </div>
                </div>

                </div>

                <div className="text-white pt-4">
                    <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                    {/* <iframe
                    src="https://liveweatherapplication.vercel.app/"
                    title="Live Weather App"
                    className="w-full h-[220px] border-none"
                    loading="lazy"
                    /> */}
                    <div className="relative w-full h-[220px] overflow-hidden bg-black flex justify-center items-start">
                        <iframe
                            src="https://liveweatherapplication.vercel.app/"
                            title="RK ServeHub"
                            className="absolute top-0 left-0 w-[1740px] h-[1100px] origin-top-left scale-[0.22] border-none"
                            loading="lazy"
                        />
                    </div>

                    {/* <img src={hms} alt="" /> */}
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Live Weather</h1>
                        <FiExternalLink className="cursor-pointer" onClick={onLwgithub}/>
                        </div>
                        <p className="text-left text-sm text-gray-400 pt-1 cursor-pointer hover:underline" onClick={onLiveweather}>
                            liveWeatherApplication.vercel.app
                        </p>
                        <div className="text-left flex flex-wrap gap-1 pt-3">
                        <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                            <SiReact className="text-cyan-300" />
                            <p className="text-sm">React</p>
                        </div>
                        <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                            <img src={opm} alt="openWeatherMap api" className="w-[20px]" />
                            <p className="text-sm">openWeatherMap api</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}