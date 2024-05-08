import React from 'react'

const ContentTwo = () => {
  return (
    <div className='bg-navyblue text-white md:w-[400px] md:mr-24 mt-10 ml-6 w-96'>
      
      <div className='text-orange font-bold text-3xl tracking-wide md:ml-7 ml-10 mt-8'>New</div>

      <div className='mt-5 mb-5 ml-11 md:ml-8'>
            <div className='font-bold text-lg hover:text-orange '>Hydrogen VS Electric Cars</div>
            <div className='mt-3 text-sm w-64'>
                <div className='mt-2'>Will hydrogen-fulled cars ever catch up to EVs?</div>
            </div>
      </div>

      <hr className="border-t border-white md:m-6 m-9"/>

      <div className='mt-5 mb-5 ml-11 md:ml-8'>
            <div className='font-bold text-lg hover:text-orange'>The Downsides of AI Artistry</div>
            <div className='mt-3 text-sm w-64'>
                <div className='mt-2'>What are the possible adverse effects of on-demand AI image generation?</div>
            </div>
      </div>

      <hr className="border-t border-white md:m-6 m-9"/>

      <div className='mt-5 mb-9 ml-11 md:ml-8'>
            <div className='font-bold text-lg hover:text-orange'>Is VC Funding Drying Up?</div>
            <div className='mt-3 text-sm w-64'>
                <div className='mt-2'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
            </div>
      </div>
      
    </div>
  )
}

export default ContentTwo
