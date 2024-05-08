import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import ContentPageFirst from '../Components/ContentPageFirst';
import ContentTwo from './../Components/ContentTwo';
import Cards from './../Components/Cards';
const MainPage = () => {
  return (
    <div >
      <NavigationBar/>  
      
      <div className='flex md:flex-row flex-col mt-10'>
        <ContentPageFirst/>
        <ContentTwo/>
      </div>

      <Cards/>

      <div className='text-center'>Copyrights. Deepika Subbaiah.<br/> Developed with ❤️ by Deepika</div>
      
    </div>
  )
}

export default MainPage
