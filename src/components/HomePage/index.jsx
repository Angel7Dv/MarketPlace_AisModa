import React from 'react'
import BestSeller from './BestSeller';
import Galery1 from './Galery1';
import Galery2 from './Galery2';
import Hero from './Hero';
import Scroll from './Scroll';

const HomePage = () => {
    return (
        <div>

            <Hero />
            <BestSeller/>
            <Scroll/>
            <Galery2/>
            <Galery1/>
        </div>
    )
}

export default HomePage