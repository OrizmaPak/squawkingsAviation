import React from 'react'
import Footer from '../Components/Footer'

function AboutUs() {
    const navbg = {
        // background: "url('./navbg.webp')",
        background: "url('./navbg.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }
  return (
   <>
    
    <div style={navbg} className=" bg-[#ffffff] 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col-reverse lg:flex-row min-h-[150px] justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="  text-5xl lg:text-6xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-[#1a4e19cf] font-RussoOne">About Us</h1>
                    <p className="  font-normal text-base leading-6 text-gray-600 dark:text-white font-RussoOne text-[#1f3b1fb9]">Squawkings Aviation Software LTD is a Nigeria-based software development company that provides businesses worldwide with cutting-edge, custom, and scalable solutions. Squawkings Aviation software combines technological expertise, specific domain experience, and a passion for excellence to deliver world-class solutions in the aviation industry.</p>
                </div>
                <div className="w-full lg:w-8/12 h-full flex justify-end">
                    <img className="h-fit" src="./cropped-fav.png" alt="A group of People" />
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col min-h-[300px] h-fit justify-between gap-8 pt-12">
            <div className=" block md:block w-full lg:w-8/12">
                    <img className="w-full h-full rounded-tl-[20px] rounded-br-[20px]" src="https://shrm-res.cloudinary.com/image/upload/c_crop,h_704,w_1253,x_0,y_129/w_auto:100,w_1200,q_35,f_auto/v1/Competencies/black_men_in_tech_gfstwu.jpg" alt="A group of People" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="  text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#1a4e19cf]">Core Business</h1>
                    <p className="  font-normal text-base leading-6 text-gray-600 dark:text-white font-RussoOne capitalize  text-[#1f3b1fb9]"><span className=' font-RussoOne text-xl text-[#1f3b1f]'>Aviation Software Development: </span><br/> mobile App development, Web development, Customizable platforms, User Experience Design, Support & project rescue, Cloud Computing, IoT Development, API Development, Application Maintenance, Automation Testing, Backup and Disaster Recovery, Implementation & Deployment, Infrastructure Support, Migrations & Upgrades, Software Security, Systems Integration, Quality Assurance (QA Testing) etc.</p>
                </div>
            </div>
            
            <div className="flex lg:flex-row flex-col-reverse justify-between pt-12">
                <div className="w-full lg:w-5/12 mt-[20px] flex flex-col justify-center">
                    <h1 className="  text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#1a4e19cf]">What sets Squawkings Aviation Software Apart:</h1>
                    


                    <ul className=" list-disc font-normal text-base leading-6 text-gray-600 dark:text-white">
                        <li><span className=' font-RussoOne text-[#1f3b1fb9]'> Unique Innovative solution for Air traffic Management</span></li>
                        <li><span className=' font-RussoOne text-[#1f3b1fb9]'> Inexpensive Evolution to Unmanned traffic management.</span></li>
                    </ul>
                </div>
                <div className=" block md:block w-full lg:w-8/12">
                    <img className="w-full h-full rounded-tl-[20px] rounded-br-[20px]" src="https://tbcdn.talentbrew.com/company/1732/4998/content/capital-one-BIT-Deep-Dive-1.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between md:min-h-[300px] gap-8 pt-12">
                <div className=" block md:block w-full lg:w-8/12">
                    <img className="w-full h-full rounded-tl-[20px] rounded-br-[20px]" src="https://cdn.nextgov.com/media/img/cd/2022/02/16/021622visionNG/route-fifty-lead-image.jpg?1645038899" alt="A group of People" />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="  text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#1a4e19cf]">Mission Statement: </h1>
                    
                    <p className="  font-normal text-base leading-6 text-gray-600 dark:text-white"><span className=' font-RussoOne text-[#1f3b1fb9]'>Continuous extensive research and employment of advanced software development techniques, including data evaluation and client relationship management within the aviation value chain.</span><br/> </p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col-reverse justify-between min-h-[300px] gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="  text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#1a4e19cf]">Vision Statement: </h1>
                    <p className="  font-normal text-base leading-6 text-gray-600 dark:text-white"><span className=' font-RussoOne text-[#1f3b1fb9]'> To be the leading aviation software developer, in providing more flexible, scalable and cost-efficient software through the application of easy-to-use and unique system architecture for information processing, exchange and management.</span><br/></p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full rounded-tl-[20px] rounded-br-[20px]" src="https://informationage-staging.s3.amazonaws.com/uploads/2022/10/how-edge-computing-can-bolster-aviation-sector-innovation.jpeg" alt="A group of People" />
                </div>
            </div>

        </div>
        <Footer/>

    
   </>
  )
}

export default AboutUs