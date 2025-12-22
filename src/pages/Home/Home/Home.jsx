import React from 'react';
import Banner from '../Banner/Banner';
import WorkSection from '../WorkSection/WorkSection';
import Brands from '../Brands/Brands';
import HomeWinnerSection from '../HomeWinnerSection/HomeWinnerSection';

// const brandsPromise = fetch('/public/brands.json').then(res => res.json())

const Home = () => {
    return (
        <div className='max-w-7xl'>
          
            <Banner></Banner>
         
            <WorkSection></WorkSection>
            <HomeWinnerSection></HomeWinnerSection>
            
            {/* <Brands brandsPromise={brandsPromise}></Brands> */}
        </div>
    );
};

export default Home;