import React from "react"



export class LifeCycle extends React.Component {
        constructor(props) {
            console.log("contrucaf")
                super(props)
            this.state = {
                count: 0
            }
        }
        handleClick = () => {
            this.setState({
               count: this.state.count +1
            }) 
        }
        componentDidMount() {
            console.log("Mounted");
        }

        componentDidUpdate(prevProps,prevState) {
            console.log("updated")
            // console.log(prevState.count);
        }
        componentWillUnmount() {
            console.log("unmpounted")
        }
        render() {
            console.log("rendered");
            return(
                <div className="container text-center" >
                    <h1>LifeCycle Methods</h1>
                    <h2>count = <span>{this.state.count}</span></h2>
                    <button onClick={this.handleClick} className="btn btn-info">Inc</button>
                </div>
            )
        }

}