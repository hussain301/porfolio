import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {

  const [text, count] = useTypewriter({
    words: [
      `HI, the name is ${pageInfo?.name}`,
      'Boy who loves <Chai/>',
      'but Loves to <CodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex h-screen flex-col space-y-8 text-center overflow-hidden justify-center items-center">
      <BackgroundCircle />
      <img
      width={128}
      height={128}
        className="relative object-cover mx-auto w-32 rounded-full h-32"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Hussain image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 text-gray-500 tracking-[15px]">
          software engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7Ab0A" />
        </h1>
        <div className="pt-3">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#s'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
