import React from 'react'
import { Link, NavLink, Switch, Route } from 'react-router-dom'
import Restaurant from './Restaurant'
import What from './What'
// import App from '../App'
import '../styles/Header.css'
import AddRestaurant from './AddRestaurants'
// import AddRestaurant from './AddRestaurants'
// import Modal from './Modal'
import Body from './Body'
import Home from './Home'

class Header extends React.Component{
    render() {
        return (
            <div className="header">
            <div className="site-name">
                <div className="header-img">
                </div>
                <h2>Foodies</h2>
            </div>
            <div className='links'>
                {/* <NavLink exact activeClassName="active" to ='/Resaurants'>
                    <li>Find Restaurants</li>
                    </NavLink> */}
                <a href="#restaurants">FIND RESTAURANTS</a>
                {/* <NavLink exact activeClassName="active" to='what'>
                    <li>What is Halal Food?</li>
                </NavLink> */}
                <a href="#what">WHAT IS HALAL FOOD?</a>
            </div>
        </div>
        )
    }
}

export default Header  



{/* <div className="routes">
                <Switch>
                    <Route path to='/' exact component={Home} />
                    {/* <Route path to='/findRestaurants' component={Restaurant}/>
                    <Route path to='/what' component={What} /> */}
{/* >                </Switch>
            </div> */} 