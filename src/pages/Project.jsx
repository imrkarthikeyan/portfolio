import { FiExternalLink } from "react-icons/fi";
import { SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";
import java from '../img/java.png';
import rk_servehub from '../img/rk-sh.mp4';

export default function Project(){
    return(
        <div className="bg-gray-950 bg-cover min-h-screen text-center pt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5 text-[DodgerBlue] relative inline-block font-[500]">
                    <span className="absolute mr-1 top-1/2 left-[-60px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                    My Projects
                    <span className="absolute top-1/2 right-[-55px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 lg:p-25 p-8 py-5">
                <div className="text-white grid lg:grid-cols-3 grid-cols-1 p-5 w-[1200px] object-fit">
                <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                <video
                    src={rk_servehub}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">RK ServeHub</h1>
                    <FiExternalLink />
                    </div>
                    <p className="text-left text-sm text-gray-400 pt-1">
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
                    <div className="w-full" />
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiSpringboot className="text-green-600" />
                        <p className="text-sm">Springboot</p>
                    </div>
                    </div>
                </div>
                </div>

                </div>
                <div className="text-white grid lg:grid-cols-3 grid-cols-1 p-5 w-[1200px] object-fit">
                <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                <video
                    src={rk_servehub}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">RK ServeHub</h1>
                    <FiExternalLink />
                    </div>
                    <p className="text-left text-sm text-gray-400 pt-1">
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
                    <div className="w-full" />
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiSpringboot className="text-green-600" />
                        <p className="text-sm">Springboot</p>
                    </div>
                    </div>
                </div>
                </div>

                </div>
                <div className="text-white grid lg:grid-cols-3 grid-cols-1 p-5 w-[1200px] object-fit">
                <div className="border rounded-md border-gray-700 bg-gray-900 overflow-hidden w-full max-w-[380px]">
                <video
                    src={rk_servehub}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">RK ServeHub</h1>
                    <FiExternalLink />
                    </div>
                    <p className="text-left text-sm text-gray-400 pt-1">
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
                    <div className="w-full" />
                    <div className="inline-flex items-center bg-gray-700 px-2 gap-2">
                        <SiSpringboot className="text-green-600" />
                        <p className="text-sm">Springboot</p>
                    </div>
                    </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    )
}