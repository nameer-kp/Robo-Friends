import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField,robotRequest} from '../actions';

const mapStateToProps = state =>({
    searchField: state.searchRobot.searchField,
    robots:state.robotRequest.robots,
    isPending:state.robotRequest.isPending,
    error:state.robotRequest.error
})

const mapDispatchToProps = dispatch =>{
    return {
        onSearch: (event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobot:()=>dispatch(robotRequest())
            }
}

class App extends Component{
    constructor(){
        super();
       
    }

    componentDidMount () {
        console.log("check");
       this.props.onRequestRobot();
        
    }

    render(){
        const {searchField,onSearch,isPending,robots} =this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());    
            });
        return isPending ? 
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