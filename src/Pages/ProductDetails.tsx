import React, { useContext } from 'react'
import { MyContextFunction, MyContextType } from '../App';


function ProductDetails() {
    const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, setChange_pagesub } = useContext<MyContextType>(MyContextFunction);

    const asskbg = {
      backgroundImage: "url('./Capture.PNG'), linear-gradient(rgb(228,233,203,0), rgb(228,233,203))",
      backgroundPosition: 'center', 
      backgroundBlendMode: 'overlay',
      backgroundSize: 'cover',
    }
  return (
    <>
        <div style={asskbg} className="pb-[70px] dark:text-gray-50">
    <button onClick={e=>setChange_pagesub(null)} className="bg-[#000000] mt-6 text-[#ffffff] hover:bg-[#252525] font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Back
    </button>
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:h-auto shadow-2xl" style={asskbg}>
			<div className="flex flex-col items-start p-8 bg-[#211e1e71] py-12 text-center">
				<span className=' font-RussoOne'>{new Date().toLocaleString()}</span>
                    <h1 className="py-4 text-5xl text-[#ffffff] font-bold leading-[80px] font-RussoOne">Squawkings AvSoft</h1>
				<p className="pb-6 text-xl text-[#ffffffd8]">Beta Testing Phase Registration (SquawkAv)<br/><span className='text-[blue]  underline cursor-pointer' onClick={e=>window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfV42ia62O1IePQu2FWeE1PFsBUozPHtzkcz-xWiPkgi-J4Lw/viewform'}>Participate in the testing</span></p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex bg-[#a7e791cb] flex-col col-span-12 p-6 divide-y">
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold"></h1>
				<p className='text-[20px] px-[15px]'><span className='text-[40px]'>A</span>s far back as the 80’s, air navigation service provider, which happen to be the central stakeholder, that connects every other stakeholder when it comes to air traffic operations, were mandated by the international civil aviation authority to use some certain systems for information management, at the time, the air traffic operations were meager and the standardized system for information management were capable to handle the daily operations. As time goes by some other standardized systems were introduced as air traffic demand was increasing, at some point the standardized system were not meeting the expectations of the end users due to the outdated technology or the limited capabilities of the currently standardized protocols for ground-ground messaging, many locally devised, non-Standardized schemes were also in use to provide text/data communications, that many aviation stakeholders in different part of the globe was able to manage both the devised non-standardized scheme and the standard archaic system. In 2007, the international civil aviation industry introduced the SWIM (System-wide Information Management) concept as a standard for information management, which is based on today’s world technology (IP-Based). The communication technology is advancing at an extremely rapid rate; the aviation community on the other hand, insists on having its own dedicated and closed communication systems, which tend to have insufficient capacities and are in general, outdated, expensive, and of inferior performance. The reason for insisting on being separate from public communications networks has generally been the need to ensure safety and security. This type of reasoning, however, became increasingly questionable until the SWIM concept was introduced that was able to accommodate technological trends. And it is on this concept that Squawkings aviation software was established through our product SquawkAv. Its worthy of note that the archaic systems for information management are still widely in use, as it is quite difficult for most air navigation service provider to boycott, majorly because their operational framework has been built around the archaic system and they have found a way to integrate it with some other advanced systems through in-house engineering. Although, this is currently working for them, but one of the greatest disadvantages to this type of operational framework is that it creates an environment with not only diverse systems but lack of connectivity, causing integrations to be done in a complex, solution-by solution basis. One of the reasons why the SWIM concept was introduced is because, the aviation industry is moving to that height of a holistic approach to information management whether at the global, regional level or within each stakeholder, The Global ATM Operational Concept (Doc 9854) states that “Key to the philosophy adopted within the operational concept is the notion of global information utilization, management and interchange …This philosophy is supported in large part by evolution to a holistic, cooperative and collaborative decision-making environment ...”. As such, this will require stakeholders to integrate their systems in an environment where there are diverse systems for a better operational performance-enhancing environment. Another disadvantage is cost, apart from the fact that it is very expensive to acquire these systems, it is also expensive to maintain and integrate them. While integration is a very daunting task, too many integrations cause a major system setback (slow responsiveness), all of these major problems have so many minor problems attached to them that cannot be covered in this statement. Squawkings aviation software devised an inexpensive single technology solution to all of these problems and beyond as the system architectural approach is based on “one logic and multiple potential solutions”, through this solution we aim to implement a Single African Sky (ASSK), which will create a seamless interconnectivity between and within each African aviation stakeholder and position the African airspace for a global SWIM.</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span className='hidden'>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>
</>
    )
}

export default ProductDetails