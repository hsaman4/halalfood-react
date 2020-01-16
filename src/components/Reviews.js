// import React from 'react'
// import axios from  'axios'

// // class Reviews extends React.Component {
// //     constructor(props) {
// //         super(props)
// //         this.state= {
// //             reviews: [],
// //             name: '',
// //             comment: '',
// //             rating: '',
// //         }
// //     }
// //     // handleChangeReviews = (event) => {
// //     //     this.setState({ [event.target.name]: event.target.value })
// //     //   }
// //     //   handleSubmitReviews = async (event) => {
// //     //     const data = {
// //     //       name: this.state.name,
// //     //       comment: this.state.comment,
// //     //       rating: this.state.rating
// //     //     } = this.state
// //     //     event.preventDefault()
    
// //     //     await axios.post(`/restaurnts/${restaurants.id}/reviews`, data)
// //     //   }
// //       render() {
// //           return (
// //             <div className="addrest">
// //             <form onSubmit={this.handleSubmitReviews}>
// //                 <h2>Add a Review</h2>
// //                 <input type= "text" name="name" placeholder="username" value= {this.props.Username} onChange={this.handleChangeReviews}/>
// //                 <input type= "text" name="comment" placeholder="comment" value= {this.props.comment} onChange={this.handleChangeReviews}/>
// //                 <input type="text" name="rating" placeholder="rating out of 5" value={this.props.rating} onChange={this.handleChangeReviews} />
// //                 <input type="submit" name="submit" placeholder="submit"/>
// //             </form>
  
// //         </div>
// //           )
// //       }
// // }
// class Reviews extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             reviews: []
//         }
//     }
//     render() {
//         return(
//             <div className="addrest">
//             <form onSubmit={this.props.handleSubmitReviews}>
//                 <h2>Add a Review</h2>
//                 <input type="text" name="name" placeholder="username" value={this.props.name} onChange={this.props.handleChangeReviews} />
//                 <input type="text" name="comment" placeholder="comment" value={this.props.comment} onChange={this.props.handleChangeReviews} />
//                 <input type="text" name="rating" placeholder="rating out of 5" value={this.props.rating} onChange={this.props.handleChangeReviews} />
//                 <input type="submit" name="submit" placeholder="submit" />
//             </form>
        
//         </div>
//         )
//     }
// }


// export default Reviews