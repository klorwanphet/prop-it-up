import React, { Component } from 'react';

    
class PersonCard extends Component {
    render() {
        return (<div>
            <h1>{ this.props.lname },{ this.props.fname }</h1>
            <p> Age:{ this.props.age }</p>
            <p>Hair color: { this.props.hcolor }</p></div>
)
    }
}
    
export default PersonCard;