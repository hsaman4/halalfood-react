import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
// import Restaurant from './Restaurant'
// import What from './What'
// import App from '../App'
import '../styles/Header.css'
// import AddRestaurant from './AddRestaurants'
import Modal from './Modal'

// function Header() {
//     return (
//         <div className="header">
//             <div className="site-name">
//                 <div className="header-img">
//                 </div>
//                 <h2>Foodies</h2>
//             </div>
//             <div className='links'>
//                 <a href="#restaurants">FIND RESTAURANTS</a>
//                 <a href="#what">WHAT IS HALAL FOOD?</a>
//             </div>
//             <Link
//                 to={{
//                     pathname: "/modal",
//                     state: { modal: true },
//                 }}
//                 className="link"
//             >
//                 AddRestaurant
//                     </Link>
//             <div className="routes">
//                 <Switch>
//                     <Route path to='/modal' component={Modal} />
//                 </Switch>
//             </div>
//         </div>

//     )
// }

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
                <a href="#restaurants">FIND RESTAURANTS</a>
                <a href="#what">WHAT IS HALAL FOOD?</a>
                <Link to ="restaurants"></Link>
            </div>
            <Link
                to={{
                    pathname: "/modal",
                    state: { modal: true },
                }}
                className="link"
            >
                AddRestaurant
                    </Link>
            <div className="routes">
                <Switch>
                    <Route path to='/modal' component={Modal} />
                </Switch>
            </div>
        </div>
        )
    }
}

export default Header 