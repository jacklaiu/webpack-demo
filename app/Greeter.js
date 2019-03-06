//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import './main.css'

class Greeter extends Component{

    constructor(props) {
        super(props);
        this.state = {text: config.greetText, num: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // let num = this.state.num + 1;
        // this.setState({num: num});
        this.setState((preState, props) => ({
            num: preState.num + 1
        }));
    }
    render() {
        return (
            <div className="item" onClick={this.handleClick}>
                {this.state.text + ": " + this.state.num}
            </div>
        );
    }
}
export default Greeter