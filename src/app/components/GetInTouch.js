'use client'
import React from "react";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';

dotenv.config();

const handleSubmit = async ({name, email, subject, message}) => {
    const params = {
        from_name: name,
        from_email: email,
        to_email: "soloscholar.ai@gmail.com",
        subject: subject,
        message: message
    }

    try{
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
            params, 
            {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
            });

        response.status === 200 ? alert("SUCCESS: Message sent successfully!") : alert("FAILED: Failed to send message!");
    } catch(error){
        alert('FAILED: ', error.message);
    }
}


export default function GetInTouch(){
    const[name, setName] = React.useState("");
    const[email, setEmail] = React.useState("");
    const[subject, setSubject] = React.useState("");
    const[message, setMessage] = React.useState("");
    const[isDisabled, setIsDisabled] = React.useState(false);

    function resetForm(){
        setIsDisabled(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                <div className="lg:col-span-8">
                    <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form onSubmit={async (e) => {
                            console.log("PRESSED");
                            e.preventDefault();
                            setIsDisabled(true);
                            await handleSubmit({name, email, subject, message});
                            resetForm();
                        }}>
                            <div className="grid lg:grid-cols-12 lg:gap-5">
                                <div className="lg:col-span-6 mb-5">
                                    <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Name :" onChange={(e) => setName(e.target.value)} value={name} required/>
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Email :" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <input name="subject" id="subject" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Subject :" onChange={(e) => setSubject(e.target.value)} value={subject} required/>
                                </div>

                                <div className="mb-5">
                                    <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Message :" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="send" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center" disabled={isDisabled}>
                                {isDisabled ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="lg:ms-8">
                        <div className="flex">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                <Link href="tel:+152534-468-854" className="text-slate-400 text-[15px]">+152 534-468-854</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                <Link href="mailto:contact@example.com" className="text-slate-400 text-[15px]">contact@example.com</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                <p className="text-slate-400 text-[15px] mb-2">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}