import Appointment from '@/components/About/Appointment'
import React from 'react'

const Contact = () => {
  return (
    <div className='d-flex flex-column bg-secondary bg-opacity-10'>
        <b className='text-uppercase fs-2 align-self-center'>CÔNG TY TNHH THIẾT KẾ XÂY DỰNG THÀNH PHÁT</b>
        <div >
            <div className='d-flex'>
                <div className='d-flex flex-column justify-content-center align-items-start p-5 col-5'>
                    <p className='d-inline'>CÔNG TY TNHH THIẾT KẾ XÂY DỰNG THÀNH PHÁT</p>
                    <ul className='d-inline-block'>
                        <li className='my-3'>Đia chỉ: 11 Đường Q, Khu phố Nhị Đồng 2, P. Dĩ An, Tp.Dĩ An, Bình Dương</li>
                        <li className='my-3'>Hotline: 0934.108.366</li>
                        <li className='my-3'>Email: tkxdthanhphat68@gmail.com</li>
                    </ul>
                </div>
                
                <Appointment/>
            </div>
            
        </div>
    </div>
  )
}

export default Contact