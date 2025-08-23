import Image from 'next/image'
import React from 'react'
import { CiFlag1, CiGlobe } from 'react-icons/ci'
import { GoStack } from 'react-icons/go'

export default function AboutPage() {
  return (
    <div className='px-4 my-10'>
        <h1 className="mb-6 text-4xl font-bold text-center">
            About PrintForge
        </h1>
        <div className='flex flex-col md:flex-row items-start justify-between gap-6'>
            <div>
                <Image src="/about.png"
                alt='About printforge image'
                width={300}
                height={300}
                />
            </div>
            <div className='max-w-lg space-y-4'>
                <p className='text-base font-medium'>About PrintForge</p>
                <h2 className='text-3xl font-bold'>Empowering Makers Worldwide</h2>
                <p className='text-lg font-medium'>Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                <p className='text-lg font-medium'>Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around gap-6 mt-10'>
            <div className='border p-3'>
                <div className='flex items-center gap-1'>
                    <span><GoStack size={20} /></span>
                    <h3 className='text-base font-medium'>100K+ Models</h3>
                </div>
                <p>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </div>
            <div className='border p-3'>
                <div className='flex items-center gap-1'>
                    <span><CiGlobe size={20} /></span>
                    <h3 className='text-base font-medium'>Active Community</h3>
                </div>
                <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </div>
            <div className='border p-3'>
                <div className='flex items-center gap-1'>
                    <span><CiFlag1 size={20} /></span>
                    <h3 className='text-base font-medium'>Free to Use</h3>
                </div>
                <p>Most models are free to download, with optional premium features for power users.</p>
            </div>
        </div>
        <div className="mt-10">
                <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
                <p className="mb-4 text-gray-700">
                    At PrintForge, we believe that 3D printing is
                    revolutionizing the way we create, prototype, and
                    manufacture. Our platform serves as a bridge between
                    designers and makers, enabling the sharing of knowledge
                    and creativity that pushes the boundaries of what's
                    possible with 3D printing.
                </p>
                <p className="text-gray-700">
                    Whether you're a hobbyist looking for your next weekend
                    project, an educator seeking teaching materials, or a
                    professional designer wanting to share your creations,
                    PrintForge provides the tools and community to support
                    your journey in 3D printing.
                </p>
        </div>
    </div>
  )
}
