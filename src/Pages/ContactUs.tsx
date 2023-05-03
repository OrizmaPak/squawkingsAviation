import React from 'react'
import Footer from '../Components/Footer'


function ContactUs() {
    const navbg = {
        // background: "url('./navbg.webp')",
        background: "url('./navbg.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }
  return(
    <>
        <div style={navbg} className="px-6 py-12 md:px-12">
                    <h2 className="text-3xl font-bold text-[#3a6020] mb-4 text-blue-600 display-5  font-RussoOne">Head Office</h2>
                    <h2 className="text-2xl font-bold text-[#634e1e] mb-4 text-blue-600 display-5  font-RussoOne">God's Grace Plaza 2nd Floor, 65, Allen Avenue, Ikeja, Lagos State, Nigeria.</h2>

                    <h2 className="text-3xl font-bold text-[#3a6020] mb-4 text-blue-600 display-5  font-RussoOne">Email Address</h2>
                    <h2 className="text-2xl font-bold text-[#4d3c95] cursor-pointer underline mb-4 text-blue-600 display-5  font-RussoOne"><a
              href="mailto: Support@squawkingsaviation.com.ng"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
               Support@squawkingsaviation.com.ng
            </a></h2>

                    <h2 className="text-3xl font-bold text-[#3a6020] mb-4 text-blue-600 display-5  font-RussoOne">Phone Number</h2>
                    <h2 className="text-2xl font-bold text-[#a03131] cursor-pointer mb-4 text-blue-600 display-5  font-RussoOne">+234 (0) 813 618 6836</h2>
                    
        </div>
        <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.853359569996!2d3.3184000156250026!3d6.602522000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9231a7d72121%3A0x835cb53c3dc3ae59!2sSquawkings%20Aviation%20Software%20Limited!5e0!3m2!1sen!2sng!4v1676854680191!5m2!1sen!2sng" 
                width="100%" 
                height="450" 
                style={{border:'0'}} 
                allowFullScreen 
                loading="lazy" >
                </iframe>
        <Footer/>
    </>
  )
}

export default ContactUs