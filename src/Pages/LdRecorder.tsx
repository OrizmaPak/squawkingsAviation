import React from 'react'
import Footer from '../Components/Footer'

function LdRecorder() {
    const cardData2 = [
        {
            logo: 'Supports-A-Centralized.png', 
            header: 'Supports A Centralized License Processing Environment', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'Checked_User_icon-icons.com_55944.png', 
            header: 'An Enhanced On The Spot Check', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'PinClipart.com_pay-clipart_155034.png', 
            header: 'Automated Billing System', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'feature.png', 
            header: 'License Counts', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'RtPT.png', 
            header: 'RtPT (Real-time Personnel Tracking)', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'feature1b.png', 
            header: 'Service-Oriented Architecture', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'icon-about-3.png', 
            header: 'Simple, Easy-To-Use, Friendly Multi-Window Graphic Interface', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'Flight-Data-Processing-System.png', 
            header: 'Durable Storage, Archiving Of All Received And Transmitted Data To Meet Legal Retention Obligations', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'Automated-LTO-cycles-for-ACCs-1.png', 
            header: 'Path Integration With Other 3rd Party Software', 
            bgimg: 'download.webp',
            body: ''
        },
        {
            logo: 'An-Automated-ADR-16.png', 
            header: 'Sophisticated Features (Audible Notification)', 
            bgimg: 'download.webp',
            body: ''
        },
    ]
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
        <div style={navbg} className="px-6 py-12 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row min-h-[150px] justify-between gap-8">
                <div className="w-full lg:w-6/12 flex flex-col px-[20px] justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-[#1a4e19cf] font-RussoOne">SquawkLID</h1>
                    <h2 className="text-2xl font-bold text-[#496536] mb-4 text-blue-600 display-5  font-RussoOne">Introduction</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white font-RussoOne text-[#1f3b1fb9]">Squawkings aviation Software LTD is introducing an e-Licensing processing system that allow applicants to pay, apply, renew and manage their licenses online through a dedicated customer portal.

Due to the product’s unique harmonized paradigm it happens to be the first of its kind in the global aviation industry, with some unique features.

SquawkLID e-licensing processing system is designed to swiftly rationalize the reception, initial processing and distribution of Licensing data. 
                    </p>
                </div>
                <div className="w-full lg:w-6/12 h-full flex justify-end">
                    <img className="h-fit" src="./cropped-fav.png" alt="A group of People" />
                </div>
            </div>
                    <h2 className="text-2xl font-bold mt-12 text-[#496536] mb-4 text-blue-600 display-5  font-RussoOne">Features</h2>

                    <div className='flex flex-wrap px-2 justify-around text-center'>

                        {
                            cardData2.map(data=>(
                                <div key={data.header} className="flex justify-center mt-[20px]">
                            <div style={{
                                        background: `url('./${data.bgimg}'), linear-gradient(rgb(228,233,203), rgb(228,233,203))`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundBlendMode: 'overlay',}}
                                className="rounded-lg p-6 shadow-lg bg-[white] max-w-sm">
                                <img className="rounded-t-lg mx-auto min-h-[50px]" src={`./${data.logo}`} alt=""/>
                                <div className="p-6 ">
                                <h5 className="text-gray-900 text-xl text-center font-medium text-[#3a6020] mb-2 font-RussoOne">{data.header}</h5>
                                <p className="text-[#213612bb] font-RussoOne text-base mb-4">
                                {data.body}
                                </p>
                                <button type="button" className="hidden inline-blockm px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                                </div>
                            </div>
                        </div>
                            ))
                        }

                        
                        
                    </div>
        </div>
        <Footer/>
    </>
  )
}

export default LdRecorder