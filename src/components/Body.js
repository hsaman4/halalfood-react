import React from 'react'
import '../styles/Body.css'
import halalcart from '../images/halalcart.png'

class Body extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="body-text">
                    <h2>More than just the Halal Food Cart</h2>
                </div>
                <img src={halalcart} width="100%" height="auto"></img>
            </div>
        )
    }
}

export default Body