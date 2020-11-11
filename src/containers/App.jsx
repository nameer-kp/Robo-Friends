import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';



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
        return !this.state.robots.length ? 
        <h1>Loading</h1>:
        (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearch}/>
        <Scroll>
            <ErrorBoundary>
                <CardList  robots={filteredRobots}/>

            </ErrorBoundary>
            
        </Scroll>
        
        </div>
        )
        
    }
}
export default App;