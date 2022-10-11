import React from "react";
import "./Main.scss";
import { data } from "../../helper/data";

export class Main extends React.Component {
    
    render() {
        console.log(data)
        return(
            <div className="card-container">
                {data.map((item)=> {
                    return(
                        <div className="cards">
                            <h1>{item.title}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

