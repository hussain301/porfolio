import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'

type Props = { projects: Project[] }

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative text-left md:flex-row max-w-full mx-auto  justify-evenly z-0 h-screen items-center"
    >
      <h3  className="top-20 absolute tracking-[20px] text-gray-500 uppercase text-2xl">
        projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-500/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin ">
        {projects?.map((item) => {
          return (
            <div key={item.title} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center h-screen p-20  ">
              <Link href={item?.linkToBuild ?? '/'}>
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="mt-14 md:w-[450px] sm:h-[250px] "
                  src={urlFor(item?.image).url()}
                  alt=""
                />
              </Link>
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="font-semibold text-center text-3xl">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Study 1 of {projects?.length}
                  </span>{' '}
                  {item.title}
                </h4>
                <p className="text-center text-lg  md:text-left">
                  {item?.summary}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="w-full absolute top-[25%] bg-[#f7ab0a]/10 left-0 h-[440px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
