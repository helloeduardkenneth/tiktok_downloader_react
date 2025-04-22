'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

import axios from 'axios'
import { Input } from '@/components/ui/input'

const TikTokDownload = () => {
    const [url, setUrl] = useState<string>('')
    const [downloadLink, setDownloadLink] = useState<string>('')

    const handleDownload = async () => {
        const res = await axios.post('/api/download', { url })
        setDownloadLink(res.data.downloadUrl)
    }

    return (
        <main className='p-10'>
            <h1 className='text-2xl font-bold'>TikTok Downloader</h1>
            <Input
                className='border p-2 my-4 w-full'
                placeholder='Paste TikTok URL here'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <Button
                onClick={handleDownload}
                className='bg-blue-600 text-white px-4 py-2 rounded'
            >
                Download
            </Button>

            {downloadLink && (
                <div className='mt-4'>
                    <a
                        href={downloadLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Click to download
                    </a>
                </div>
            )}
        </main>
    )
}

export default TikTokDownload
