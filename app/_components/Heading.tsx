"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Heading = () => {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
        Your Ideas, Documents & Plans. Unified. Welcome to 
        <span className="underline ml-2">RealNotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button asChild>
          <Link href="/documents">
            Enter RealNotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      
    </div>
  )
}

export default Heading
