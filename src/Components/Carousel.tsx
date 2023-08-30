import { Typography } from '@mui/material';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { MyContextFunction, MyContextType } from '../App';
import Home from '../Pages/Home';
import Loading from './Loading';
import { TextDecrypt } from './TextDecrypt';

function Carousel() {

  const slides = [
    {url:'./slide3-scaled.webp', text:'Introducing A Single Technology Solution'},
    {url:'./slide1.webp', text:'Enabling A Net-Centric ATM Operations'},
    {url:'./slide3.webp', text:'Supporting Your Transition To Enabling a Net-Centric Approach'},
    {url:'./slide2.webp', text:'Drastically Reducing The Need For Verbal Coordination In The ATM Environment'},
    {url:'./slide6-scaled.webp', text:'Our ATM Solution Is Based On A Robust Product Strategy For The Next Fifty Years And Beyond, Involving All Aviation Stakeholders'},
    // {url:'./slide6.webp', text:'THIS IS A TESTAMENT'}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex)
};

const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex)
};

const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
};


    const hook = useCallback(
      () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex)
    
    },
    [],
    )
    
    useEffect(()=>{
      const interval = setInterval(()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex) 
    
    },7000)
      return ()=>clearInterval(interval)

    },[currentIndex])
    const { change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, isPc } = useContext<MyContextType>(MyContextFunction);
    useEffect(() => {
      console.log('setChange_page carousel', typeof setChange_page);
       
    }, [])
   
  

  return (
    <div className='max-w-[1400px] capitalize	 h-[580px] w-full bg-[white] m-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full shadow-2xl bg-center bg-cover duration-500'
      >
        <img className='hidden' src="./slide3-scaled.webp" alt="" />
        <img className='hidden' src="./slide1.webp" alt="" />
        <img className='hidden' src="./slide3.webp" alt="" />
        <img className='hidden' src="./slide2.webp" alt="" />
        <img className='hidden' src="./slide6-scaled.webp" alt="" />
      </div>
      {/* Left Arrow */}
      <div onClick={prevSlide} className='hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-[#567358] hover:p-3'>
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div onClick={nextSlide} className='hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  hover:bg-[#567358] hover:p-3'>
        <BsChevronCompactRight size={30} />
      </div>
      <div className=' absolute z-10 h-fit w-full top-[86%] rounded-2xl flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
          >
            <RxDotFilled color='green' size={slideIndex == currentIndex ? 25 : 20} style={{}}/>
          </div>
        ))}
      </div>
        <button onClick={()=>change_page("Home")} className='relative w-[200px] bg-[#40592e] hover:text-[#40592ea2] text-[white] hover:bg-[white] text-xl font-bold py-2 px-4 rounded mt-[20px] content-end'>Getting Started</button>
      <div className='absolute top-[0%] box-border w-screen px-[20px] min-w-fit max-w-screen flex justify-around items-center flex-col text-[54px] md:ext-4xl leading-[50px] font-RussoOne shadow-2xl shadow-[black] bgm-[#135103a2] rounded-[20px font-extrabold font-2xl text-[#209a15] h-full'>
        <Typography className='animated-gradient' style={{fontFamily: "RussoOne", textAlign: 'center', fontSize: `${isPc == true ? '48px' : '33px'}`, fontWeight: '1000', background: '#135103a2', padding: '8px', color: 'white', borderBottomRightRadius: '20px', borderTopLeftRadius: '20px', animation: 'animateBg 7s linear infinite',
    backgroundImage: 'linear-gradient(90deg,#daffef92,#30312b,#cfefe08a,#34372e,#c3e5d771)',
    backgroundSize: '400% 100%'}}>
          <TextDecrypt  text={`${slides[currentIndex].text}`} />
        </Typography>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Carousel;
