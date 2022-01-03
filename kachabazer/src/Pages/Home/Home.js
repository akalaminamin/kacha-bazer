import React from 'react'
import Categories from '../../components/Home/Categories/Categories';
import DiscountedProduct from '../../components/Home/DiscountedProduct/DiscountedProduct';
import Featured from '../../components/Home/Featured/Featured';
import HeroArea from '../../components/Home/HeroArea/HeroArea'
import Popular from '../../components/Home/Popular/Popular';

const Home = () => {
    return (
        <>
            <HeroArea />
            <Featured />
            <Popular />
            <Categories />
            <DiscountedProduct />
        </>
    )
}

export default Home;
