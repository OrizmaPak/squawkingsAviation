import React from 'react'
import { MyContextFunction, MyContextType } from '../App';

function Footer() {
  const { change_page, setChange_page, pageone, setPageone, pagetwo, setPagetwo, pagethree, setPagethree } = React.useContext<MyContextType>(MyContextFunction);

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
      <div style={navbg} className=" border-t-[px] px-4 py-16 sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          {/* <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          > */}
          <div className='flex'>
            <img 
             onClick={()=>setChange_page("Home")}
              className="w-[50px] inline-flex items-center text-deep-purple-accent-400"
            src="./cropped-fav.png" alt="" />
            <span className="ml-2 font-RussoOne font-bold uppercase">
              SQUAWKINGS AVIATION SOFTWARE LTD
            </span>

          </div>
          {/* </a> */}
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm font-RussoOne text-[#32442f]">
            Squawkings Aviation Software LTD is known for its next-generation performance-driven composite solutions that consolidate numerous business processes from multiple systems.
            </p>
            <p className="hidden mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base  font-RussoOne font-bold">
            Contact Us
          </p>
          <div className="flex flex-col">
            {/* <p className="mr-1 font-RussoOne text-gray-800">Phone:</p> */}
            
            <a
              href="tel:+2338136186836"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors flex duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            > 
               {/* <img className='w-[35px] mx-[6px] h-[10px]' src="phone.png"/> +234 (0) 8122465182<br/> 
               <img className='w-[35px] mx-[6px] h-[10px]' src="phone.png"/> +234 (0) 7045476300<br/>  */}
               <img className='w-[15px] mt-1 mx-[6px] h-[10px]' src="phone.png"/> +234 (0) 8136186836
            </a>
            <a
              href="tel:+2347045476300"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors flex duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            > 
               <img className='w-[15px] mt-1 mx-[6px] h-[10px]' src="phone.png"/> +234 (0) 7045476300
            </a>
            <a
              href="tel:+2348122465182"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors flex duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            > 
               <img className='w-[15px] mt-1 mx-[6px] h-[10px]' src="phone.png"/> +234 (0) 8122465182
            </a>
          </div>
          <div className="flex">
            {/* <p className="mr-1 text-gray-800 font-RussoOne">Email:</p> */}
            <img className='w-[15px] mt-1 mx-[6px] h-[15px]' src="email.webp"/>
            <a
              href="mailto: Support@squawkingsaviation.com.ng"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
               Support@squawkingsaviation.com.ng
            </a>
          </div>
          <div className="flex">
            <img className='w-[25px] mt-1 mx-[6px] h-[25px]' src="location.png"/>
            {/* <p className="mr-1 text-gray-800 font-RussoOne">Address:</p> */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              God's Grace Plaza 2nd Floor, 65, Allen Avenue, Ikeja, Lagos State, Nigeria.
            </a>
          </div>
        </div>
        <div className=''>
          <span className="text-base font-bold font-RussoOne tracking-wide block">
            Follow Us
          </span>
          <a
              href="https://www.linkedin.com/company/squawkings-aviation-software-ltd/about/"
              className="text-gray-500 flex items-center  transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="./icons8-linkedin-circled.svg" alt="" />
              LinkedIn
            </a>
          <div className="hidden flexj items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {/* Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami. */}
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 - 2023 Squawkings Aviation Software LTD. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* F.A.Q */}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* Privacy Policy */}
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* Terms &amp; Conditions */}
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Footer