import React from 'react'

class Count extends React.Component{
  constructor(){
    super()
    this.state = {Count:0}
    this.CountNumber = this.CountNumber.bind(this)
    }
    CountNumber(){
      this.setState((value)=>{
        return{Count: value.Count + 1}
      })
    }
    render() {
    const BtnStyle={
      backgroundColor:'green',
      border:'none',
      padding:'5px',
      width:'100px',
      borderRadius:'20px',
      color:'white',
    }
    return(
      <div className="Count">
          <h2>Number Increment</h2>
          <h3>{this.state.Count}</h3>
          <button style={BtnStyle} onClick={this.CountNumber}>Increment</button>
      </div>
    )
  }
  }

export default Count