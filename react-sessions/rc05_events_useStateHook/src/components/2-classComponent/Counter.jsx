import {Component} from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state= {
            count:0,

        }
        this.increment = this.increment.bind(this)
    }
    increment() {
        this.setState({
            count:this.state.count +1
        })
    }
    decrement=()=> {
        this.setState({
            count:this.state.count -1
        })
    }

    render() {
        return (
            <div className="container text-center mt-4">

            <h1>CLASSFUL COMPONENTS</h1>
            <h2 className="display-4 text-danger">COUNT:{this.state.count}</h2>
            <button onClick={this.increment} className="btn btn-success">INC</button>
            <button  className="btn btn-dark">CLR</button>
            <button onClick={this.decrement} className="btn btn-danger">DEC</button>
    </div>
        );
    }
}

export default Counter