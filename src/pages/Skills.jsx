import vscode from '../img/vscode.png';
import mysql from '../img/mysql.png';
import leetcode from '../img/leetcode.png';
import workbench from '../img/workbench.png';
import python from '../img/python.png';
import vite from '../img/vite.png';
import java from '../img/java.png';
import intellijidea from '../img/intellij idea.png';
import { motion } from "framer-motion";
import { SiCss3, SiGeeksforgeeks, SiGit, SiGithub, SiHtml5, SiJavascript, SiPostgresql, SiPostman, SiPython, SiReact, SiSpringboot, SiTailwindcss, SiVite, SiVsco, SiVscodium, SiWorkplace } from "react-icons/si";

export default function Skills(){
    return(
        <div className="text-white pt-10 justify-center flex flex-col text-center bg-gray-950 bg-cover min-h-screen">
            <div className='pt-5'>
                <h1 className="text-3xl font-bold mb-5 text-[DodgerBlue] relative inline-block font-[500]">
                    <span className="absolute mr-1 top-1/2 left-[-60px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                    Skills
                    <span className="absolute top-1/2 right-[-55px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                </h1>
            </div>
            <div className='grid lg:grid-cols-6  grid-cols-3 gap-4 lg:pl-30 lg:px-30 lg:gap-5 mb-5 p-5'>
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiHtml5 className='text-7xl w-[70px] text-orange-700'/>
                        <p className='p-3 pt-5 font-semibold'>HTML</p>
                    </div>
                </motion.div>

                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiCss3 className='text-7xl w-[70px] text-blue-500'/>
                        <p className='p-3 pt-5 font-semibold'>CSS</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiJavascript className='text-7xl w-[70px] text-yellow-400'/>
                        <p className='p-3 pt-5 font-semibold'>JavaScript</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiReact className='text-7xl w-[70px] text-cyan-400'/>
                        <p className='p-3 pt-5 font-semibold'>React</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={java} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Java</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={python} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Python</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:3}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiSpringboot className='text-7xl w-[70px] text-green-400'/>
                        <p className='p-3 pt-5 font-semibold'>Spring boot</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiTailwindcss className='text-7xl w-[70px] text-blue-500'/>
                        <p className='p-3 pt-5 font-semibold'>Tailwind</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={mysql} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>MySQL</p>
                    </div>
                </motion.div>
                
                {/* <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiPostgresql className='text-7xl w-[70px] text-blue-500'/>
                        <p className='p-3 pt-5 font-semibold'>Postgresql</p>
                    </div>
                </motion.div> */}
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiGithub className='text-7xl w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Github</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiGit className='text-7xl w-[70px] text-red-500'/>
                        <p className='p-3 pt-5 font-semibold'>Git</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={workbench} alt="" className='w-[80px]'/>
                        <p className='p-3 pt-5 font-semibold'>Workbench</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiPostman className='text-7xl w-[70px] text-orange-600'/>
                        <p className='p-3 pt-5 font-semibold'>Postman</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={leetcode} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Leetcode</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <SiGeeksforgeeks className='text-7xl w-[70px] text-green-500'/>
                        <p className='p-3 pt-5 font-semibold'>GeeksForGeeks</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={intellijidea} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Intellij Idea</p>
                    </div>
                </motion.div>
                
                <motion.div
                    className='cursor-pointer'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    whileHover={{scale:1.1}}
                    viewport={{once:true,amount:0.3}}
                    transition={{duration:0.5}}
                >
                    <div className='border border-[Gray] rounded-lg bg-gray-900 text-center items-center flex flex-col p-5'>
                        <img src={vscode} alt="" className='w-[70px]'/>
                        <p className='p-3 pt-5 font-semibold'>Vs Code</p>
                    </div>
                </motion.div>
                

            </div>
            
        </div>
    )
}