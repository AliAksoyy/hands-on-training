import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"

import { useState, useEffect } from "react";
const Home = () => {

  const [tutorials, setTutorials] = useState([])

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async() => {

    const {data} = await axios(url)
   
    console.log(data)
    setTutorials(data)
  }
  useEffect(()=> {
    getTutorials()
  },[])
  

  return (
    <>
      <AddTutorial />
      <TutorialList tutprials={tutorials} />
    </>
  );
};

export default Home;
