import { getDatabase, ref, set, onValue} from "firebase/database";
import { useEffect, useState } from "react";
import app from "./firebase";




export function AddUser(info) {
  const db = getDatabase(app);
    set(ref(db, 'users/'), {
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
    const userArr=[]

    for(let id in data){
        userArr.push({id, ...data[id]})
       
    }
   setContactList(userArr)
   setIsLoading(false)
})
   
   },[])

   return {isLoading, contactList}
}



