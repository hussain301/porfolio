import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import SkillCard from './SkillCard'
import { urlFor } from '../sanity'

type Props = {
  skills: Skill[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] min-h-screen  mx-auto pb-10 justify-center xl:px-10  items-center"
    >
      <h3 className="top-20 absolute tracking-[20px] text-gray-500 uppercase text-2xl">
        skills
      </h3>
      <h3 className="top-36 absolute tracking-[3px]  text-gray-500 uppercase ">
        Hover over a skill for currency proficiency{' '}
      </h3>
      <div className="grid grid-cols-4 md:grid-cols- gap-4 mt-36 md:mt-40 xl:mt-48  ">
        {skills?.map((item, i) => (
          <SkillCard
            key={item?._id}
            progress={item?.progress}
            image={urlFor(item?.image).url()}
            directionLeft={i > 5}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
