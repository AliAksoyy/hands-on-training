import React, {Component} from "react";



class Counter extends Component {
    constructor({count}) {
        // console.log(props)
        super()
        this.state = {
            count:count || 0
        }
        this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement=()=> {
        this.setState({
            count:this.state.count-1
        })
    }




    render() {
        return(
            <div className="container mt-4 text-center">
            <h1>Classful Component</h1>
            <h2 className="display-4 text-danger">Count:{this.state.count}</h2>
            <button onClick={this.increment} className="btn btn-success">INC</button>
           
            <button onClick={this.decrement} className="btn btn-danger">DEC</button>
        </div>
        )
    }
}

export default Counter

