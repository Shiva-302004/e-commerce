import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offer from "../components/offers/Offer";
import NewCollections from "../components/newcollections.js/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Popularmen from "../components/popularinmens/Popularmen";
import PopularKid from "../components/popularinkids/PopularKids";


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular></Popular>
            <Popularmen></Popularmen>
            <PopularKid/>
            <Offer></Offer>
            <NewCollections></NewCollections>
            <NewsLetter/>
        </div>
    )
}
export default Shop;