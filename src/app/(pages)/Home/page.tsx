'use client'

import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 gap-2 p-5 mb-20'>
        <div>
            <div className='m-2 p-5 bg-white md:w-[400px] rounded-lg'>
            <p className='font-semibold'>Saving Water:</p>
            <p>
                Our website is dedicated to helping California homeowners conserve water, save money, and protect resources for future generations. We provide seamless integration with smart home appliances to monitor your water usage in real-time. If excess usage or potential leaks are detected, you&apos;ll receive instant alerts on your phone—allowing you to act quickly and prevent waste. Our mission is to empower Californians with the tools and insights needed to make smarter water decisions at home. Join us in building a more sustainable California, one drop at a time.
            </p>
            </div>
            <Button className="md:w-[400px] m-2 bg-[#FF9F1C] hover:bg-[#FFBF69]">Learn More</Button>
        </div>
        <div>
            <div className='m-2 p-5 bg-white md:w-[400px] rounded-lg'>
            <p className='font-semibold'>Saving Water:</p>
            <p>
            Saving water is essential for protecting California&apos;s limited natural resources, especially during frequent drought conditions. Simple actions like fixing leaks, using water-efficient appliances, and watering plants during cooler hours can significantly reduce household consumption. Conserving water also lowers utility bills and reduces strain on local water systems. Every drop saved contributes to preserving ecosystems and securing water for future generations. By making small daily changes, individuals can play a meaningful role in supporting statewide conservation efforts.
            </p>
            </div>
            <p className="text-center font-semibold m-2">Small System Water Conservation Assistance Program</p>
            <Link href={"https://calmutuals.org/small-system-water-conservation-assistance-program/?utm_source=chatgpt.com"}>
                <Button className="md:w-[400px] m-2 px-5 bg-[#FF9F1C] hover:bg-[#FFBF69] cursor-pointer">Visit Website</Button>
            </Link>
        </div>
        <div>
            <div className='m-2 p-5 bg-white md:w-[400px] rounded-lg'>
            <p className='font-semibold'>Checking Eligibility for Conservation Programs:</p>
            <p>
            It&apos;s important to check your eligibility for water conservation programs in California, as many residents qualify for rebates, free upgrades, or financial assistance. These programs can make water-saving improvements like high-efficiency appliances or smart irrigation systems much more affordable. Eligibility is often based on your location, income, or current water provider. By taking advantage of these offerings, you can save money while contributing to the state&apos;s long-term sustainability goals. Don&apos;t miss out on support that could help you conserve more and spend less.
            </p>
            </div>
            <p className="text-center font-semibold m-2">Water Conservation Assistance Program</p>

            <Link href={"https://www.watersaverprogram.com/"}>
                <Button className="md:w-[400px] m-2 bg-[#FF9F1C] hover:bg-[#FFBF69] cursor-pointer">Visit Website</Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home