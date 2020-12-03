/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from 'react';

class RoulletGun extends React.Component{
    static defaultProps ={
        bulletInChamber : 8
    }
        state ={
            chamber : null,
            spinningTheChamber : false
        }
    
    pullTheTrigger=() =>{
        this.setState({
            spinningTheChamber : true
        })
        setTimeout(() => {
            const randomChamber = Math.ceil(Math.random()*8);
            this.setState({
                chamber : randomChamber,
                spinningTheChamber :false
            })
        }, 1000)
    }


    displayResults =() =>{
        const {bulletInChamber} = this.props;
        const {chamber} = this.state ;
        if(this.state.spinningTheChamber === true){
            return 'spinning the chamber and pulling the trigger!...';
        }
        else if(chamber === bulletInChamber){
            return 'BANG!!!';
        }
        else{
            return 'you\'re safe!';
        }
    }

    render(){
        return (
            <div>
                <p>{this.displayResults()}</p>
                <button onClick={()=>this.pullTheTrigger()}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RoulletGun ;