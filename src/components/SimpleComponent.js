import React from 'react'

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  hanldeClick = () => {
    const { mood } = this.state
    
    const currentMood = mood === 'happy' ? 'sad' : 'happy'
    
      this.setState({
      mood: currentMood
    })
  }

  render() {
    const { hanldeClick } = this
    const { mood } = this.state
    return(
      <div onClick={hanldeClick}>
        {mood}
      </div>
    )
  }
}

export default SimpleComponent