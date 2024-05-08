import React from 'react'
import retro from "../Assets/retro.jpg";
import laptop from "../Assets/laptop.jpg";
import gaming from "../Assets/gaming.jpg";
const Cards = () => {
  return (
    <div className='flex md:flex-row flex-col md:justify-evenly md:gap-[10px] gap-10 mt-20  ml-6 mb-24'>

        <div className='flex flex-row gap-8'>
            <img src={retro} alt="retro" className='w-24 h-{60}'/>
            <div className='flex flex-col'>
                <div className='font-semibold text-contenttwotext text-2xl tracking-widest'>01</div>
                <div className='font-bold mt-1 hover:text-textred'>Reviving Retro PCs</div>

                <div className='text-contenttwotext mt-1 text-sm w-[180px] md:w-[150px] leading-6'>
                    <div>What happens when old PCs are given modern upgrades? </div>
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-8'>
            <img src={laptop} alt="laptop" className='w-24 h-{60}'/>
            <div className='flex flex-col'>
                <div className='font-semibold text-contenttwotext text-2xl tracking-widest'>02</div>
                <div className='font-bold mt-1 hover:text-textred'>Top 10 Laptops of 2022</div>

                <div className='text-contenttwotext mt-1 text-sm w-[180px] md:w-[150px] leading-6'>
                    <div>Our best picks for various needs and budgets.</div>
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-8'>
            <img src={gaming} alt="gaming" className='w-24 h-{60}'/>
            <div className='flex flex-col'>
                <div className='font-semibold text-contenttwotext text-2xl tracking-widest'>03</div>
                <div className='font-bold mt-1 hover:text-textred'>The Growth of Gaming</div>

                <div className='text-contenttwotext mt-1 text-sm w-[180px] md:w-[200px] leading-6'>
                    <div>How the pandemic has sparked fresh opportunities</div>
                </div>
            </div>
        </div>
        

   
      
    </div>
  )
}

export default Cards
