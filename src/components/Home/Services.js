import React from 'react'
import Image from 'next/image'
import { useRef,useEffect,useState } from 'react'
const Services = () => {
    const itemsRef = useRef([]);
    const [show,isShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return()=>{window.removeEventListener("scroll",onScroll)}
    },[])
    const onScroll=()=>{
        const top = [];
        itemsRef.current.map(item=>{
            console.log(window.innerHeight)
            if(item.offsetTop>=window.innerHeight/4){
                item.classList.add("show")
            }
        })
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center projects'>
        <h3 className='project-header'>Dịch vụ thiết kế</h3>
        <div className='container'>
            <div  className='mt-5 p-5 service '>
                <div  ref={el => itemsRef.current[0] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                    <Image src="/services/thietkenhao.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế nhà ở</h4>
                    </div>
                </div>
                
            </div>
            <div className='mt-5 p-5 service '>
                <div   ref={el => itemsRef.current[1] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                    <Image src="/services/thietkebietthu.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế biệt thự</h4>
                    </div>
                </div>
                
            </div >
            <div className='mt-5 p-5 service '>
                <div   ref={el => itemsRef.current[2] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                    <Image src="/services/thietkechungcu.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế chung cư</h4>
                    </div>
                </div>
                
            </div>
            <div className='mt-5 p-5 service'>
                <div  ref={el => itemsRef.current[3] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                <Image src="/services/thietkenoithat.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế nội thất</h4>
                    </div>
                </div>
                
            </div>
            <div className='mt-5 p-5 service '>
                <div  ref={el => itemsRef.current[4] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                    <Image src="/services/thietkesuachua.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế sửa chữa</h4>
                    </div>
                </div>
                
            </div>
            <div className='mt-5 p-5 service '>
                <div  ref={el => itemsRef.current[5] = el}  className='service-inner d-flex justify-content-between align-items-start'>
                    <Image src="/services/thietkevanphong.jpg" width="500" height="500" alt="service"/>
                    <div className='col-5'>
                        <h4 className='text-white'>Thiết kế văn phòng, nhà hàng</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services