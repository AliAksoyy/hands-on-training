import Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Language from "./Language";
import {data} from "../helpers/data"



function Card() {
    console.log(data);
    return(
        <Container className="rounded-4 mt-4 p-4" style={{background:"#f48b29"}}>
        <h1 className="text-white my-4 ">Languages</h1>
        <Row className="g-3 justify-content-center">
            
            {data.map((item,index)=> {
            return(
            <Col sm={6} md={4} lg={3} key={index}>
                <Language  {...item} />

            </Col>

            )
        })}
        
        </Row>
        
        </Container>
    )
}

export default Card