
import './App.css';
import React from 'react'
import Season from './seaasonDisplay.js'
import Loader from './Loader.js'
class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      Latitude:null,
      Error:''

    }

  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {this.setState({Latitude:position.coords.latitude})},
      err =>{this.setState({Error:'User Denied Permission'})}
    )
  }
  rendercontent(){
    if(this.state.Error && !this.state.Latitude){
      return <div>{this.state.Error}</div>
    }
    if(this.state.Latitude && !this.state.Error){
      return <Season Latitude={this.state.Latitude} />
    }
    else{
      return <div><Loader message="Please Accept Loacation Request!" /></div>
    }
  }
  render(){
    return(
      <div>{this.rendercontent()}</div>
    )


}
}

export default App;
