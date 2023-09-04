
export default function useLocalStorage(){

    const addToLocalStorage=(data)=>{
        localStorage.setItem('user',JSON.stringify(data));
    }

    const getFromLocalStorage=()=>{
        return JSON.parse(localStorage.getItem("user")) || [];
    }

    return{addToLocalStorage,getFromLocalStorage}
  }