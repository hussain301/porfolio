import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
        scale:[1,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:['20%','20%','50%','80%','0%']

    }}
    transition={{
        duration:2.5,
    }}
    className='relative flex items-center justify-center '>
      
      <div className='border animate-ping absolute border-[#333333] w-[200px] h-[200px] mt-52 rounded-full'/>
      <div className='border absolute border-[#333333] w-[400px] h-[400px] mt-52 rounded-full'/>
      <div className='border absolute border-[#f7ab0a] opacity-20 animate-pulse w-[500px] h-[500px] mt-52 rounded-full'/>
       <div className='border opacity-20 absolute w-[600px] border-[#f7410a] mt-52 h-[600px] rounded-full animate-pulse '/>
      <div className=' border absolute animate-pulse opacity-20 border-[#0aa0f7] w-[700px] h-[700px] mt-52 rounded-full'/> 
    </motion.div>
  )
}

export default BackgroundCircle
