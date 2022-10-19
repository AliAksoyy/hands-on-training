import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"

// import { useState, useEffect } from "react";
const Home = () => {

  const url ="https://tutorials-api-cw.herokuapp.com/api/tutorials"


  const getTutorials = async() => {

    const data = axios(url)
    console.log(data);

  }
  getTutorials()
  
  return (
    <>
      <AddTutorial />
      <TutorialList  />
    </>
  );
};

export default Home;
