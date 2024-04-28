import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import Subscription from '../../Components/SubscriptionBox/Subscription';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Card></Card>
         <Subscription></Subscription>
         <Contact></Contact>
        </div>
    );
};

export default Home;