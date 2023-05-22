import React from 'react'
import Hero from '../Hero/Hero'
import Recommendations from '../Recommendations/Recommendations'

const Home = ({add,remove}) => {
    return (
    <>
        <Hero/>
        <Recommendations add={add} remove={remove}/>
    </>
    )
}

export default Home