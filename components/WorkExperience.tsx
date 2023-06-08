import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience[]
}

const WorkExperience = ({ experience }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen overflow-hidden flex flex-col relative text-center md:text-left md:flex-row max-w-7xl mx-auto justify-center px-8 items-center "
    >
      <h3 className="top-[92px] absolute tracking-[20px] text-gray-500 uppercase text-2xl">
        Experience
      </h3>
      <div className="w-full mt-20  space-x-5 overflow-x-scroll snap-x snap-mandatory p-10 flex scrollbar scrollbar-track-gray-500/20 justify-center scrollbar-thumb-[#f7ab0a]/80">
        {experience?.map((item) => (
          <ExperienceCard
            companyImage={urlFor(item?.companyImage).url()}
            jobTitle={item?.jobTitle}
            company={item?.company}
            techStack={item?.technologies}
            dateStarted={item?.dateStarted}
            dateEnded={item?.dateEnded}
            points={item?.points}
            key={item?._id}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience
