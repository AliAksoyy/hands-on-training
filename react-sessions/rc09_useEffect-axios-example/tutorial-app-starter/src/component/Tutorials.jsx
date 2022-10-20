import { BsTrashFill } from "react-icons/bs";
import { GoFileSymlinkDirectory } from "react-icons/go";

function Tutorials() {

    const tutorials = [{
        id:1,
        title:"ali",
        descriptions:"aksoy"
    }, {
        id:2,
        title:"beyda",
        descriptions:"aksoy"
    }]
    console.log(tutorials);

    return(
        <div className="text-center  p-4 container">
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                {tutorials.map((item)=> {
                    const {id,title,descriptions} = item
                    return(
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{title}</td>
                            <td>{descriptions}</td>
                            <td >
                            <GoFileSymlinkDirectory
                            size={23}
                            type={"button"}
                            />
                            <BsTrashFill
                            size={23}
                            type={"button"}
                            />
                            </td>
                         </tr>
                    )
                })}  
                </tbody>
            </table>

        </div>
    )
}

export default Tutorials