import { SiGithub, SiLinkedin, SiMailchimp, SiMapbox, SiPhonepe } from "react-icons/si";
import leetcode from '../img/leetcode.png';
import x from '../img/twitter (1).png';
import ln from '../img/linkedin (1).png';
import { FiMail, FiMap, FiPhone, FiTwitter, FiX } from "react-icons/fi";

export default function Contact(){

    const onGithub=()=>{
        window.open("https://github.com/imrkarthikeyan","_blank")
    }

    const onLinkedin=()=>{
        window.open("https://www.linkedin.com/in/imrkarthikeyan/","_blank")
    }

    const onTwitter=()=>{
        window.open("https://x.com/imrkarthikeyan?t=Jzy4T3o_lRDVPQcmTpuuGw&s=09","_blank")
    }

    const onLeetcode=()=>{
        window.open("https://leetcode.com/imrkarthikeyan/","_blank")
    }

    return(
        <div className="min-h-screen bg-gray-950 text-center text-center items-center flex flex-col pt-10">
            <div className="pt-5">
                <h1 className="text-3xl font-bold mb-5 text-[DodgerBlue] relative inline-block font-[500]">
                    <span className="absolute mr-1 top-1/2 left-[-60px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                    Contact
                    <span className="absolute top-1/2 right-[-55px] w-[45px] block h-[2px] ml-2 bg-[DodgerBlue]"></span>
                </h1>
            </div>
            <div className="p-5 lg:pl-60  text-center lg:flex lg:items-center w-full lg:mr-50">
                <div className="text-white bg-gray-900 p-10 flex flex-col lg:flex-row w-full justify-center gap-16 xl:px-40">
                    <div className="flex flex-col text-center lg:text-left lg:w-1/2">
                        <h2 className="text-3xl md:pl-15">Get In Touch</h2>
                        <div className="flex gap-10 items-center text-xl pt-10 lg:pl-5">
                            <SiGithub className="text-3xl cursor-pointer" onClick={onGithub}/>
                            <img src={ln} alt="" className="w-[30px] cursor-pointer" onClick={onLinkedin}/>
                            <img src={x} alt="" className="w-[30px] cursor-pointer" onClick={onTwitter}/>
                            <img src={leetcode} alt="" className="w-[30px] cursor-pointer" onClick={onLeetcode}/>
                        </div>
                        <div className="pt-10">
                            <p className="flex items-center"><span className="mr-8"><FiPhone/></span>+91 9025758149</p>
                            <p className="flex items-center pt-7"><span className="mr-8"><FiMail/></span>rkarthikeyan578@gmail.com</p>
                            <p className="flex items-center pt-7"><span className="mr-8"><FiMap/></span>Tiruchengode, Tamil Nadu, India</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="pt-10 lg:pt-0 lg:w-1/2">
                        <form 
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target;

                            const formData = {
                            name: form.name.value,
                            email: form.email.value,
                            message: form.message.value,
                            };

                            const response = await fetch("https://formspree.io/f/xgvyyykr", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(formData)
                            });

                            if (response.ok) {
                            alert("Message sent successfully!");
                            form.reset();
                            } else {
                            alert("Failed to send message.");
                            }
                        }}
                        className="pt-7 bg-gray-800 p-5 gap-5 flex flex-col"
                        >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border rounded bg-white text-[Black] pl-3 lg:w-[380px] h-10"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Mail"
                            className="border rounded bg-white text-[Black] pl-3 lg:w-[380px] h-10"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border rounded bg-white text-black pl-3 pt-2 lg:w-[380px] h-40 resize-none"
                            required
                        />
                        <div className="flex text-center justify-center pt-7">
                            <button
                            type="submit"
                            className="border rounded w-[70px] p-1 flex text-center justify-center bg-gray-700 hover:bg-gray-600 border-gray-400"
                            >
                            Send
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
