import React from 'react'
import Footer from '../Components/Footer'

function Careers() {
    const navbg = {
        // background: "url('./navbg.webp')",
        background: "url('./navbg.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }
  return (
    <>
        <div className='' style={navbg}>
        <section className="mb-[10px] lg:mb-32 bg-[#ffffff00] text-[#272727]  lg:text-left">
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row items-start">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="text-5xl mb-[20px] font-bold text-[#1a4e19cf] display-5  font-RussoOne">CAREERS</h2>
              <h2 className="text-3xl font-bold mb-4 text-[#1f3b1fb9] display-5  font-RussoOne">Squawkings Aviation Software LTD</h2>
              <p className=" text-gray-500 mb-12 text-[#1f3b1f] font-RussoOne">
              Squawkings Aviation Software LTD is one of the leading developers of IT systems for the aviation industry.

In order to continue on our successful path, we are constantly looking for skilled and motivated individuals from all over the world to come on board and join us in shaping the aviation industry of tomorrow.

Due to many new technological developments and increasingly crowded airspace, the world of aviation is changing at a rapid pace. This great challenge opens up a lot of leeway and extensive fields of activity for technological pioneers. However, we also require people with analytical skills and a customer-oriented mindset outside of our technologically characterized core business. We therefore provide opportunities for graduates and young professionals as well as seasoned experts in both the fields of business development, product management, project management, engineering & development, sales and AIM services.


              </p>

              {/* <div className="grid lg:gap-x-12 md:grid-cols-3">
                <div className="mb-12 md:mb-0">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">1000</h2>
                  <h5 className="text-lg font-medium text-gray-500 mb-0">Happy customers</h5>
                </div>

                <div className="mb-12 md:mb-0">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">70%</h2>
                  <h5 className="text-lg font-medium text-gray-500 mb-0">Growth</h5>
                </div>

                <div className="">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">49</h2>
                  <h5 className="text-lg font-medium text-gray-500 mb-0">Projects</h5>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
            <img
              src="./slide4.webp"
              alt="Trendy Pants and Shoes"
              className="w-full rounded-tl-[20px] rounded-br-[20px] rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            />
          </div>
          
        </div>
      </div>
    </section>
    <section className="mb-[10px] lg:mb-32  lg:text-left">
    <div className="container mx-auto xl:px-32  lg:text-left">
      <div className="grid lg:grid-cols-2 flex items-center">
      <div>
          <img
            src="/bg_about_team-1024x683.webp"
            className="w-full h-full rounded-tl-[20px] rounded-br-[20px] min-h-[300px] min-w-[400px] lg:min-h-[500px] lg:min-w-[500px] shadow-lg fancy-border-radius lg:rotate-lg-6"
            alt=""
          />
        </div>
        <div className="mb-12 lg:mb-0">
          <div
            className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: 'blur(30px)', zIndex: '1'}}
          >
            <h2 className="text-3xl font-bold mb-4 display-5  font-RussoOne text-[#1a4e19cf]">Why work for</h2>
            <h2 className="text-2xl font-bold mb-4 display-5  font-RussoOne text-[#1f3b1fb9]">Squawkings Aviation Software LTD?</h2>
            <p className=" text-gray-500 mb-12  font-RussoOne text-[#1f3b1f]">
            A leading technological company such as Squawkings Aviation Software only flourishes if it stays at the forefront of developments. That is why our team is made up of absolute experts in their respective fields. When working for Squawkings Aviation Software  you can safely say that you are at the cutting-edge of the aviation industry, one of the most innovative lines of business in the world.

Squawkings Aviation Software consists of a team of motivated, highly-qualified individuals who support and encourage each other in achieving mutual goals. You will therefore always find someone to give you a hand, just as much as you will be expected to provide your own input to solve a myriad of different challenges. As a SquawKing you will have the opportunity to develop yourself and your talents and be part of an international, highly competent team, and you can look forward to a modern, exciting and challenging place to work, with fair remuneration and exciting career prospects.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </section>
  <div className="flex flex-col-reverse lg:flex-row min-h-[150px] justify-between gap-8">
                <div className="w-full p-[15px] lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-[#1a4e19cf] font-RussoOne">What does</h1>
    <h5 className="text-xl font-bold mb-5 font-RussoOne text-[#1f3b1fb9]">Squawkings Aviation Software LTD expect from you?</h5>
                    <p className=" font-normal text-base leading-6 text-gray-600 dark:text-white font-RussoOne text-[#1f3b1fb9]"> Innovation, passion and world-wide teamwork are the cornerstones of our work ethic that drives each and every individual at Squawkings Aviation Software to provide cutting-edge solutions for our customers. In order to maintain our position as a global leader, we are looking for individuals who are willing to travel around the world and possess the necessary skills, passion and creativity to help us define, develop and deliver the solutions of tomorrow. Although the company language is English, other additional languages, e.g. French, would be an added advantage.
.</p>
                </div>
                <div className="w-full lg:w-8/12 h-full flex justify-end rounded-tl-[20px] rounded-br-[20px]">
                    <img className="h-fit" src="./slide5.webp" alt="A group of People" />
                </div>
            </div>
            <div className='p-10 rounded-[15px] bg-[#62626c57] text-[#213e15] w-fit mx-auto font-RussoOne my-5'>
                <span className='text-md lg:text-xl p2 lg:p-5  font-RussoOne'>Phone:</span> <span className='cursor-pointer  font-RussoOne'>+234 (0) 813 618 6836</span><br/>
                <br/>
                <span className='text-md lg:text-xl p2 lg:p-5  font-RussoOne'>E-mail:</span> <span className='cursor-pointer  font-RussoOne'>
                <a
              href="mailto: Support@squawkingsaviation.com.ng"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
               job@squawkingsaviation.com.ng
            </a></span>
            </div>
  <Footer/>
        </div>
    </>
  )
}

export default Careers