import React from 'react'
import '../styles/Restaurant.css'
import axios from 'axios'

class Restaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            updateModal: false,
            showReviews: false
        }
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleUpdateRestaurant = (e, id) => {
        const data = {
            name: this.state.name,
            description: this.state.description,
            img: this.state.img,
            link: this.state.link
        }
        console.log(data)
        axios.put(`/restaurants/${id}`, data)
            .then(updatedRestaurant => {
            })
            .catch(error => console.log(error))
        window.location.reload(false)
    }

    handleUpdateModal = () => {
        this.setState({ updateModal: true })
        console.log('does this work')
    }

    handleShowReviews = () => {
        this.setState({ showReviews: true })

    }

    render() {
        return (
            <div className="restaurant">
                <h1>WHERE TO EAT</h1>
                <div className="rest-map" id="resturant">
                    {this.props.restaurants.map(restaurant => {
                        return (
                            <div className="rest">
                                <div className="delete">
                                    <button className="delete-button" onClick={() => this.props.handleDelete(restaurant)}>X</button>
                                </div>
                                <div className="rest-name">
                                    <h3>{restaurant.name}</h3>
                                </div>
                                <img src={restaurant.img} />
                                <div className="rest-description">
                                    <p>{restaurant.description}</p>
                                    <a href={restaurant.link}>Visit the Website</a>
                                </div>
                                <div className="reviews">
                                    <button className="modal-button" onClick={() => this.handleShowReviews()}>REVIEWS</button>
                                    {this.state.showReviews ?
                                        <div className="map">
                                            {restaurant.reviews.map(review => {
                                                return (
                                                    <div className="reviews">
                                                        <p>{review.name}</p>
                                                        <p>{review.comment}</p>
                                                    </div>
                                                )
                                            })}
                                            <button className="close-button" onClick={this.state.showReviews}>Close</button>
                                        </div>
                                        : null}
                                </div>

                                <div className="ud-div">
                                    <div className="update-form">
                                        <button className="modal-button" onClick={() => this.handleUpdateModal()}>MAKE CHANGES </button>
                                        {this.state.updateModal ?
                                            <form onSubmit={(e) => this.handleUpdateRestaurant(e, restaurant.id)} >
                                                <input type="text" name="name" placeholder="restaurant name" value={this.state.name || restaurant.name} onChange={this.handleChange} />
                                                <input type="text" name="description" placeholder="description" value={this.state.description || restaurant.description} onChange={this.handleChange} />
                                                <input type="text" name="img" placeholder="img" value={this.state.img || restaurant.img} onChange={this.handleChange} />
                                                <input type="text" name="link" placeholder="link" value={this.setState.link || restaurant.link} onChange={this.handleChange} />
                                                <button className="update-button">Update Restaurant</button>
                                                <button className="close-button" onClick={this.state.updateModal}>Close</button>
                                            </form>
                                            : null}
                                    </div>
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