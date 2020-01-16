import React from 'react'


class AddRestaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            restaurants: [],
            model: false
        }
    }
        
    render() {
        return (
        <div className="addrest">
            <form onSubmit={this.props.handleSubmit}>
                <h2>Add a Restaurant</h2>
                <input type= "text" name="name" placeholder="restaurant name" value= {this.props.name} onChange={this.props.handleChange}/>
                <input type= "text" name="description" placeholder="description" value= {this.props.description} onChange={this.props.handleChange}/>
                <input type= "text" name="img" placeholder="img" value= {this.props.img} onChange={this.props.handleChange}/>
                <input type= "text" name="link" placeholder="link" value= {this.props.link} onChange={this.props.handleChange}/>
                <input type="submit" name="submit" placeholder="submit"/>
                
            </form>
  
        </div>
        )
    }
}
export default AddRestaurant