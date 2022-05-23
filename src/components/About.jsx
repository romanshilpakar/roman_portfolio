import React from 'react';
import "./About.scss";
import ETH from '../assets/eth.png';
import SOL from '../assets/sol.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import IPFS from '../assets/ipfs.png';
import BITCOIN from '../assets/bitcoin.png';


const About = () => {
  return (

    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          {/* <div></div> */}
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello. I'm Roman, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a blockchain enthusiast. I believe the future technology will be based on
                Blockchain. I have learnt about bitcoin and ethereum fundamentals and their working.
                I have been in this field since 2020. I support decentralization, transparency, immutability,
                and security.
                </p>  
            </div>          
          </div>
      <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
        <img src={ReactImg} alt="ipfs" />
        </div>
        <div className="face2">
        <img src={ETH} alt="ipfs" />
        </div>
        <div className="face3">
        <img src={SOL} alt="ipfs" />
        </div>
        <div className="face4">
        <img src={Node} alt="ipfs" />
        </div>
        <div className="face5">
         <img src={BITCOIN} alt="ipfs" />
        </div>
        <div className="face6">
        <img src={IPFS} alt="ipfs" />
        </div>
      </div>
    </div>
      </div>


      



    </div>
      


  )
}

export default About