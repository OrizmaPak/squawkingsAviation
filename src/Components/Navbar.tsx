import React, { useEffect, useRef, useState, useContext } from 'react'
import  Home  from '../Pages/Home';
import { MyContextFunction, MyContextType } from '../App';
import AboutUs from '../Pages/AboutUs';
import Assk from '../Pages/Assk';
import Careers from '../Pages/Careers';
import ProductSquawkweb from '../Pages/ProductSquawkweb';
import ContactUs from '../Pages/ContactUs';
import LdRecorder from '../Pages/LdRecorder';
import "../index.css"


function Navbar() {
  const { change_page, setChange_page, pageone, setPageone, pagetwo, setPagetwo, pagethree, setPagethree, isPc , setIsPc, navIndicator, mobileNav, setMobileNav, setIsLoading } = useContext<MyContextType>(MyContextFunction);
  const [size, setSize] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [navtp, setnavtp] = useState<boolean>(false);
  const [indexMobile, setindexMobile] = useState([
    "navselectHome", 
    "navselectAboutUs",
    "navselectCareeers",
    "navselectProduct",
    "navselectsquawk",
    "navselectbusiness",
    "navselectAssk",
    "navselectContactUs",
  ]);
  const [indexPc, setindexPc] = useState([
    "navselectHomepc",
    "navselectAboutUspc",
    "navselectCareerspc",
    "navselectProductpc",
    "navselectsquawkpc",
    "navselectbusinesspc",
    "navselectAsskpc",
    "navselectContactUspc",
  ])
  const navTop = document.getElementById('navTop');
  console.log('isMobile', isMobile)
  console.log('isPc', isPc)

  const indicator =()=>{
    let a = setTimeout(() => {
      for(let i=0; i<indexMobile.length; i++){
        (document.getElementById(`${indexMobile[i]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[i]}`)! as HTMLElement).classList.remove('navMobileActive') : null;
        (document.getElementById(`${indexPc[i]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[i]}`)! as HTMLElement).classList.remove('navPcActive') : null;
        if(i == navIndicator){
          console.log('i', i, 'navIndicator', navIndicator, 'element', (document.getElementById(`${indexMobile[i]}`)! as HTMLElement), indexMobile[i])
          if(isPc == false){
            if(navIndicator == 4){
              (document.getElementById(`${indexMobile[3]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[3]}`)! as HTMLElement).classList.add('navMobileActive') : null;
              (document.getElementById(`${indexMobile[4]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[4]}`)! as HTMLElement).classList.add('navMobileActive') : null;
            }else if(navIndicator == 5){
              (document.getElementById(`${indexMobile[3]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[3]}`)! as HTMLElement).classList.add('navMobileActive') : null;
              (document.getElementById(`${indexMobile[5]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[5]}`)! as HTMLElement).classList.add('navMobileActive') : null;
             }else{
              console.log('i', i);
              (document.getElementById(`${indexMobile[i]}`)! as HTMLElement) ? (document.getElementById(`${indexMobile[i]}`)! as HTMLElement).classList.add('navMobileActive') : null;
            }
          }else{
            if(navIndicator == 4){
              (document.getElementById(`${indexPc[3]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[3]}`)! as HTMLElement).classList.add('navPcActive') : null;
              (document.getElementById(`${indexPc[4]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[4]}`)! as HTMLElement).classList.add('navPcActive') : null;
            }else if(navIndicator == 5){
              (document.getElementById(`${indexPc[3]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[3]}`)! as HTMLElement).classList.add('navPcActive') : null;
              (document.getElementById(`${indexPc[5]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[5]}`)! as HTMLElement).classList.add('navPcActive') : null;
             }else{
              console.log('i', i);
              (document.getElementById(`${indexPc[i]}`)! as HTMLElement) ? (document.getElementById(`${indexPc[i]}`)! as HTMLElement).classList.add('navPcActive') : null;
            }
            
          }
        }
      }
    }, 300);
  
  
  
  
    return () => {
      clearTimeout(a);
    }
  }

  useEffect(() => {
    console.log('navIndicator', navIndicator)
    console.log('indexMobile', indexMobile)
    console.log('indexPc', indexPc);
    indicator()
    let a = setTimeout(() => {
      setIsLoading(false)
      console.log('navIndicator', navIndicator)
      console.log('indexMobile', indexMobile)
      console.log('indexPc', indexPc);
      indicator()
    }, 700);
    return ()=>clearTimeout(a)
  }, [navIndicator])
  
  

  useEffect(() => {
    if(isPc == false){
      if((document.getElementById('navselectProduct')! as HTMLElement)){
        (document.getElementById('navselectProduct')!.children[0] as HTMLElement) ? (document.getElementById('navselectProduct')!.children[0] as HTMLElement).style.transform = 'rotate(90deg)' : null;
        (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.display = 'flex': null;
        (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.display = 'flex': null;
       let a = setTimeout(() => {
          (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.height = '50px': null;
          (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.height = '50px': null;
          (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '40px': null;
          (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '40px': null;
            setTimeout(() => {
            (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '20px': null;
            (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '20px': null;
            setTimeout(() => {
              (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '30px': null;
              (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '30px': null;
            }, 250);
          }, 250);
        }, 50);
        clearTimeout(a)
      }else{
        (document.getElementById('navselectProduct')!.children[0] as HTMLElement) ? (document.getElementById('navselectProduct')!.children[0] as HTMLElement).style.transform = 'rotate(0deg)' : null;
        (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '-230px': null;
        (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '-230px': null;
       let b = setTimeout(() => {
          (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.height = '0px': null;
          (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.height = '0px': null;
          setTimeout(() => {
            (document.getElementById('navselectbusiness')! as HTMLElement) ? (document.getElementById('navselectbusiness')! as HTMLElement).style.display = 'none': null;
            (document.getElementById('navselectsquawk')! as HTMLElement) ? (document.getElementById('navselectsquawk')! as HTMLElement).style.display = 'none': null;
          }, 250);
        }, 50);
       clearTimeout(b) 
      }
    }else{
      if((document.getElementById('navselectProductpc')! as HTMLElement)){
        (document.getElementById('navselectProductpc')!.children[0] as HTMLElement) ? (document.getElementById('navselectProductpc')!.children[0] as HTMLElement).style.transform = 'rotate(90deg)' : null;
        (document.getElementById('navselectbusinesspc')! as HTMLElement) ? (document.getElementById('navselectbusinesspc')! as HTMLElement).style.display = 'flex': null;
        (document.getElementById('navselectsquawkpc')! as HTMLElement) ? (document.getElementById('navselectsquawkpc')! as HTMLElement).style.display = 'flex': null;
        let d = setTimeout(() => {
          (document.getElementById('navselectsquawkpc')! as HTMLElement) ? (document.getElementById('navselectsquawkpc')! as HTMLElement).style.top = '50px': null;
          setTimeout(() => {
            (document.getElementById('navselectbusinesspc')! as HTMLElement) ? (document.getElementById('navselectbusinesspc')! as HTMLElement).style.top = '90px': null;
          }, 50);
        }, 50);
        clearTimeout(d)
      }else{
        (document.getElementById('navselectProductpc')!.children[0] as HTMLElement) ? (document.getElementById('navselectProductpc')!.children[0] as HTMLElement).style.transform = 'rotate(0deg)' : null;
        (document.getElementById('navselectbusinesspc')! as HTMLElement) ? (document.getElementById('navselectbusinesspc')! as HTMLElement).style.display = 'flex': null;
        (document.getElementById('navselectsquawkpc')! as HTMLElement) ? (document.getElementById('navselectsquawkpc')! as HTMLElement).style.display = 'flex': null;
        let e = setTimeout(() => {
          (document.getElementById('navselectsquawkpc')! as HTMLElement) ? (document.getElementById('navselectsquawkpc')! as HTMLElement).style.top = '-550px': null;
          setTimeout(() => {
            (document.getElementById('navselectbusinesspc')! as HTMLElement) ? (document.getElementById('navselectbusinesspc')! as HTMLElement).style.top = '-590px': null;
          }, 50);
        }, 50);
        clearTimeout(e)
      }
      
    }
  }, [isPc])
  
  useEffect(()=>{
    window.addEventListener('resize', e=>setSize(window.innerWidth));
    if(size < 976){
      setIsMobile(true)
        }else{
          setIsMobile(false)
        }
    if(size >= 976){
      setIsPc(true)
        }else{
          setIsPc(false)
        }
   return window.removeEventListener('resize', e=>setSize(window.innerWidth))
},[size]);

useEffect(()=>{
if(isPc == false){
    const togglenavtop = ()=>{
      navTop ? 
      navtp ? navTop!.style.right = '0%'
      :
       navTop!.style.right = '100%'
       :
       null
    }
    
    
    let tt = setTimeout(()=>{
      navtp ? setnavtp(false) : setnavtp(true)
      togglenavtop() 
    },5000)
    return clearTimeout(tt)
  }
}, [isPc])

  const bgimg = {
    // background: 'url("./istockphoto-155439315-170667a.jpg")',
    // backgroundSize: 'cover',
  }
  
  const toogleMenu = () =>{
    mobileNav == true ? setMobileNav(false) : setMobileNav(true);
    indicator()
  }
  
  useEffect(()=>{
    if(isPc == false){
      if(mobileNav == true){
        (document.getElementById('menuList')! as HTMLElement).classList.contains('swing-right-fwdR') ? (document.getElementById('menuList')! as HTMLElement).classList.remove('swing-right-fwd') : (document.getElementById('menuList')! as HTMLElement).classList.add('swing-right-fwdR');
        (document.getElementById('menuList')! as HTMLElement).classList.remove('swing-right-fwd'); 
      (document.getElementById('menuListContainer')! as HTMLElement).style.width ='300px';
    }else{
      (document.getElementById('menuList')! as HTMLElement).classList.contains('swing-right-fwd') ? (document.getElementById('menuList')! as HTMLElement).classList.remove('swing-right-fwdR') : (document.getElementById('menuList')! as HTMLElement).classList.add('swing-right-fwd');
      (document.getElementById('menuList')! as HTMLElement).classList.remove('swing-right-fwdR');
      (document.getElementById('menuListContainer')! as HTMLElement).style.width ='0px';
    }
  }
  
},[mobileNav])

const navproduct = () =>{
  if(isPc == false){
    (document.getElementById('navselectProduct')! as HTMLElement).classList.contains('open') ? (document.getElementById('navselectProduct')! as HTMLElement).classList.remove('open') : (document.getElementById('navselectProduct')! as HTMLElement).classList.add('open');
    if((document.getElementById('navselectProduct')! as HTMLElement).classList.contains('open')){
      (document.getElementById('navselectProduct')!.children[0] as HTMLElement) ? (document.getElementById('navselectProduct')!.children[0] as HTMLElement).style.transform = 'rotate(90deg)' : null;
      (document.getElementById('navselectbusiness')! as HTMLElement).style.display = 'flex';
      (document.getElementById('navselectsquawk')! as HTMLElement).style.display = 'flex';
      setTimeout(() => {
        (document.getElementById('navselectbusiness')! as HTMLElement).style.height = '50px';
        (document.getElementById('navselectsquawk')! as HTMLElement).style.height = '50px';
        (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '40px';
        (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '40px';
        setTimeout(() => {
          (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '20px';
          (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '20px';
          setTimeout(() => {
            (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '30px';
            (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '30px';
          }, 250);
        }, 250);
      }, 50);
    }else{
      (document.getElementById('navselectProduct')!.children[0] as HTMLElement) ? (document.getElementById('navselectProduct')!.children[0] as HTMLElement).style.transform = 'rotate(0deg)' : null;
      (document.getElementById('navselectsquawk')! as HTMLElement).style.left = '-230px';
      (document.getElementById('navselectbusiness')! as HTMLElement).style.left = '-230px';
      setTimeout(() => {
        (document.getElementById('navselectbusiness')! as HTMLElement).style.height = '0px';
        (document.getElementById('navselectsquawk')! as HTMLElement).style.height = '0px';
        setTimeout(() => {
          (document.getElementById('navselectbusiness')! as HTMLElement).style.display = 'none';
          (document.getElementById('navselectsquawk')! as HTMLElement).style.display = 'none';
        }, 250);
      }, 50);
      
    }
  }else{
    (document.getElementById('navselectProductpc')! as HTMLElement).classList.contains('open') ? (document.getElementById('navselectProductpc')! as HTMLElement).classList.remove('open') : (document.getElementById('navselectProductpc')! as HTMLElement).classList.add('open');
    if((document.getElementById('navselectProductpc')! as HTMLElement).classList.contains('open')){
      (document.getElementById('navselectProductpc')!.children[0] as HTMLElement) ? (document.getElementById('navselectProductpc')!.children[0] as HTMLElement).style.transform = 'rotate(90deg)' : null;
      (document.getElementById('navselectbusinesspc')! as HTMLElement).style.display = 'flex';
      (document.getElementById('navselectsquawkpc')! as HTMLElement).style.display = 'flex';
      setTimeout(() => {
        (document.getElementById('navselectsquawkpc')! as HTMLElement).style.top = '50px';
        setTimeout(() => {
          (document.getElementById('navselectbusinesspc')! as HTMLElement).style.top = '90px';
        }, 50);
      }, 50);
    }else{
      (document.getElementById('navselectProductpc')!.children[0] as HTMLElement) ? (document.getElementById('navselectProductpc')!.children[0] as HTMLElement).style.transform = 'rotate(0deg)' : null;
      (document.getElementById('navselectbusinesspc')! as HTMLElement).style.display = 'flex';
      (document.getElementById('navselectsquawkpc')! as HTMLElement).style.display = 'flex';
      setTimeout(() => {
        (document.getElementById('navselectsquawkpc')! as HTMLElement).style.top = '-550px';
        setTimeout(() => {
          (document.getElementById('navselectbusinesspc')! as HTMLElement).style.top = '-590px';
        }, 50);
      }, 50);
    }
    
  }
  }

  
  
  const Navitems = () =>{
  if(isPc == false){
    return(
      <>
        <p id="navselectHome" onClick={()=>setChange_page("Home")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[20px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>Home</p>
        <p id="navselectAboutUs" onClick={()=>setChange_page("AboutUs")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[20px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>About Us</p>
        <p id="navselectCareeers" onClick={()=>setChange_page("Careers")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[20px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>Careers</p>
        <p id='navselectProduct' onClick={navproduct} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[20px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>Products <img className=" hover:text-[white] rotate-0 transition-all duration-500 hover:bg-[#809363] w-[20px] relative bottom-1 top-[0px] left-4 h-[50%]" src="./optionarrow.png"/></p>
        <p id='navselectsquawk' onClick={()=>setChange_page("ProductSquawkweb")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-[19px] relative left-[-230px] h-[0px] hidden justify-start items-center mb-[20px] pl-[20px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>SquawkAv</p>
        <p id='navselectbusiness' onClick={()=>setChange_page("LdRecorder")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-[19px] relative left-[-230px] h-[0px] hidden justify-start items-center mb-[20px] pl-[20px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>SquawkLID</p>
        <p id="navselectAssk" onClick={()=>setChange_page("Assk")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[20px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>ASSK Initiative</p>
        <p id="navselectContactUs" onClick={()=>setChange_page("ContactUs")} className=' hover:text-[white] hover:bg-[#809363] rounded-tl-[20px] rounded-br-[20px] w-full font-bold font-RussoOne text-2xl h-[50px] flex justify-start items-center mb-[0px] pl-[45px] text-[#46582c] transition-all duration-300 shadow-lg shadow-[hsl(150,22%,15%)] rounded-sm bg-[#ecf0e1d5] cursor-pointer'>Contact Us</p>
      </>
    )
  }else{
    return(
      <>
        <p id="navselectHomepc" onClick={()=>setChange_page("Home")} className='hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded-br-lg hover:rounded-tl-lg w-fit font-medium h-[30px] my-auto flex justify-start items-center mr-[10px] px-[5px] text-[#46582c] transition-all duration-300 cursor-pointer'>Home</p>
        <p id="navselectAboutUspc" onClick={()=>setChange_page("AboutUs")} className='hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded-br-lg hover:rounded-tl-lg w-fit font-medium  h-[30px] my-auto flex justify-start items-center mr-[10px] px-[5px] text-[#46582c] transition-all duration-300 cursor-pointer'>About Us</p>
        <p id="navselectCareerspc" onClick={()=>setChange_page("Careers")} className='hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded-br-lg hover:rounded-tl-lg w-fit font-medium  h-[30px] my-auto flex justify-start items-center mr-[10px] px-[5px] text-[#46582c] transition-all duration-300 cursor-pointer'>Careers</p>
        <p id='navselectProductpc' onClick={navproduct} className='hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded- br-lg hover:rounded-tl-lg w-fit font-medium h-[30px] my-auto flex justify-start items-center mr-[10px] px-[5px] text-[#46582c] transition-all duration-300 cursor-pointer'>Products <img className=" invert rotate-0 transition-all duration-500 hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded-br-lg hover:rounded-tl-lg w-[10px] relative bottom-1 top-[-1px] left-[2px] h-[50%]" src="./optionarrow.png"/></p>
        <p id='navselectsquawkpc' onClick={()=>setChange_page("ProductSquawkweb")} style={navbg} className='hover:bg-[#809363] font-RussoOne hover:text-[#257529] hover:rounded-br-lg font-medium hover:rounded-tl-lg w-[280px] bg-[white] text-base text-[19px] absolute h-[50px] flex justify-center items-center top-[-550px] left-[140px] px-[20px] text-[#46582c] transition-all duration-300 cursor-pointer'>SquawkAv</p>
        <p id='navselectbusinesspc' onClick={()=>setChange_page("LdRecorder")}  style={navbg} className='hover:bg-[#809363] font-RussoOne hover:text-[#2b8b30] hover:rounded-br-lg font-medium hover:rounded-tl-lg w-[280px] bg-[white] text-base rounded-b-[10px] text-[19px] absolute h-[50px] flex justify-center items-center top-[-590px] left-[140px] px-[20px] text-[#46582c] transition-all duration-300 cursor-pointer'>SquawkLID</p>
        <p id="navselectAsskpc" onClick={()=>setChange_page("Assk")} className='hover:bg-[#809363] font-RussoOne hover:text-[white] hover:rounded-br-lg hover:rounded-tl-lg w-fit font-medium  h-[30px] my-auto flex justify-start items-center mr-[10px] px-[5px] text-[#46582c] transition-all duration-300 cursor-pointer'>ASSK Initiative</p>
        <p id="navselectContactUspc" onClick={()=>setChange_page("ContactUs")} className='bg-[#809363] font-RussoOne text-[white] rounded-br-lg rounded-tl-lg w-fit font-medium h-[40px] my-auto flex  justify-start items-center mr-[20px] p-[15px] transition-all duration-300 cursor-pointer'>Contact Us</p>
      </> 
    )
  }
    
  }

  const navbg = {
    // background: "url('./navbg.jpg')",
    background: "url('./navbg.webp'), linear-gradient(rgb(228,233,203), rgb(228,233,203))",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
  }
  return (
    <>
      <nav className='z-[101] w-[100vw] fixed h-[80px] block min-h-fit bg-[white] transition-all max-w-[1440px] m-auto'>
          <div id='navTop' className='w-[200vw] h-fit bg-[#2e2020] transition-all duration-700 flex justify-between relative lg:w-[100vw]  sm:justify-between lg:max-w-[1440px] m-auto '>

              <div className='flex w-fit px-[20px] py-[0px] items-center'>
                  <img className='w-[15px] mr-[3px]' src="phone.png"/>
                  <p className="text-[white]">+234 (0) 8136186836</p>
              </div>
              <div className='flex w-fit px-[20px] py-[0px] items-center cursor-pointer'>
                  <img className='w-[15px] mr-[3px]' src="email.webp"/>
                  <p className="text-[white]"><a
              href="mailto: Support@squawkingsaviation.com.ng"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
               Support@squawkingsaviation.com.ng
            </a></p>
              </div>

          </div>
          {/* NAVIGATION */}
          <div style={navbg} className='h-[60px] p-[5px] flex justify-between relative items-center w-screen shadow-md bg max-w-[1440px] m-auto'>
            <img onClick={()=>setChange_page("Home")} className='w-[200px] h-100px' src="logo_.png" alt="" />
            <div className='hidden lg:flex w-fit h-[50px] relative '>
                  {isPc == true ? <Navitems /> : null}
            </div>
            <img className='w-[50px] mr-[20px] lg:hidden' onClick={toogleMenu} src={mobileNav == true ? 'close.png' : 'menu.png'} alt="" /> 
            <div style={bgimg} id='menuListContainer' className='bg-cover bg-no-repeat absolute left-[-10px] w-[300px] top-[60px] flex flex-col p-[0px] h-[100vh] bg-[#875a5a] lg:hidden'>
              <div className='w-full h-[100vh] overflow-hidden  shadow-lg bg-blue shadow-[hsl(150,22%,15%)] lg:w-[800px] lg:h-fit lg:bg-[white] md'>
                <video className='object-cover right-0 bg-cover buttom-0 min-w-[100px] min-h-[100%] z-[-1]' autoPlay muted loop src="./planetakeoff3.mp4" id="myVideo">
                </video>
                <div id='menuList' className='absolute z-[21] top-[50px] w-[350px] h-fit flex justify-start p-[30px] flex-col items-start left-[7%] bg-opacity-70 transition-all duration-300'>
                  {isPc == false ? <Navitems /> : null}
                </div>
              </div>
            </div>
          </div>

      </nav>
    </>
  )
} 

export default Navbar