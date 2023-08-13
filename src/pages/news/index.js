import React from 'react'
import Image from 'next/image';
import Appointment from '@/components/About/Appointment';
const News = ({news}) => {
  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
        <h1>Tin tức</h1>
        <div className='d-flex justify-content-around align-items-centr'>
        {
                news?.map((n,key)=>{
                    return(
                        <div className='d-flex flex-column justify-content-between align-items-center col-3 p-2'>
                            <Image src={n.imgUrl} width={200} height={200} alt='new'/>
                            <b className='fs-5'>{n.title}</b>
                            <p>{n.content.substring(0,100)+"..."}</p>
                        </div>
                    );  
                })      
        }
        
        </div>
        <Appointment/>
        
    </div>
  )
}

export default News;
export async function getStaticProps(){
    const response = await fetch('http://localhost:8080/news');
    const data = await response.json();
    return{
        props:{
            news:data
        }
    }
}