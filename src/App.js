import React,{Component} from 'react';
import NavBar from "./components/layout/NavBar"
import './App.css';
import Users from "./components/users/Users"
import axios from 'axios'
class App extends Component {
  componentDidMount() {
    axios.get('https://api.github.com/users')
    .then(res=> console.log(res.data))
  }
   
  render(){
    
  return (
   
    <nav className="App" >
    <NavBar />
    <div className='container'>
    <Users/>
    </div>
  </nav >
  );
}
}
export default App;
