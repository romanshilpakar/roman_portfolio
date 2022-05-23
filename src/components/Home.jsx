import React,{ useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import AnimatedLetters from './AnimatedLettes';


const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["R", "o", "m", "a", "n", " ", "S", "h", "i","l","p","a","k","a","r"];
  const jobArray = [
    "B",
    "l",
    "o",
    "c",
    "k",
    "c",
    "h",
    "a",
    "i",
    "n",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    });
  }, []);
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
       {/* <h1> */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
          />
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        {/* <h2> */}
        <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a blockchain developer currently focused on
          building decentralized application on Ethereum Blockchain.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
          View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home