import { getDatabase, ref, set, onValue,push, remove,  update} from "firebase/database";
import { useEffect, useState } from "react";
import app from "./firebase";




export function AddUser(info) {
  const db = getDatabase(app);
  const userRef=ref(db, 'users/')
  const newUserRef=push(userRef)

    set(newUserRef, {
    username: info.username,
    phoneNumber:info.phoneNumber,
    gender:info.gender 
  });
  console.log("alii weire");
}

export const useFetch = () => {
   
    const [isLoading, setIsLoading] = useState(true)
    const [contactList, setContactList] = useState()

   useEffect(()=> {

    const db = getDatabase(app);
    const user = ref(db, 'users/');
    onValue(user, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    
    const userArray=[]

        for(let id in data){
            console.log(id);
            userArray.push({id,...data[id]})
        }
        setContactList(userArray)
        setIsLoading(false)
    })
   
   },[])

   return {isLoading, contactList}
}

export const deleteUser =(id) => {
  const db = getDatabase(app);
  // const userRef=ref(db,"users/")
  remove(ref(db,"users/"+id))
  

}

export const updateUser =(info) => {
  
    const db = getDatabase(app);
  
   
    const updates = {};
    updates['/users/'+info.id] = info
    
  
    return update(ref(db), updates);
  
}





