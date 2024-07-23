'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const navigate=useRouter()
  return (
    <div className="flex justify-center items-center px-16 py-4 w-full text-center bg-white shadow-sm backdrop-blur-[2.5px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center w-full max-w-[1440px] max-md:flex-wrap max-md:max-w-full">
              <img
              onClick={()=>navigate.push('/')}
                src="/images/header-logo-black.png"
                className="shrink-0 self-stretch max-w-full cursor-pointer aspect-[1.39] w-[124px]"
              />
              <div className="flex gap-5 justify-between self-stretch px-3.5 py-1.5 my-auto text-base leading-6 text-neutral-700 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2 cursor-pointer justify-center">
                  <div>Workspace & Services</div>
                  <img
                    src="/images/down-arrow.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <Link href='#'>Get started</Link>
                <div className="flex cursor-pointer gap-2 justify-center px-px whitespace-nowrap">
                  <div>More</div>
                  <img
                    src="/images/down-arrow.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                </div>
                <Link href='#'>Help</Link>
              </div>
              <div className="flex gap-5 justify-between self-stretch my-auto text-sm font-semibold tracking-wider leading-4 text-white uppercase">
                <img
                    src="/images/black-phone.png"
                    className="my-auto aspect-[1.64] w-[20px] cursor-pointer h-[20px]"
                />
                  <img
                    src="/images/black-user.png"
                    className="my-auto aspect-[1.64] w-[20px] cursor-pointer h-[20px]"
                />
                <div className="px-7 py-5 bg-blue-600 rounded-3xl max-md:px-5">
                  ENQUIRE NOW
                </div>
              </div>
            </div>
          </div>
  )
}

export default Header
