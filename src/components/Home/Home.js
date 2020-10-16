import React from 'react'
import './home.css'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeMovies from './HomeMovies/HomeMovies'


const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <HomeMovies/>
        </div>
    )
}

export default Home;