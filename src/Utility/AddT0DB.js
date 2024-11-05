import { toast } from "react-toastify"


const getStoreReadList=()=>{
// readList
const storedListStr=localStorage.getItem('read-list')
if(storedListStr){
const storedList=JSON.parse(storedListStr)
return storedList
}
else{
return []
}
}


const addToStoredReadList=(id)=>{
    const storedList=getStoreReadList()
    if(storedList.includes(id)){
        // already exist do not add it
        console.log(id,'already exists in the read list');
    }
    else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
        // ideally trigger toast from the component
        toast('this book is added to your read list')
    }
}

export {addToStoredReadList,getStoreReadList}