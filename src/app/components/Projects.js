'use client'
import React,{useState} from "react";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../../node_modules/react-18-image-lightbox/style.css';
import Image from "next/image";
const images = [
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
    "/images/works/doc.png",
];

const pdfs = [
    "/images/members/12.pdf",
    "/images/members/12.pdf",
    // Add more PDF paths as needed
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const [activePdf, setActivePdf] = useState(null);

    const handleCLick = (index) => {
        setActivePdf(pdfs[index]);
        // Open PDF in a new tab
        window.open(pdfs[index], '_blank');
    }


    // const handleCLick = (index) => {
    //     setActiveIndex(index)
    //     setOpen(!isOpen);
    // }

    return(
        <>
           <section className="relative md:py-24 py-16" id="project">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Documents</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I am a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
            </div>

            <h1>Documents</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Group</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Topic Assessment</h1>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Group</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Project Proposal</h1>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Status Document I</h1>
                </div>


                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Status Document II</h1>
                </div>



                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Research Paper</h1>
                </div>



                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc_2.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Log Book</h1>
                </div>




                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc_2.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Final Report</h1>
                </div>
                
                
            </div>

            <h1 style={{marginTop:"40px"}}>Presentations</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc_3.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Group</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Topic Assessment</h1>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc_3.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Group</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Project Proposal</h1>
                </div>

                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <Image height={0} width={0} sizes="100vw" style={{height:"auto", width:"100%"}} src="/images/works/doc_3.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link href="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Individual</Link>
                        <span className="block text-sm text-slate-400">Submitted on 2021/02/25</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link href="#" onClick={() => handleCLick(0)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilEye width={16}/></Link>
                    </div>
                    <h1 style={{padding:"10px", fontWeight:"bold"}}>Status Document I</h1>
                </div>
                
                
            </div>
        </div>
    </section>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setOpen(false)}
                onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
                }
            />
        )}

        </>
     
    )
}