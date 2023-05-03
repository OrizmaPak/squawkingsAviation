import React,{useContext} from 'react'
import { MyContextFunction, MyContextType } from '../App';
import ProductDetails from '../Pages/ProductDetails';

function Form() {
    const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, setChange_pagesub } = useContext<MyContextType>(MyContextFunction);

    const formbg = {
        // background: "url('./navbg.webp')",
        background: "url('./Capture.PNG'), linear-gradient(rgba(44, 50, 13, 0.756), rgba(55, 62, 21, 0.386))",
        backgroundRepeat: 'noRepeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        // backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
    }
    const formbg2 = {
        // background: "url('./navbg.webp')",
        background: "url('./Software-Logo.webp'), #efefefa7",
        backgroundRepeat: 'noRepeat',
        // backgroundSize: '100% 100%',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
    }
  return (
    <>
    
        {/* <!-- component --> */}
<div className="h-fit capitalize flex flex-col md:flex-row">
	<div style={formbg}
		className="relative min-h-[600px] overflow-hidden flex w-full bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center">
		<div className='bg-[#022e11a5] p-6 rounded-tl-[20px] my-auto rounded-br-[20px]'>
			<h1 className="text-[white] font-bold text-4xl font-sans">Squawkings AvSoft</h1>
			<p className="text-[white] mt-1">Beta Testing Phase Registration (SquawkAv)</p>
			<button type="submit" onClick={(e)=>setChange_pagesub(<ProductDetails/>)}   className="block  w-28 bg-[white] text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		{/* <div className="absolute -bottom-32 Left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 Left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 Right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 Right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div> */}
	</div>
	<div style={formbg2} className="hidden fflex md:w-1/2 justify-center md:py-10 items-center shadow-2xl ">
		<div className="bg-[#ffffff00] p-10 ">
			<h1 className="text-[#486a3d] font-bold text-2xl mb-1">contact us</h1>
			<p className="text-sm font-normal text-[#000000] mb-7">We will get back to you</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-tl-[20px] rounded-br-[20px] bg-[white] border-[#4d674c] mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="First Name" />
      </div>
				<div className="flex items-center border-2 py-2 px-3 bg-[white] rounded-tl-[20px] rounded-br-[20px] border-[#4d674c] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Last Name" />
      </div>
					<div className="flex items-center border-2 py-2 px-3 bg-[white] rounded-tl-[20px] rounded-br-[20px] border-[#4d674c] mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
							<button className="block w-full hover:bg-[white] border-[3px]  hover:text-[#567445] hover:border-[#567445] bg-[#567445] mt-4 py-2 rounded-2xl text-[white] font-semibold mb-2">submit</button>
							{/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span> */}
		</div>
	</div>
</div>

    </>
  )
}

export default Form