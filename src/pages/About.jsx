import { SiGeeksforgeeks } from 'react-icons/si';
import leetcode from '../img/leetcode.png';

export default function About(){

    const onLeetcode=()=>{
        window.open("https://leetcode.com/imrkarthikeyan/","_blank")
    }

    const onGfs=()=>{
        window.open("https://www.geeksforgeeks.org/user/imrkarthikeyan/","_blank")
    }

    return(
        <div className="text-white flex flex-col bg-gray-950 bg-cover min-h-screen">
            <div className="pt-20 text-center">
                <h1 className="text-3xl font-bold mb-5 text-[DodgerBlue] relative inline-block font-[500]">
                    <span className="absolute mr-1 top-1/2 left-[-60px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                    About me
                    <span className="absolute top-1/2 right-[-55px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                </h1>
            </div>
            <ol className="pl-10 lg:pl-80 pt-5 text-xl">
                <li className="pt-5"><p>I am a Second year B.Tech Information Technology student at K.S.Rangasamy College of Technology</p></li>
                <li className="pt-7"><p>I'm a passionate Software Developer with a strong foundation in data structures and algorithms.</p></li>
                <li className="pt-7"><p>Strong in Object-Oriented Programming (OOP)</p></li>
                <li className="pt-7"><p>Strong problem solving and logical thinking skills</p></li>
                <li className="pt-7"><p>With over 400+ problems solved on Leetcode and 600+ problems across various coding platforms.</p></li>
                <div className='pt-1 lg:flex items-center'>
                    <p className='text-[Yellow] text-md pt-3'>profiles :</p>
                    <div className='lg:flex items-center gap-5 pt-3 pl-5'>
                        <p onClick={onLeetcode} className='flex cursor-pointer gap-2 items-center'><img className='w-[30px]' src={leetcode} alt="" /> <span className='text-sm hover:text-blue-300'>leetcode.com/imrkarthikeyan <span className='text-[Yellow] text-2xl pl-3'>|</span></span></p>
                        {/* <p className='text-[Yellow]'>|</p> */}
                        <p onClick={onGfs} className='flex cursor-pointer gap-2 items-center pt-1'><SiGeeksforgeeks className='text-green-400 text-3xl'/><span className='text-sm hover:text-blue-300'>geeksforgeeks.org/user/imrkarthikeyan/</span></p>
                    </div>
                </div>
                <li className="pt-7"><p>Skilled in Frontend, Backend and Database Management System.</p></li>
                <li className="pt-7"><p>I am passionate about new Technologies</p></li>
            </ol>
        </div>
    )
}