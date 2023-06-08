import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft: Boolean
  progress: number
  image: string
}

const SkillCard = ({ directionLeft, image, progress }: Props) => {
  return (
    <div className="group relative flex cursor-pointer  ">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={image}
        className="border rounded-full w-16 h-16 object-cover border-gray-500 xl:w-[85px] xl:h-[85px] md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 h-16 w-16 transition duration-300 ease-in-out group-hover:bg-white rounded-full md:w-20 md:h-20 xl:w-[85px] xl:h-[85px]">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl opacity-100 font-bold text-black">
            {progress} 

          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
