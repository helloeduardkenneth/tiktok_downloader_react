import Image from 'next/image'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { TextAnimate } from '@/components/magicui/text-animate'
import { SparklesText } from '@/components/magicui/sparkles-text'

import { Button } from '@/components/ui/button'

import { Infinity, Download, Music } from 'lucide-react'

import { cn } from '@/lib/utils'

const Home = () => {
    return (
        <div className='bg-ivory h-full'>
            {/* Hero */}
            <div className='flex flex-col space-y-4 p-40 relative'>
                <DotPattern
                    className={cn(
                        '[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]'
                    )}
                />
                <BoxReveal boxColor={'#000000'} duration={0.5}>
                    <h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl'>
                        TikTok <AuroraText>Downloader</AuroraText>
                        <span className='text-black'>.</span>
                    </h1>
                </BoxReveal>

                <BoxReveal boxColor={'#000000'} duration={0.5}>
                    <p className='font-medium'>
                        A simple web app that lets users download TikTok videos
                        with or without watermark by pasting the video URL.
                    </p>
                    <span className='text-black font-semibold text-[1rem]'>
                        🛠️ Build in Next.js.
                    </span>
                </BoxReveal>

                <BoxReveal boxColor={'#000000'} duration={0.5}>
                    <Link href='/tiktok-video-downloader'>
                        <Button>Try it now</Button>
                    </Link>
                </BoxReveal>
            </div>

            {/* Features */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 p-40'>
                <div className='flex flex-col justify-center space-y-4'>
                    <SparklesText className='text-5xl font-bold'>
                        Features
                    </SparklesText>
                    <TextAnimate
                        className='text-[1rem] font-medium'
                        animation='blurInUp'
                        by='character'
                        once
                    >
                        Discover the powerful features that make our TikTok
                        downloader stand out. Download videos without limits,
                        remove watermarks, and convert to your preferred format.
                    </TextAnimate>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <div className='space-y-3 p-6 rounded-lg md:col-span-2 relative overflow-hidden h-64'>
                        <Image
                            src='/images/tiktok_unlimited_img.jpg'
                            alt='TikTok Hero Background'
                            fill
                            className='object-cover z-0'
                            priority
                        />
                        <div className='absolute inset-0 bg-black/50 z-[1] h-full' />
                        <div className='bg-white text-black size-16 rounded-md flex items-center justify-center relative z-10'>
                            <Infinity />
                        </div>
                        <div className='flex flex-col items-start relative z-10'>
                            <h2 className='text-2xl font-semibold text-white'>
                                Unlimited
                            </h2>
                            <p className='font-medium text-white'>
                                Save TikTok videos as much as you need - without
                                any limits.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:col-span-2'>
                        <div className='space-y-3 p-6 rounded-lg relative overflow-hidden h-64'>
                            <Image
                                src='/images/tiktok_download_img.jpg'
                                alt='TikTok'
                                fill
                                className='object-cover z-0'
                                priority
                            />
                            <div className='absolute inset-0 bg-black/50 z-[1] h-full' />
                            <div className='bg-white text-black size-16 rounded-md flex items-center justify-center relative z-10'>
                                <Download />
                            </div>
                            <div className='flex flex-col items-start relative z-10'>
                                <h2 className='text-2xl font-semibold text-white'>
                                    No Watermark
                                </h2>
                                <p className='font-medium text-white'>
                                    Download TikTok videos without watermark or
                                    remove a TT logo.
                                </p>
                            </div>
                        </div>
                        <div className='space-y-3 p-6 rounded-lg relative overflow-hidden h-64'>
                            <Image
                                src='/images/tiktok_music_img.jpg'
                                alt='TikTok'
                                fill
                                className='object-cover z-0'
                                priority
                            />
                            <div className='absolute inset-0 bg-black/50 z-[1] h-full' />
                            <div className='bg-white text-black size-16 rounded-md flex items-center justify-center relative z-10'>
                                <Music />
                            </div>
                            <div className='flex flex-col items-start relative z-10'>
                                <h2 className='text-2xl font-semibold text-white'>
                                    MP4 and MP3
                                </h2>
                                <p className='font-medium text-white'>
                                    Save files in HD quality, convert TikTok to
                                    mp4 or mp3.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='bg-black text-white py-8'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                        <p className='text-sm font-semibold'>
                            We are not affiliated with TikTok, Douyin or
                            Bytedance.
                        </p>
                        <p className='text-sm'>
                            Created by eduard.dev{' '}
                            <span className='text-pink-500'>♥</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
