import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'
type Props = {
  socials:Social[]
}

const Header = ({socials}: Props) => {
 
  return (
    <header className="flex sticky   top-0 z-20 max-w-7xl p-5 mx-auto items-start md:items-center justify-between">
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center "
      >
        {socials.map((social) => {
          return (
            <SocialIcon
            key={social?._id}
              url={social?.url}
              fgColor="gray"
              bgColor="transparent"
              target="_blank"
            />
          )
        })}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, bounce: 50 }}
        className="flex flex-row cursor-pointer items-center  text-gray-300"
      >
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="gray"
          className="cursor-pointer"
        />

        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header
