import React from 'react'
import List from '../../components/List/List'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Products.css'
import useFetch from '../../hooks/useFetch'
import useFetchCat from '../../hooks/useFetchCat'
import { styles } from './styles'

const Products = () => {
  
  const catId = parseInt(useParams().id);            {/*key value pair gets stored in catId where key is 'id' and value is '1' and parsed value to be integer cuz it was earlier string*/}
  console.log(catId);                   {/*.id made to print the value here or else catId wouldve printed key value gets printed*/} 
  


  const {data, loading , error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  const {dataCat, loadingCat , errorCat} = useFetchCat(`/categories/${catId}?populate=*`);



  const [upperPriceLimit,setUpperPriceLimit] = useState(500000);
  
  const maxPriceSetter = (event) =>{
    setUpperPriceLimit(event.target.value)
  }

  const [sort,setSort] = useState('asc');

  const [subCatVizSelected,setSubCatVizSelected] = useState([]);

  const selectedSubCat = (e) => {
    const isChecked = e.target.checked;
    setSubCatVizSelected(isChecked ? [...subCatVizSelected, e.target.value] : subCatVizSelected.filter((item)=>(item !== e.target.value)));
  }
  
  console.log(subCatVizSelected);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.subContainerLeft}>              {/*left*/}

        <div className={styles.filterDiv}>       {/*filterItem1*/}
          <h2 className={styles.title1}>Categories</h2>
          
          {data?.map((item)=>
          (<div className='-ml-[20px] sm:-ml-[0px]' key={item.id}>
            <input type='checkbox' id={item.id} value={item.id} className='w-2 h-2' onChange={selectedSubCat}/>
            <label htmlFor={item.id} className={styles.filter}>{item.attributes.title}</label>
          </div>)
          )}
        </div>

        <div className={styles.filterDiv}>       {/*filterItem2*/}
          <h2 className={styles.title2}>Price Filter</h2>
          <div className='mb-[10px] -ml-[5px] sm:-ml-[10px] '>
            <span className={styles.quantity}>0</span>
            <input type='range' className={styles.rangeLine} min={0} max={500000} onChange={maxPriceSetter}/>
            <span className={styles.quantity}>{upperPriceLimit}</span>
          </div>
        </div>

        <div className={styles.filterDiv}>       {/*filterItem3*/}
          <h2 className={styles.title3}>Sort by</h2>
          <div className='mb-[10px] -ml-[3px] sm:-ml-[0px]'>
            <input type='radio' className='w-2 h-2' id='asc' value='asc' name='price' onChange={(e)=>setSort('asc')}/>
            <label htmlFor = 'asc' className={styles.filter}>Price (Lowest first)</label>
          </div>
          <div className='mb-[10px]'>
            <input type='radio' className='w-2 h-2' id='desc' value='desc' name='price' onChange={(e) =>{setSort('desc')}}/>
            <label htmlFor = 'desc' className={styles.filter}>Price (Highest first)</label>
          </div>
        </div>


      </div>


      <div className={styles.subContainerRight}>    {/*right*/}
        <img src = {process.env.REACT_APP_UPLOAD_URL + dataCat?.attributes?.img?.data?.attributes?.url} alt='' className={styles.imgRight}/>
        <List catId={catId} sort={sort} upperPriceLimit={upperPriceLimit} subCatVizSelected={subCatVizSelected} />
      </div>   
    </div>
    
  )
}

export default Products
