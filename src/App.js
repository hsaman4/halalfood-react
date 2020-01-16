import React from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Restaurant from './components/Restaurant'
import What from './components/What'
import axios from 'axios'
import AddRestaurant from './components/AddRestaurants';
import Reviews from './components/Reviews'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      name: '',
      description: '',
      img: '',
      link: '',
      // reviews: [],
      // Username: '',
      // comment: '',
      // rating: '',
    }
  
  }
  componentDidMount() {
    this.getRestaurants()

  }
  getRestaurants = async() => {
    const response = await axios('/restaurants')
    const data = response.data
    this.setState({
      restaurants: data
    })

  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = async (event) => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      img: this.state.img,
      link: this.state.link
    } = this.state
    event.preventDefault()

    await axios.post('/restaurants', data)
  }

  handleDeleteRestaurant = (deletedRestaurant) => {
   fetch(`/restaurants/${deletedRestaurant.id}`,{
     method: 'DELETE'
   })
   .then(json=>{
     this.setState(state => {
       const restaurants = state.restaurants.filter((restaurant)=> restaurant.id !== deletedRestaurant) 
       return {
         restaurants,
       }
     })
     window.location.reload(false)
   })
   .catch(error => console.log(error))
  }
  
  // handleChangeReviews = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }
  // handleSubmitReviews = async (event) => {
  //   const data = {
  //     Username: this.state.Username,
  //     comment: this.state.comment,
  //     rating: this.state.rating
  //   } = this.state
  //   // event.preventDefault()

  //   await axios.post(`/restaurants/${this.state.restaurants.id}/reviews`, data)
  //   console.log("id",this.state.restaurants.id)
  // }
  render() {
    console.log("food", this.state.restaurants)
    return (
      <>
        <Header />
        <Body />
        <Restaurant
          restaurants={this.state.restaurants}
          handleDelete={this.handleDeleteRestaurant}
          // handleUpdateRestaurant ={this.handleUpdateRestaurant}
          getRestaurants = {this.getRestaurants}
        />
        {/* <Reviews 
         handleSubmitReviews={this.handleSubmitReviews}
         handleChangeReviews={this.handleChangeReviews}
         Username={this.state.Username}
         comment={this.state.comment}
         rating={this.state.rating}
         /> */}
        <What />
        <AddRestaurant
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          description={this.state.description}
          img={this.state.img}
          link={this.state.link}
        />
      </>

    )
  }
}


export default App;
