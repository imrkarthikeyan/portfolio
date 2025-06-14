export default function About(){
    return(
        <div className="text-white flex flex-col bg-gray-950 bg-cover min-h-screen">
            <div className="pt-5 text-center">
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
                <li className="pt-7"><p>Skilled in Frontend, Backend and Database Management System.</p></li>
                <li className="pt-7"><p>I am passionate about new Technologies</p></li>
            </ol>
        </div>
    )
}