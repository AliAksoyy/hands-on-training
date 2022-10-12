import ali  from "../../image/spring2.jpg";

function Content () {
const imgStyle = {
    display:"flex",
    width:"300px",
    // boxShadow:"3px 3px 5px rgba(0,0,0, 0.4)"
}
    return (
        <div className="content">
            <h2 style={{color:"red", fontSize:"2rem"}}>reactjs</h2>
            <p style={{background:"red",color:"white"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis autem commodi praesentium quos incidunt fuga aliquam accusantium vero maiores sequi.</p>
            <img src="https://picsum.photos/id/684/600/400" alt="" />
            <img style={imgStyle} src={ali} alt="" />
        </div>


    )
}

export default Content
