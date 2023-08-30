import React, { useContext} from 'react'
import { MyContextFunction, MyContextType } from '../App';

function FromTheCloudContent() {
  const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, setChange_pagesub } = useContext<MyContextType>(MyContextFunction);

    const asskbg = {
      backgroundImage: "url('./Cloud-to-Customers.webp'), linear-gradient(rgb(228,233,203,0), rgb(228,233,203))",
      backgroundPosition: 'center center', 
      backgroundBlendMode: 'overlay',
      backgroundSize: 'cover',
    }
  return (
    <>
        <div style={asskbg} className="bg-gray-800 pb-[70px] dark:text-gray-50">
    <button onClick={e=>setChange_pagesub(null)} className="bg-[#000000] mt-6 text-[#ffffff] hover:bg-[#252525] font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Back
    </button>
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:h-auto shadow-2xl" style={asskbg}>
			<div className="flex flex-col items-start p-8 bg-[#ffffffb6] py-12 text-center">
				<span className=' font-RussoOne'>{new Date().toLocaleString()}</span>
                    <h1 className="py-4 text-5xl text-[#0f210c] font-bold leading-[80px] font-RussoOne">From The Cloud to Customers, we bring all the answers!</h1>
				<p className="pb-6">(The Need for Cutting-edge software solution in the ATM environment) <span className='text-[blue] underline cursor-pointer' onClick={e=>setChange_page("ContactUs")}></span></p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
					<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</div>
		</div>
		<div className="flex bg-[#a7e791cb] flex-col col-span-12 p-6 divide-y">
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold"></h1>
				<p className='text-[20px] px-[15px]'><span className='text-[40px]'>A</span>ccording to Statistics Market Research, the global air traffic control market for equipment was $30.93 billion in 2017 and is expected to reach $105.20 billion by 2026, growing at a compound annual growth rate (CAGR) of 14.6% during the forecast period due to the lack of cost-effective cutting-edge software solutions, which is one of the reason the SWIM (System-wide Information Management) concept was introduced. Through extensive research on the chief-limitations of the legacy systems, our team was able to come up with a world-class solution for information management, which happens to be the first of its kind in the global aviation industry. the first harmonized SWIM system, as we have been able to shift the ATM (Air Traffic Management) information architecture paradigm from point-to-point data exchange to system-wide interoperability. We are committed to providing world-class solutions through extensive research. Our comprehensive expertise ranges from single components to complete products and solutions, each of which allows more valuable time for decision-making, and provides optimal support in the effective coordination of air traffic. The implementation of our product (SquawkAv) will introduce a significant change in the business practices of information management, during the entire lifecycle of an ATM (Air Traffic Management) process. From data origination to its usage and decommissioning. With our next-generation performance-driven composite solution that consolidates numerous business processes from multiple systems, the rate of acquisition of these equipment would drastically reduce..
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
</>
  )
}

export default FromTheCloudContent