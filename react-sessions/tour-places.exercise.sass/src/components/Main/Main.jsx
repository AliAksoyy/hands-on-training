import React from "react";
import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card"

export class Main extends React.Component {
    
    render() {
    
        return(
            <div className="card-container">
                {data.map((item)=> <Card {...item} key={item.id}/>
                    
                )}
            </div>
        )
    }
}

