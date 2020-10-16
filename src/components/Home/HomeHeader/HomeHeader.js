import React, { useState, useEffect } from 'react'
import './homeHeader.css'
import { connect } from 'react-redux'
import { getMovies } from '../../../redux/actions/actions'

const HomeHeader = ({ getMovies }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        getMovies(searchTerm)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        getMovies(searchTerm)
    })
    return (
        <div className="homeHeader">
            <img className="reactMovie"
                src={require("../../../images/reactMovie_logo.png")}
                alt="react.movie">
            </img>
            <form onSubmit={handleSubmit} className="homeSearch">
                <input
                    placeholder="Search..."
                    className="inputSearch"
                    onChange={handleChange} />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}



export default connect(null, { getMovies })(HomeHeader)