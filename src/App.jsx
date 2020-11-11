import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';



class App extends Component{
    constructor(){
        super();
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    onSearch =(event) => {

        console.log(event.target.value);
        this.setState({searchField:event.target.value})
       

    } //we create function which should be called when we search

    componentDidMount () {
        console.log("check");
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());    
            });
        return(
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearch}/>
        <CardList robots={filteredRobots}/>
        </div>
        )
        
    }
}
export default App;