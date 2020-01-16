import React from 'react'
import '../styles/Restaurant.css'
import Reviews from './Reviews'
import axios from 'axios'


class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            // click: false,
            // update: '',
        }
    }
    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleUpdateRestaurant = (e, id) =>{
       const data = {
        name: this.state.name,
        description: this.state.description,
        img: this.state.img,
        link: this.state.link
      } 
       console.log(data)
       axios.put(`/restaurants/${id}`, data)
       .then(updatedRestaurant=>{
       })
       .catch(error => console.log(error))
    window.location.reload(false)
     }

    //  handleClick =(value) => {
    //     this.setState({
    //         click: true,
    //         update: value
    //     })
    //  }


    render() {
        console.log('state', this.state)
        return (
            <div className="restaurant">
                <h1>WHERE TO EAT</h1>
                <div className="rest-map" id="resturant">
                    {this.props.restaurants.map(restaurant => {
                        return (
                            <div className="rest">
                                <div className="rest-name">
                                <h3>{restaurant.name}</h3>
                                </div>
                                <img src={restaurant.img} />
                                <div className="rest-description">
                                <p>{restaurant.description}</p>
                                <a href={restaurant.link}>Visit the Website</a>
                                </div>
                                
                                <h2>REVIEWS:</h2>
                                {restaurant.reviews.map(review => {
                                    return (
                                        <div className="reviews">
                                            <p>{review.name}</p>
                                            <p>{review.comment}</p>
                                        </div>
                                    )
                                }
                                )}
                                <div className="delete">
                                    <button onClick={() => this.props.handleDelete(restaurant)}>DELETE</button>
                                </div>
                                <div className="update-form">
                                    <form onSubmit={(e)=>this.handleUpdateRestaurant(e, restaurant.id)} id="toggle">
                                        <h2>Update</h2>
                                        <input type="text" name="name" placeholder="restaurant name" value={this.state.name || restaurant.name } onChange={this.handleChange} />
                                        <input type="text" name="description" placeholder="description" value={this.state.description || restaurant.description} onChange={this.handleChange} />
                                        <input type="text" name="img" placeholder="img" value={this.state.img || restaurant.img} onChange={this.handleChange} />
                                        <input type="text" name="link" placeholder="link" value={this.setState.link || restaurant.link} onChange={this.handleChange} />
                                        <button>Update Restaurant</button>
                                    </form>
                                </div>
                            </div>
                        )   
                    })}
                </div>

            </div>
        )
    }
}
export default Restaurant