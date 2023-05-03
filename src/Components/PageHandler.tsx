import React, { useEffect, useState, useContext } from 'react'
import { MyContext, MyContextFunction, MyContextType } from '../App';
import Home from '../Pages/Home';
import Loading from './Loading';

export const slide_left_right = () =>{
    let currentPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pageone')! as HTMLElement) : (document.getElementById('pagetwo')! as HTMLElement);
    let newPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pagetwo')! as HTMLElement) : (document.getElementById('pageone')! as HTMLElement);
    console.log(currentPage)
    console.log(newPage)

    newPage.style.right = '100%';
    currentPage.style.left = '0%';
    currentPage.style.transitionDuration = '0ms';
    newPage.style.transitionDuration = '0ms';
    setTimeout(() => {
        currentPage.style.transitionDuration = '300ms';
        newPage.style.transitionDuration = '300ms';
        currentPage.style.transform = 'scale(0.6)';
        newPage.style.transform = 'scale(0.6)';
        setTimeout(() => {
            currentPage.style.left = '100%';
            newPage.style.right = '0%';
            setTimeout(() => {
                currentPage.style.transform = 'scale(1)';
                newPage.style.transform = 'scale(1)';
                setTimeout(() => {
                    newPage.classList.add('z-[2]');
                    currentPage.classList.remove('z-[2]');
                    // currentPage.style.transitionDuration = '0ms';
                    // newPage.style.transitionDuration = '0ms';
                    currentPage.style.left = '';
                    newPage.style.right = '';
                    newPage.style.right = '';
                    currentPage.style.left = '';
                }, 50);
                
            }, 250);
        }, 150);
        
    }, 10);
}

export const slide_right_left = () =>{
    let currentPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pageone')! as HTMLElement) : (document.getElementById('pagetwo')! as HTMLElement);
    let newPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pagetwo')! as HTMLElement) : (document.getElementById('pageone')! as HTMLElement);
    console.log(currentPage)
    console.log(newPage)

    newPage.style.left = '100%';
    currentPage.style.right = '0%';
    currentPage.style.transitionDuration = '0ms';
    newPage.style.transitionDuration = '0ms';
    setTimeout(() => {
        currentPage.style.transitionDuration = '300ms';
        newPage.style.transitionDuration = '300ms';
        currentPage.style.transform = 'scale(0.6)';
        newPage.style.transform = 'scale(0.6)';
        setTimeout(() => {
            currentPage.style.right = '100%';
            newPage.style.left = '0%';
            setTimeout(() => {
                currentPage.style.transform = 'scale(1)';
                newPage.style.transform = 'scale(1)';
                setTimeout(() => {
                    newPage.classList.add('z-[2]');
                    currentPage.classList.remove('z-[2]');
                    // currentPage.style.transitionDuration = '0ms';
                    // newPage.style.transitionDuration = '0ms';
                    currentPage.style.right = '';
                    newPage.style.left = '';
                    newPage.style.left = '';
                    currentPage.style.right = '';
                }, 50);
                
            }, 250);
        }, 150);
        
    }, 10);
    // let currentPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pageone')! as HTMLElement) : (document.getElementById('pagetwo')! as HTMLElement);
    // let newPage = (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? (document.getElementById('pagetwo')! as HTMLElement) : (document.getElementById('pageone')! as HTMLElement);
    // console.log(currentPage)
    // console.log(newPage)

    // newPage.style.left = '100%';
    // currentPage.style.right = '0%';
    // currentPage.style.transitionDuration = '0ms';
    // newPage.style.transitionDuration = '0ms';
    // setTimeout(() => {
    //     currentPage.style.transitionDuration = '500ms';
    //     newPage.style.transitionDuration = '500ms';
    //     currentPage.style.transform = 'scale(0.5)';
    //     newPage.style.transform = 'scale(0.5)';
    //     setTimeout(() => {
    //         currentPage.style.right = '100%';
    //         newPage.style.left = '0%';
    //         setTimeout(() => {
    //             currentPage.style.transform = 'scale(1)';
    //             newPage.style.transform = 'scale(1)';
    //         }, 250);
    //     }, 150);
    //     setTimeout(() => {
    //         currentPage.style.transitionDuration = '0ms';
    //         newPage.style.transitionDuration = '0ms';
    //         newPage.classList.add('z-[2]');
    //         currentPage.classList.remove('z-[2]');
    //         currentPage.style.right = '';
    //         newPage.style.left = '';
    //         newPage.style.left = '';
    //         currentPage.style.right = '';
    //     }, 1000);
    //     // setTimeout(() => {
    //     //     slide_left_right();
    //     // }, 3000);
    // }, 300);
}

export const plangebg = {
    background: 'url("./planebg.webp")',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

export const third_screen =(action?:string)=>{
    // alert()
    if(action === 'call'){
            (document.getElementById('pagethree')! as HTMLElement).style.transitionDuration = '0ms';
            (document.getElementById('pagethree')! as HTMLElement).style.top = '-120%';
            setTimeout(() => {
                (document.getElementById('pagethree')! as HTMLElement).style.transitionDuration = '500ms';
                (document.getElementById('pagethree')! as HTMLElement).style.top = '-1%';        
            }, 200);
            return (document.getElementById('pagethree')! as HTMLElement).click();
        }
        if(action === 'close'){
            (document.getElementById('pagethree')! as HTMLElement).style.transitionDuration = '0ms';
            (document.getElementById('pagethree')! as HTMLElement).style.top = '-1%';
            setTimeout(() => {
                (document.getElementById('pagethree')! as HTMLElement).style.transitionDuration = '500ms';
                (document.getElementById('pagethree')! as HTMLElement).style.top = '-120%';        
            }, 200);
            return
    }
  }
  
  function PageHandler() {
    //   const [pageone, pagetwo, pagethree] = useContext(MyContext);
      const { change_page, setChange_page, pageone, setPageone, pagetwo, setPagetwo, pagethree, setPagethree } = useContext<MyContextType>(MyContextFunction);

      useEffect(() => {
        // console.log('change_page', typeof change_page);
        console.log('change_page', typeof pageone);
      }, [])
      

    // useEffect(()=>{
    //     setPageone(<Home/>)  ;
    // //     const interval = setTimeout(() => {
    // //     change_page(<Home/>)  
    // //     }, 5000);
    // //     return ()=>clearTimeout(interval)
  
    //   },[])

    
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //       setCurrentIndex(newIndex);
    //       console.log(currentIndex) 
      
    //   },7000)
    //     return ()=>clearInterval(interval)
  
    //   },[currentIndex])

  return (
    <>
        <div id='xxxx' onClick={slide_left_right}  className='h-[80px] w-screen bg-[white]'>

        </div>
        <div style={plangebg} className='w-[100%] bg-green h-[200%] overflow-hidden relative transition-all'>

            <div id='pageone' className='w-[100%] h-[50%] relative bg-[#ffffff] z-[2] transiton-all overflow-auto duration-[500ms]'>
                {pageone}
            </div>
            <div id="pagetwo" className='w-[100%] h-[50%] relative bg-[#20cfff] top-[-50%] transiton-all overflow-auto duration-[500ms]'>
                {pagetwo}
            </div>
            <div id="pagethree" className='w-[100%] h-[48%] absolute bg-[#ffffff] shadow-[0px_7px_6px_21px_#00000024] z-10 top-[-120%] insert-0 transiton-all overflow-auto duration-[500ms]'>
                {pagethree}
            </div>

        </div>
    </>
  )
}

export default PageHandler