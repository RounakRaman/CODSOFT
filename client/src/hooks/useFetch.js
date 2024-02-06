import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";
import { axiosBaseReqAdd } from "../axiosBaseReqAdd";


const useFetch = (url) => {
  
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          try{
            setLoading(true);
            const res = await axiosBaseReqAdd.get(url);   //ALTERNATIVE IF axioBaseReqAdd NOT MADE: const res = await axios.get(process.env.REACT_APP_API_URL + url , {headers: {Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN},});      {/* url is a variable parameter jo ham apne according jaha jo data chahiye uss hisab se denge while ofc base address (localhost.../..) jo env file mai hai uske baad ayega ye*/}
            setData(res.data.data);   // agar res ko console log krenge toh vaha data folder h uske andar ek aur data hai aur fir andar array required milegi; so jb bhi kahi useFetch use krne k baad data.map kr rhe toh => here item == res.data.data
            console.log(res)
          }
          catch(err){
            console.log(err)
            setError(true);
          }
          setLoading(false);
        };
        fetchData();
      },[url])
      
    return {data, loading , error};
  
}

export default useFetch;