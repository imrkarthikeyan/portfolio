
import rk from '../img/rk4.jpg';
import { Typewriter } from 'react-simple-Typewriter';

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
                    <div className='pt-7'>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1hvcpBnbSKKIfjSi07j5-0vjrOROT4s3Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-block bg-[DodgerBlue] py-4 px-8 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300'
                        >
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
            <div className='text-center p-20 lg:p-5 md:pl-37 max-w lg:w-[28vw] flex items-center lg:mt-7'>
                <img className='rounded-2xl w-full h-auto' src={rk} alt="Profile image" />
            </div>
        </div>
    )
}
