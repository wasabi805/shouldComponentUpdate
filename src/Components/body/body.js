import React, {Component} from 'react';
import MilesPerHour from './children/milesPerHour';
import TurboBoost from './children/turboBoost';
import CoolantTemp from './children/coolantTemp'

class Body extends Component{
    constructor(props){
        super(props);

        this.state={
            mph: 1,
        }
    }

    componentDidMount() {
        setInterval(
            ()=>{this.setState(
                ()=>{return {
                        mph: Math.round(Math.random()*100)
                        // mph : 1
                    }
                }
            )
        }, 2000)
    }

    // nextState : value when setState is called
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //compare  nextState vs. current state (this.state)
        // console.log(nextState, 'nextState')
        // console.log(this.state , 'this.state')
        return this.state.val === nextState.val ? true: false

     }

    render(){

        console.log('Parent renders')
        return(
            <section id={'body'}>
                <div className={'container'}>
                    <MilesPerHour mph={this.state.mph} />
                    <TurboBoost/>
                    <CoolantTemp/>
                </div>

            </section>
        )
    }
}

export default Body