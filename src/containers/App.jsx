import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField} from '../actions';

const mapStateToProps = state =>({
    searchField: state.searchField
})

const mapDispatchToProps = dispatch =>{
    return {onSearch: (event)=>dispatch(setSearchField(event.target.value))}
}

class App extends Component{
    constructor(){
        super();
        this.state ={
            robots: []
            
        }
    }

    componentDidMount () {
        console.log("check");
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
        
    }

    render(){
        const {searchField,onSearch} =this.props;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());    
            });
        return !this.state.robots.length ? 
        <h1>Loading</h1>:
        (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox SearchChange={onSearch}/>
        <Scroll>
            <ErrorBoundary>
                <CardList  robots={filteredRobots}/>

            </ErrorBoundary>
            
        </Scroll>
        
        </div>
        )
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);