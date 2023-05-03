import React, { useContext } from 'react'
import { MyContextFunction, MyContextType } from '../App';
import Footer from '../Components/Footer';

function Assk() {
    const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, setChange_pagesub } = useContext<MyContextType>(MyContextFunction);

    const asskbg = {
        backgroundImage: "url('./asskbg.webp'), linear-gradient(rgb(228,233,203,0), rgb(228,233,203))",
        backgroundPosition: 'center center', 
      backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
    }
  return (
    <>
        <div style={asskbg} className=" pb-[70px] dark:text-gray-50">
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:h-auto shadow-2xl" style={asskbg}>
			<div className="flex flex-col items-start p-8 py-12 text-center">
				<span className=' font-RussoOne'>{new Date().toLocaleString()}</span>
                    <h1 className="py-4 text-5xl text-[#0f210c] font-bold leading-[80px] font-RussoOne">We Are Introducing Our Single African Sky(ASSK) Initiative.</h1>
				<p className="pb-6">Learn more about this initiative we are driving by <span className='text-[blue] underline cursor-pointer' onClick={e=>setChange_page("ContactUs")}>contacting us</span>  today!</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex bg-[#a7e791cb] flex-col col-span-12 p-6 divide-y">
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Single African Sky(ASSK)</h1>
				<p className='text-[20px] px-[15px]'><span className='text-[40px]'>U</span>nless planned upfront, a global SWIM can de-facto emerge as a large collection of agreements (series of bilateral agreements), thereby complicating the achievement of global interoperability. The result would be inflexibility at a global level owing to the complexity of managing change. And it’s unfortunate to note that most air navigation service providers don’t even have seamless connectivity within, let alone expanding to regionals and then global. In other words, we cannot talk about a “Global SWIM without talking about greatly, the impact of an internal SWIM”. Speaking of Internal SWIM within each ANSPs, mostly in Africa, its worthy of note that there are quite a number of systems in the ATM environment, almost, if not all of these systems are very expensive, apart from acquisition cost, there is also a training cost, maintenance cost and an “Integration-related development cost”, the integration cost is very paramount for an ANSP, to achieve a very high performance-enhancing environment, all these systems needs to be integrated with one another which backs up the fact that at the apex of air traffic management is an holistic approach. The Global ATM Operational Concept (Doc 9854) states that “Key to the philosophy adopted within the operational concept is the notion of global information utilization, management and interchange …This philosophy is supported in large part by evolution to a holistic, cooperative and collaborative decision-making environment ...”. As such, this will require an increase in information exchanges, both in terms of the number of exchanges performed and the number of participants involved. In light of this, most ANSPs might be finding it difficult to improve their ATM systems at the required pace needed for a Global SWIM implementation, which is largely due to cost. To be frank, each ANSPs financial strength differs, as we currently have some ANSPs that are still solely relying on non-digital model for information exchange. we also do have some ANSPs who have acquired partially some ATM systems; lastly there are some ANSPs who have acquired these modernized systems but are yet to integrate them. Different ANSPs different problems, but there is always an underlying factor of “cost”. We are introducing an Inexpensive single solution that won’t only create connectivity between and within all African aviation stakeholders but also has the capacity to morph into other bigger air traffic management systems due to its high degree of scalability and flexibility. This single technology solution is built on an architectural concept that is generic enough to accommodate each air navigation service provider's specific needs, which would make this an ideal solution for a ‘SWIM access point’ at a global level. Learn more about this initiative we are driving by contacting us today!
					</p>
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
<Footer/>

    </>
    )
}

export default Assk