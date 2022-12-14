
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";
import { GoFileSymlinkDirectory } from "react-icons/go";
import EditTutorials from "./EditTutorial";

function Tutorials({data,setData, getTutorials}) {
   

   const handleDelete = async(id) => {

    const url = `https://tutorials-api-cw.herokuapp.com/api/tutorials/${id}`
    console.log(url);
    try {
        await axios.delete(url)
    } catch (error) {
       console.log(error) 
    }
    getTutorials()
   }

   const handleOpenModal =async(id) => {
        console.log(id)
        const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials"
        try {
            await axios.put(`${url}/${id}`)
        } catch (error) {
            
        }

   }
   


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
                {data.map((item)=> {
                    const {id,title,description} = item
                    return(
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td >
                            <GoFileSymlinkDirectory
                            size={23}
                            type={"button"}
                            data-bs-toggle={"modal"}
                            data-bs-target={"#modal"}
                            onClick={()=>handleOpenModal(id)}
                            
                            />
                            <BsTrashFill
                            size={23}
                            type={"button"}
                            onClick={()=> handleDelete(id)}
                            />
                            </td>
                         </tr>
                    )
                })}  
                </tbody>
            </table>
            <EditTutorials data={data} setData={setData} handleOpenModal={handleOpenModal} />

        </div>
    )
}

export default Tutorials