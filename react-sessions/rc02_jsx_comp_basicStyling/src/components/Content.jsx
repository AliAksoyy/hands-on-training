import img2 from   "../img/spring2.jpg"

import "./Content.css"
function Content() {
    const imgStyle = {
        display :"block",
        width: "300px",
        margin : "1rem auto"
    }
    return (
        <div>

            <h2 style={{color:"red"}}>React JS</h2>
            <p style={{backgroundColor:"lightgreen"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, temporibus.</p>
            <img src="https://saltonline.org/directus/media/thumbnails/510-jpg-1200-1200-false.jpg" alt="" />
            <img style={imgStyle} src={img2} alt="" />
            <p className="par-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quas suscipit rerum hic. At odit tempore illum similique ipsum consectetur!
            </p>
        </div>
    )
    
}

export default Content