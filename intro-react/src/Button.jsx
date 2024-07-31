import {Component } from 'react'


// Class Component to know how worked React < 16.3
class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
    render(){
        return(
            <button onClick={this.increment}>
                {this.state.count}
            </button>
        )
    } 
}
export default Button