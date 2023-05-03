import React from 'react'
import { MyContextFunction, MyContextType } from '../App';
import Footer from '../Components/Footer'
import Home from './Home';

function ProductSquawkweb() {
    const navbg = {
        // background: "url('./navbg.webp')",
        background: "url('./navbg.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }
    
    const cardData = [
        {
            logo: 'Supports-the-use-of-RPL.png', 
            header: 'Supports the use of RPL and FPL', 
            bgimg: 'download.webp',
            body: 'Apart from the reductions in the number of flight plans required to be filed, the use of RPLs offers a number of other advantages, such as: an appreciable reduction in the load on communication channels used between ATS units and earlier availability of flight plan data, which permits preparation of flight progress strips in good time and the early display of flight plan data which may facilitate advance planning of the air traffic flow. Our RPL functions perfectly even in a Trajectory-based ATM environment.'
        },
        {
            logo: 'icon-about-3.png', 
            header: 'A modernized AIDC', 
            bgimg: 'download (1).webp',
            body: ''
        },
        {
            logo: 'A-Modernized-Integrated-AMANDMAN-System.png', 
            header: '	An automated airway billing & Payment system (Zero Debt approach)', 
            bgimg: 'download (2).webp',
            body: ''
        },
        {
            logo: 'A-Modernized-Integrated-AMANDMAN-System.png', 
            header: 'A modernized integrated AMAN/DMAN system (Using the pack and gap procedure)', 
            bgimg: 'download (2).webp',
            body: ''
        },
        {
            logo: 'ATSUs-Strength-Metrics-1.png', 
            header: 'ATSUs Strength metrics', 
            bgimg: 'images (1).webp',
            body: 'The organization and automation of the billing and invoice process.'
        },
        {
            logo: 'Flight-Data-Processing-System.png', 
            header: 'Flight Data Processing system', 
            bgimg: 'images (1).webp',
            body: 'SquawkAv Flight plan processing system is designed to swiftly rationalize the reception, initial processing and distribution of flight plans.'
        },
        {
            logo: 'icon-about-4.png', 
            header: 'Unique and customized interfaces for the ANSP’s managerial offices', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'An-Automated-ADR-16.png', 
            header: 'An Automated Flight movement log', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Support-For-Reception-and-Transmission.png', 
            header: 'Support for reception and transmission of other free text message carried by the AFTN ', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'noun_Departure-board_1568376.png', 
            header: 'Automated LTO cycles (The automation of operations counts at each airport Landings, Take-offs, Overfly, Returned flights, Diverted flights, Rejected Takeoffs). ', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'noun_Departure-board_1568376.png', 
            header: 'Automated LTO cycles for ACCs (The automation of operations count for each sectoral Landings, Take-offs, Overfly, Returned flights, Diverted flights, Rejected Takeoffs). ', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'A-specially-designed-User-Interface.png', 
            header: 'A specially designed User Interface for Enhanced Strategic Planning (ESPL).', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Radio-watch-log-1.png', 
            header: 'An automated Radio watch log for the Airspace Users', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Complete-data-loss-recovery-system.png', 
            header: 'Complete data loss recovery system (storing recorded data on a removable media)', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Common-time-synchronization.png', 
            header: 'Flight activator monitoring', 
            bgimg: 'images (1).webp',
            body: 'this makes it possible to identify flights which were planned to take-off and those that are currently still on the ground.'
        },
        {
            logo: 'Common-time-synchronization.png', 
            header: 'Common time synchronization (UTC).', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Path-Integration-With-Other-3rd.png', 
            header: 'Path Integration with other 3rd party software.', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Durable-Storage-Archiving-of-All-Received-and-Transmitted-Messages.png', 
            header: 'Durable Storage, Archiving of All Received and Transmitted Messages to Meet Legal Retention Obligations', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Easy-To-Use.png', 
            header: 'Easy-to-use, friendly multi-window graphic interface.', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Sophisticated-Features.png', 
            header: 'Sophisticated features(Alert Notification)', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'Airlines-Fleets-Database.png', 
            header: 'Airline’s fleets database', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'A-Complete-Stop-to-the-Use.png', 
            header: 'A complete stop to the use of the legacy system (AFTN/AMHS)', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'ATS-messages.png', 
            header: 'ATS messages in ICAO, ADEXP, OLDI formats.', 
            bgimg: 'images (1).webp',
            body: ''
        },
        {
            logo: 'centralized_decent-1.png', 
            header: 'A Common Accurate information sharing platform across all stakeholders', 
            bgimg: 'images (1).webp',
            body: 'This will optimize the decision-making process and deliver the expected efficiency gain.'
        },
        {
            logo: 'Deigned-to-successfully.png', 
            header: 'Deigned to successfully perform for both large scale ACC centers and small/medium airports', 
            bgimg: 'images (1).webp',
            body: ''
        },
    ]
    const { change_page, setChange_page, pageone, setPageone, pagetwo, setPagetwo, pagethree, setPagethree } = React.useContext<MyContextType>(MyContextFunction);


    // const cardbg1 = {
    //     // background: "url('./navbg.webp')",
    //     background: "url('./download.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     // backgroundAttachment: 'fixed',
    //     backgroundPosition: 'center',
    //     backgroundBlendMode: 'overlay',
    //   }
    // const cardbg2 = {
    //     // background: "url('./navbg.webp')",
    //     background: "url('./download (1).webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     // backgroundAttachment: 'fixed',
    //     backgroundPosition: 'center',
    //     backgroundBlendMode: 'overlay',
    //   }
    // const cardbg3 = {
    //     // background: "url('./navbg.webp')",
    //     background: "url('./download (2).webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     // backgroundAttachment: 'fixed',
    //     backgroundPosition: 'center',
    //     backgroundBlendMode: 'overlay',
    //   }
  return (
    <>
        <div style={navbg} className=" py-[25px] bg-fixed px-[10px]">
        <div className="flex flex-col-reverse lg:flex-row min-h-[150px] justify-between gap-8">
                <div className="w-full lg:w-6/12 flex flex-col px-[20px] justify-center">
                    <h1 className="text-left text-4xl lg:text-5xl font-bold leading-9 text-gray-800 dark:text-white pb-4 text-[#1a4e19cf] font-RussoOne">SquawkAv Web Application</h1>
                    <h2 className="text-left text-2xl font-bold text-[#496536] mb-4 text-blue-600 display-5  font-RussoOne">Introduction</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white font-RussoOne text-[#1f3b1fb9]">With increasing pressure to continuously improve operations at many airports, sharing accurate and timely information is becoming ever more important. With our air traffic control solutions, we provide a system that supports in maintaining a safe and efficient airspace through effective data sharing from data origination to its usage and decommissioning. This requirement stems from increasing traffic levels crossing FIR boundaries, and the need to improve efficiency and accuracy for ATC providers. Squawkings Aviation Software Ltd has developed a harmonized process and protocols for exchanging data between multiple States/ Territories/ International Organizations within and across regions to satisfy this requirement in accordance with the ICAO standards. Due to the product’s unique harmonized paradigm, it happens to be the first of its kind in the global aviation industry, which aims at the future developments of the GANP (Global Air Navigation Plan) making the present day-model/infrastructure for information exchange obsolete. </p>
                </div>
                <div className="w-full lg:w-6/12 h-full flex justify-end">
                    <img className="h-fit" src="./Software-Logo.png" alt="A group of People" />
                </div>
            </div>
                <div className="px-6 py-12 md:px-12">
                    <h2 className="text-left text-2xl font-bold text-[#496536] mb-4 text-blue-600 display-5  font-RussoOne">Features</h2>
                    
                    <div className='flex flex-wrap px-2 justify-around '>

                        {
                            cardData.map(data=>(
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
                                <h5 className="text-gray-900 text-xl  font-medium text-[#3a6020] mb-2 font-RussoOne">{data.header}</h5>
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

                    <section className="mb-32 bg-[#ffffff00] text-[#272727]  lg:text-left">
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex lg:flex-row flex-col-reverse items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-left text-3xl font-bold mb-4 text-blue-600 display-5 text-[#3a6020] font-RussoOne">SquawkAv’s SWIM Properties</h2>
              <h2 className="text-left text-2xl font-bold mb-4 text-blue-600 display-5 text-[#496536] font-RussoOne">In accordance with ICAO manual on SWIM Concept (Doc 10039-AN/511)</h2>
              <ul className="text-gray-500 mb-12 text-[#3b3b3b] list-disc font-RussoOne">
                <li className='mb-3 font-RussoOne'>SquawkAv web application is known for its easy-to-use and simple system architecture, provides information to users with access to relevant and mutually understood information. This includes the ability, not only to communicate and exchange data, but also to interpret the information exchanged in a meaningful manner. Hence, Air traffic service units gets operationally-relevant data, rather than remain “being informed” by pre-agreed messages.</li>
                <li className='mb-3 font-RussoOne'>More flexible and cost-effective communication by the application of common standards for information exchange.</li>
                <li className='mb-3 font-RussoOne'>Loose coupling which minimizes the impact of changes between information producers and consumers and the support of SDM</li>
                <li className='mb-3 font-RussoOne'>SquawkAv web application integrates seamlessly with AIM services, ATM services, MET services, and SWIM messaging using a service-oriented approach.</li>
                <li className='mb-3 font-RussoOne'>The implementation of SquawkAv web application will introduce a significant change in the business practices of managing information during the entire life cycle of an ATM process.SquawkAv web application provides quality information to the right people with the right systems at the right time, hence enabling net-centric ATM operations.</li>
                <li className='mb-3 font-RussoOne'>High degree of flexibility and scalability</li>
                <li className='mb-3 font-RussoOne'>Improved availability of quality data and information from authoritative sources.</li>
                <li className='mb-3 font-RussoOne'>Increased system performance</li>
            </ul>
            </div>
          </div>
          <div className="block w-full mt-12 lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img
              src="./SquawkAvs-SWIM-Properties.webp"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          
        </div>
      </div>
    </section>

    <div className="flex lg:flex-row flex-col bg-[white] rounded-2xl justify-between gap-8 pt-12">
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="./ASBU.webp" alt="A group of People" />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-left text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#1a4e19]">SquawkAv In Relation to ASBU</h1>
                    <h1 className="text-left text-2xl lg:text-33xl font-bold leading-9 text-gray-800 dark:text-white pb-4 font-RussoOne text-[#496536]">We are fully conformant to ICAO ASBU Block 0, Aligned with block 1 and paving the way to block 2&3</h1>
                    
                    <p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
                    SWIM is mainly contained in the ASBU modules B1-SWIM and B2-SWIM. In addition, the modules relating to service improvement through digital aeronautical information management and integration (B0-DATM & B1-DATM) as well as modules for improving operational performance through FF-ICE (B1-FICE, B2 -FICE, and B3-FICE) are important early components of the overall SWIM.</p>

                    <ul className=" list-disc font-normal text-base leading-6 text-gray-600 dark:text-white">
                        <li><span className=' font-RussoOne text-[#1f3b1f]'>SquawkAv has been designed to be globally interoperable within or outside globally-agreed parameters</span></li>
                        <li><span className=' font-RussoOne text-[#1f3b1f]'>Interfaces are designed to support point-to-point or application-to-application exchanges, have unlimited flexibility to accommodate new users, additional systems, new content or changed formats.</span></li>
                        <li><span className=' font-RussoOne text-[#1f3b1f]'>The web application can make it easy and cheap for one stakeholder to access, on a timely basis, information originated by another stakeholder.</span></li>
                        <li><span className=' font-RussoOne text-[#1f3b1f]'>The SquawkAv web application will prevent most organizations from managing their information in partial isolation leading to duplication and inconsistencies.</span></li>
                        <li><span className=' font-RussoOne text-[#1f3b1f]'>With our system’s architecture, the highest block upgrades can be easily achieved in accordance with the Global air navigation plan.</span></li>
                    </ul>
                </div>
            </div>

            <section className="mb-32 bg-[#ffffff00] text-[#272727]  lg:text-left">
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex flex-col-reverse lg:flex-row mt-12 items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-left text-3xl font-bold mb-4 text-blue-600 display-5 text-[#3a6020] font-RussoOne">SquawkAv in Relation to ATFM</h2>
              <p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
             <span className='text-xl font-RussoOne text-[#496536]'> Capacity Enhancement:</span> Capacity improvement of an ATM system might be considered an integral part of the ATM planning phase of the air traffic flow management process. with the implementation of the SquawkAv web application there will be an immense workload reduction on all end-users concerned as data would be distributed with just a click away, which in turn would aid on time performance.
             </p><p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
<br/> <span className='text-xl font-RussoOne text-[#496536]'>Accurate Demand Prediction</span> <br/>
</p><p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
 <span className='text-xl font-RussoOne text-[#496536]'>ESPL (Enhanced Strategic Planning):</span> SquawkAv has a customized user interface for Enhanced Strategic Planning (ESPL) for each terminal through flight activator monitoring which would morph into an Enhanced Tactical Flow Management System (ETFMS). With up-to-date information shared and closely monitored, appropriate decisions can be made when demand exceeds capacity which could lead to the implementation of ATFM.<br/>
</p><p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
<span className='text-xl font-RussoOne text-[#496536]'>Enhanced Training:</span>  The Radio Watch Log Interface will instill a “Best Planned, Best Served” flight operations mentality in the aircraft operators/ground handlers representatives, which would greatly aid future training of the aforementioned stakeholders in their participation in the ATFM/A-CDM process. As this has been a major challenge for ANSPs in different regions in their ATFCM pursuit
                        
            </p>
            </div>
          </div>
          <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img
              src="./ATFM.webp"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          
        </div>
      </div>
    </section>

            <section className="mb-32 bg-[#ffffff00] text-[#272727]  lg:text-left">
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-left text-3xl font-bold mb-4 text-blue-600 display-5 text-[#3a6020] font-RussoOne">SquawkAv in Relation to ATFM/A-CDM Integration</h2>
              <p className="text-gray-500 mb-12 text-[#3b3b3b] font-RussoOne">
              ATFM and A-CDM are both collaborative processes aimed at improving operational efficiency and optimizing the use of resource capacities – whether at the airport or in the airspace. Both processes rely on effective and timely exchange of data between stakeholders and across platforms/systems. With SquawkAv web application ATFM/A-CDM works in an integrated manner with some of its unique Interfaces. Stakeholders will have access to comprehensive information and better situational awareness, enabling more effective contributions in both the ATFM and A-CDM processes 


Learn more about our product today by establishing <span onClick={e=>setChange_page("Home")}></span> contact with us today! 

            </p>
            </div>
          </div>
          <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img
              src="./ATFM_A-CDM.jpg"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          
        </div>
      </div>
    </section>


                    
                    
                    </div>
                    <Footer/>
        </div>
    </>
  )
}

export default ProductSquawkweb