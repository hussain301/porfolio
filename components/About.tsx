import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  bgInfo:string;
  profilePic:string;
}

const About = ({bgInfo,profilePic}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto pb-10 justify-evenly px-8 items-center"
    >
      <h3 className="top-20 absolute tracking-[20px] text-gray-500 uppercase text-2xl">
        About
      </h3>
      <motion.img
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -300, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={profilePic}
        className="-mb-[90px] md:m-0  flex-shrink-0 h-40 w-40 object-cover  md:rounded-lg md:w64 md:h-80 rounded-full xl:h-[400px] xl:w-[300px] xl:-mb-14"
      ></motion.img>
      <div className="space-y-3 -mb-[70px] md:m-0 md:px-10 px-0 ">
        <h4 className="text-4xl sm:text-5xl font-semibold">
          A{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base  md:text-lg text-left ">
          {bgInfo}
        </p>
      </div>
    </motion.div>
  )
}

export default About
