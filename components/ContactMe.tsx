import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { useForm,SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit : SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:hussainnariwal@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} `
  }
  return (
    <div className="h-screen relative mx-auto flex flex-col md:flex-row px-10 items-center text-center md:text-left justify-center max-w-7xl">
      {' '}
      <h3 className="top-20 absolute tracking-[20px] text-gray-500 uppercase text-2xl">
        contact me
      </h3>
      <div className="flex flex-col space-y-3 px-5 mt-20 ">
        <h4 className="text-3xl font-semibold capitalize text-center">
          connect with Me.{' '}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className="w-7 h-7 text-[#f7ab0a] animate-pulse" />
            <Link href="tel:+923121349049">
              <p className="text-2xl">+92 3121349049</p>
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="w-7 h-7 text-[#f7ab0a] animate-pulse" />
            <Link href="mailto:hussainnariwal@gmail.com">
              <p className="text-2xl">hussainnnariwal@gmail.com</p>
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="w-7 h-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">Sindh, Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          spellCheck
          className="flex  selection:bg-green-500 selection:text-white flex-col space-y-2  w-fit mx-auto"
        >
          <div className="space-x-2 flex">
            <input
              required
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              required
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            required
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            required
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="py-5 active:bg-[#f7ab0a]/50 px-10 bg-[#f7ab0a] rounded-md font-bold text-lg text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
