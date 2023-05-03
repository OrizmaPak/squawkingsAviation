import React, { useState, useEffect } from 'react'
import  Home  from './Pages/Home';
import reactLogo from './assets/react.svg'
import Loading from './Components/Loading'
import Navbar from './Components/Navbar'
import PageHandler, { slide_left_right, slide_right_left, third_screen } from './Components/PageHandler'
import './index.css'
import Footer from './Components/Footer';
import Assk from './Pages/Assk';
import AboutUs from './Pages/AboutUs';
import Careers from './Pages/Careers';
import ProductSquawkweb from './Pages/ProductSquawkweb';
import LdRecorder from './Pages/LdRecorder';
import ContactUs from './Pages/ContactUs';
import ProductDetails from './Pages/ProductDetails';

export const MyContext = React.createContext({} as any);
// export const MyContextFunction = React.createContext(()=>{});
export type MyContextType = {
  change_page?: any;
  setChange_page: React.Dispatch<React.SetStateAction<any>>;
  change_pagesub?: any;
  setChange_pagesub: React.Dispatch<React.SetStateAction<any>>;
  pagethree?: any;
  setPagethree: React.Dispatch<React.SetStateAction<any>>;
  pagetwo?: any;
  setPagetwo: React.Dispatch<React.SetStateAction<any>>;
  pageone?: any;
  setPageone: React.Dispatch<React.SetStateAction<any>>;
  isPc?: any;
  setIsPc: React.Dispatch<React.SetStateAction<any>>;
  navIndicator?: any;
  setnavIndicator: React.Dispatch<React.SetStateAction<any>>;
  mobileNav?: any;
  setMobileNav: React.Dispatch<React.SetStateAction<any>>;
  isLoading?: any;
  setIsLoading: React.Dispatch<React.SetStateAction<any>>;
};

export const MyContextFunction = React.createContext<MyContextType>({
  change_page: null,
  setChange_page: () => {},
  change_pagesub: null,
  setChange_pagesub: () => {},
  pagethree: null,
  setPagethree: () => {},
  pagetwo: null,
  setPagetwo: () => {},
  pageone: null,
  setPageone: () => {},
  isPc: null,
  setIsPc: () => {},
  navIndicator: null,
  setnavIndicator: () => {},
  mobileNav: null,
  setMobileNav: () => {},
  isLoading: null,
  setIsLoading: () => {},
});


function App() {
  
  
  function MyProvider({ children }: { children: React.ReactNode }) {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPc, setIsPc] = useState<boolean>(false);
  const [pageone, setPageone] = useState<any>(null);
  const [pagetwo, setPagetwo] = useState<any>(null);
  const [pagethree, setPagethree] = useState<any>(null);
  const [change_page, setChange_page] = useState<any>(null);
  const [change_pagesub, setChange_pagesub] = useState<any>(null)
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [pageId, setPageId] = useState<any>('Home')
  const [prevPageindex, setPrevPageindex] = useState<number>(0)
  const [navIndicator, setnavIndicator] = useState<any>('');
  const [goto, setGoto] = useState<any>(null)
  const [indexx, setindex] = useState([
    'Home',
    'AboutUs',
    'Careers',
    'Product',
    'ProductSquawkweb',
    'LdRecorder',
    'Assk',
    'ContactUs'
  ])
  console.log('change_page', typeof pageone);

  useEffect(() => {
    console.log('location',window.location.href);
    window.location.href.split('/'[3]) ? setGoto(window.location.search) : null;
  }, [])

  useEffect(()=>{
    let a = setTimeout(() => {
      goto == '?beta_testing' ? setChange_pagesub(<ProductDetails/>) : null;
    }, 600);
    return ()=>clearTimeout(a)
  },[goto])
  

     useEffect(() => {
       if(change_page == null)return setChange_page("Home");
       setIsLoading(true);
    change_pager(change_page);
  }, [change_page])

  useEffect(() => {
    if(change_pagesub === null){
      third_screen('close');
      let a = setTimeout(() => {
        setPagethree(change_pagesub)
      }, 1500);
      return clearTimeout(a);
    }else{
      setPagethree(change_pagesub)
      third_screen('call');
    }
  }, [change_pagesub])
  
useEffect(() => {

  console.log('indexx', indexx);
  console.log('pageId', pageId);
  
  let currentIndex = indexx.indexOf(`${pageId}`);
  console.log('currentIndex', currentIndex);

  console.log('raw info', indexx.indexOf(`${pageId}`))

  if(prevPageindex > currentIndex){
    slide_left_right();
  }else{
    slide_right_left();
  }
  setPrevPageindex(currentIndex)

  console.log('currentIndex', currentIndex, 'prevPageindex', prevPageindex)


    setnavIndicator(currentIndex);

}, [pageId])

  const tsxreturn =(data:String)=>{
    if(data == "Home")return <Home />
    if(data == "AboutUs")return <AboutUs />
    if(data == "Careers")return <Careers />
    if(data == "ProductSquawkweb")return <ProductSquawkweb />
    if(data == "LdRecorder")return <LdRecorder />
    if(data == "Assk")return <Assk />
    if(data == "ContactUs")return <ContactUs />
  }

  
  const change_pager = (page:any) =>{
    setChange_pagesub(null);
    mobileNav == true ? setMobileNav(false) : null;
    console.log('name', page)
    console.log('name', page == "Home")
    // console.log('name', page.type)
    // console.log('name', page.type.name)
    let currentPage = (document.getElementById('pageone')! as HTMLElement) ? (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? setPageone : setPagetwo : setPageone;
    let newPage = (document.getElementById('pageone')! as HTMLElement) ? (document.getElementById('pageone')! as HTMLElement).classList.contains('z-[2]') ? setPagetwo : setPageone : setPagetwo;
    newPage(tsxreturn(page));
    setPageId(page);
    // determineTransition()
    // slide_left_right();
    let x = setTimeout(() => {
      // alert('jnsdkfnsjdn')
          currentPage(null);
      }, 1000);
      return ()=>clearTimeout(x);
;}

    return (
      <MyContextFunction.Provider value={{ change_page, setChange_page, pagethree, setPagethree, pagetwo, setPagetwo, pageone, setPageone, change_pagesub, setChange_pagesub, isPc , setIsPc, navIndicator, setnavIndicator, mobileNav, setMobileNav, isLoading, setIsLoading }}>
        {children}
      </MyContextFunction.Provider>
    );
  } 
  
 
  

  return (
    <>
      <MyProvider>
        <div className='bg-[brown] test-justify sm:bg-[grey] md:bg-[yellow] lg:bg-[blue] xl:bg-[red] w-[100%] h-[100vh] max-w-[1440px] m-auto !overflow-hidden'>
          <Navbar />
            <PageHandler />
          <Loading/>
        </div>
      </MyProvider>
    </>
  )
}

export default App;