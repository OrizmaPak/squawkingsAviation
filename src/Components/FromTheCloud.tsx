import React, {useContext} from 'react'
import { MyContextFunction, MyContextType } from '../App';
import FromTheCloudContent from '../Pages/FromTheCloudContent';
import ProductDetails from '../Pages/ProductDetails';
import Loading from './Loading'
import { third_screen } from './PageHandler'

const cloudbg = {
    // background: "url('./navbg.webp')",
    background: "url('./Cloud-to-Customers.webp'), linear-gradient(rgba(44, 50, 13, 0.756), rgba(55, 62, 21, 0.386))",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
}

function FromTheCloud() {
  // const [change_page, setPageone] = useContext(MyContext);
  const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, change_pagesub, setChange_pagesub } = useContext<MyContextType>(MyContextFunction);
  return (
    <>
    <section
    style={cloudbg}
  className=" capitalize relative bg-[url('./Cloud-to-Customers.webp')] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 sm:bg-transparent sm:bg-gradient-to-r from-[#213f22] to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl  font-extrabold text-[white] sm:text-5xl">
      From The Cloud to Customers,

        <strong className="text-2xl block font-extrabold text-[#a6e9a6]">
        we bring all the answers!.
        </strong>
      </h1>

      <p className="bg-[#00000061] text-[white] rounded-tl-[20px] rounded-br-[20px] p-7 mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      According to Statistics Market Research, the global air traffic control market for equipment was $30.93 billion in 2017 and is expected...
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="hidden w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          onClick={(e)=>setChange_pagesub(<FromTheCloudContent/>)} 
          className="block w-full rounded cursor-pointer hover:text-[#59944c]  hover:bg-[white] bg-[#59944c]  text-[white] px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
        {/* <section style={cloudbg}
  className="capitalize	relative bg-cover bg-blue bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-none sm:bg-transparent sm:bg-gradient-to-r sm:from-[#213f22] sm:to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl text-[#a6e9a6] font-extrabold sm:text-5xl">
      From The Cloud to Customers, 

        <strong className="block text-[20px] leading-9 font-extrebold my-[10px] text-[#c8dfc8]">
        (The Need for Cutting-edge software solution in the ATM environment)
        </strong>
      </h1>

      <p className="mt-4 max-w-[1000px] bg-[#00000061] text-[white] rounded-tl-[20px] rounded-br-[20px] p-7 first-letter: sm:text-xl sm:leading-relaxed">
      
According to Statistics Market Research, the global air traffic control market for equipment was $30.93 billion in 2017 and is expected ...

      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="w-full rounded hidden bg-[#59944c]  text-[white] hover:text-[#59944c]  hover:bg-[white] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <p
          onClick={(e)=>setChange_pagesub(<FromTheCloudContent/>)} 
          className="block w-full rounded cursor-pointer hover:bg-[#59944c]  hover:text-[white] text-[#59944c]  bg-[white] px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </p>
      </div>
    </div>
  </div>
</section> */}
    </>
  )
}

export default FromTheCloud