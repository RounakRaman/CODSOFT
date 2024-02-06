import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";
import { axiosBaseReqAdd } from "../axiosBaseReqAdd";


const useFetchCat = (url) => {

    const [dataCat,setDataCat] = useState([]);
    const [loadingCat,setLoadingCat] = useState(false);
    const [errorCat, setErrorCat] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try{
            setLoadingCat(true);
            const res = await axiosBaseReqAdd.get(url);   //ALTERNATIVE IF axioBaseReqAdd NOT MADE: const res = await axios.get(process.env.REACT_APP_API_URL + url , {headers: {Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN},});      {/* url is a variable parameter jo ham apne according jaha jo data chahiye uss hisab se denge while ofc base address (localhost.../..) jo env file mai hai uske baad ayega ye*/}
            setDataCat(res.data.data);   // agar res ko console log krenge toh vaha data folder h uske andar ek aur data hai aur fir andar array required milegi
            console.log(res)
          }
          catch(err){
            console.log(err)
            setErrorCat(true);
          }
           setLoadingCat(false);
        };
        fetchData();
       },[url])

    return {dataCat, loadingCat , errorCat};
}

export default useFetchCat;