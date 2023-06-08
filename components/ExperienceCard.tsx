import { motion } from 'framer-motion'
import React from 'react'
import { Technologies } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  companyImage: string;
  jobTitle: string;
  company:string;
  techStack: Technologies[]
  dateStarted:string
  dateEnded: string
  points: string[]
}

const ExperienceCard = ({jobTitle,company,companyImage,dateEnded,points, dateStarted,techStack}: Props) => {

  return (
    <article className='flex flex-col sm:mt-10 rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] justify-center  snap-center bg-[#292929] opacity-40  hover:opacity-100 transition-opacity duration-200 py-5 snap-x cursor-pointer '>
      <motion.img
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-20 h-20 rounded-full xl:w-28 xl:h-28 object-cover object-center"
        src={companyImage}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="text-xl font-bold mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {techStack.map((item) => {
            return (
              <img
              key={item._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(item.image).url()}
              />
            )
          })}
        </div>
        <p className='uppercase text-gray-500 mt-3'>{dateStarted} - { `${dateEnded ? dateEnded: 'Present'}`}</p>
        <ul className="list-disc ml-5  text-lg">
         {points.map((item,i)=><li key={i}>{item}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
