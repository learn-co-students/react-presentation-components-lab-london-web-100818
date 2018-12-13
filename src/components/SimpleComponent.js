import React, {Component} from 'react';

class SimpleComponent extends Component{

    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        const {mood} = this.state
        const newMood = mood === 'happy' ? 'sad' : 'happy'
        this.setState({
            mood: newMood
        })
    }

    render() {
        const {mood} = this.state
        return <div onClick={this.handleClick}>{mood}</div>
    }


}


export default SimpleComponent;
