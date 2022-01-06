import React from 'react';
import './About.css'
import about from './img/about.jpg'
import img3 from './img/aboutFoot.png'

const About = () => {
    return (
        <div className="">
            <div className="aboutbanner ">
                <h3 className="text-3xl font-bold "style={{color:"red"}}>About US</h3>
            </div>
            <div className=' '>
            <div className='grid grid-rows grid-cols-2 gap-4'>
                <div className='  mt-3'>
                    <h1 className='font-bold text-3xl mt-3 mb-3'>Welcome to KachaBazar</h1>
                    <p className='ms-3 font-bold text-left'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.</p>
                    <p className='ml-3 text-left font-bold'>Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>
                    <div className='grid grid-rows grid-cols-2 gap-4 '>
                        <div className='bg-gray-300 mt-5'>
                            <h4 className='text-2xl  font-bold'>10K</h4>
                            <h6>Listed Products</h6>
                            <p>Dynamically morph team driven partnerships after vertical.</p>
                        </div>
                        <div className='bg-gray-300 mt-5 h-36'>
                            <h4 className='text-2xl  font-bold'>8K</h4>
                            <h6>Lovely Customer</h6>
                            <p>Competently productize virtual models without performance.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-24'>
                    <img style={{width:"100%" }} src={about} alt="" />

                </div>
                

            </div>
            </div>
            
            <div className='mt-5'>
                <div className='text-left font-bold'>
                <p className='text-left ml-2.5'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.</p>
               
              
                </div>
                <div className=''>
                <p className='text-left ml-2.5 mt-5 font-bold'>Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>

                </div>
            </div>
            <div className='grid grid-cols-2 mb-5'>
                <div className='text-left py-20 mt-5 m-10 font-bold'>
                    <h2 className='text-4xl'>Get Your Daily Needs From Our KachaBazar Store</h2>
                    <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>

                </div>
                <div className=''>
                    <img src={img3} alt="" />
                </div>
            </div>

            
        </div>
    );
};

export default About;