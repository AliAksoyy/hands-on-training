import AddTutorials from "../component/AddTutorials"
import Tutorials from "../component/Tutorials"
import axios from "axios"
import { useEffect, useState } from "react"


const Home = () => {

    const [data, setData] = useState([])

    const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials"

    const getTutorials = async() => {
        try {
            const {data} = await axios(url)
            setData(data)
        } catch (error) {
           console.log(error); 
        }
    }

    useEffect(()=> {
        getTutorials()
    },[])
    console.log(data)


    return(
        <div>
            <AddTutorials getTutorials={getTutorials} />
            <Tutorials  data={data} getTutorials={getTutorials} />
        </div>

    )
}

export default Home