import React from 'react'

class SimpleComponent extends React.Component{
  state={
    mood: 'happy'
  }
  handleClick = () => {
    let mood
    if(this.state.mood="happy"){
      mood= "sad"
    }
      else{
      mood ="happy"
    }
    this.setState({
      mood: mood
    })
  }

  render(){
    return(
      <div onClick={()=>this.handleClick()}>{this.state.mood}</div>
    )
  }

}
export default SimpleComponent
