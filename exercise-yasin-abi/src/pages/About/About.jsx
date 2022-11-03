import { AboutDiv, AboutTextDiv } from "./About.style"
import ali from "../../assets/mail.svg"

const About = () => {
    return(
       <AboutDiv>
        <img style={{width:"100px"  }} src={ali} alt="aa" />
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <AboutTextDiv>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat earum commodi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, itaque?</p>
        </AboutTextDiv>
       </AboutDiv>
    )
}
export default About