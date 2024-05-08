import React from 'react';
import mainimage from "../Assets/webpage.jpg";
import ContentPagePartOne from './ContentPagePartOne';
import ContentPagePartTwo from './ContentPagePartTwo';
const ContentPageFirst = () => {
  return (
    <div className='md:ml-28 md:mr-10 ml-6 mt-10'>
        <img src={mainimage} alt="Main page for webpage"  className='md:h-80 h-96 md:w-[900px] w-[400px]'/>

      <div  className='flex md:flex-row flex-col md:justify-between md:mt-5'>
        <ContentPagePartOne />
        <ContentPagePartTwo />
      </div>
    </div>
  )
}

export default ContentPageFirst
