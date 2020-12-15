import React, { useEffect,useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';



function App (){
    // constructor(){
    //     super();
    //     this.state ={
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    const [robots,setRobots]=useState([]);
    const [field,setField] =useState('');
    const onSearch =(event) => {

        console.log(event.target.value);
        // this.setState({searchField:event.target.value})
        setField(event.target.value);
       

    } //we create function which should be called when we search

    useEffect ( ()=> {
        console.log("check");
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            // this.setState({robots:users});
            setRobots(users)
        });
    
    },[])
        const filteredRobots = robots.filter(robot => {
                    return robot.name.toLowerCase().includes(field.toLowerCase());    
                    });

        return !robots.length ? 
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

export default App;