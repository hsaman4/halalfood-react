import React from 'react'

class FancyUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            click: false,
            update: '',
        }
    }
    handleClick =(value) => {
        this.setState({
            click: true,
            update: value
        })
     }
     render() {
        let click = this.props.click ? 'block' : 'none'
        console.log(click)
        let values = ['name', 'description', 'img', 'link']
         return (
            
         )
     }
}
export default FancyUpdate
// let click = this.props.click ? 'block' : 'none'
// console.log(click)
// let values = ['name', 'description', 'img', 'link']