import rk from '../img/rk.jpg';
import { Typewriter } from 'react-simple-typewriter';

export default function Home(){
    return(
        <div className="bg-cover bg-gray-950 lg:gap-30 gap-10 w-full min-h-screen bg-center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 text-white items-center lg:pt-0 pt-20">
            <div className='items-center lg:pl-70 text-center'>
                <h1 className='text-5xl pb-5 pt-4'>Hello, Myself</h1>
                <h2 className='pb-7 font-bold text-6xl text-[Yellow] drop-shadow-[2px_2px_Orange]'>Karthikeyan R</h2>
                <div className='pb-5 text-2xl'>
                    <Typewriter
                        words={['Junior Software Developer']}
                        loop={0}
                        cursor
                        cursorStyle={false}
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    <span className='text-[DodgerBlue] ml-1 animate-blink'>|</span>
                </div>
                <p className='text-xl'>2nd Year B.Tech Information Technology</p>
                <div className='pt-7'>
                    <button className='inline-block bg-[DodgerBlue] py-4 px-8 rounded-lg'>Download CV</button>
                </div>
            </div>
            <div className='text-center p-20 lg:p-5 md:pl-37 max-w lg:w-[30vw] flex items-center'>
                <img className='rounded pt-10 overflow-hidden' src={rk} alt="Profile image" />
            </div>
        </div>
    )
}
