import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook)
const Footer = () => {
  return (
    <footer className='mt-5 col d-flex'>
        <div className='col-4 bg-danger p-3'>
            <Image src={'/logo.png'} width={60} height={60} alt='logo'/>
            <div>
                <p className='text-uppercase'>thông tin liên hệ</p>
                <FontAwesomeIcon icon={faLocation}/>
                <div>
                    <p>Số 11 Đường Q, Khu TTHC Dĩ An, Khu phố Nhị Đồng 2, Phường Dĩ An, Thành phố Dĩ An, Tỉnh Bình Dương, Việt Nam</p>
                </div>
                <div>
                    
                    <p>0928.672.168</p>
                </div>
                <div>
                    <p>tkxdthanhphat68@gmail.com</p>
                </div>
                
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.892676251277!2d106.76059437528987!3d10.895760456980657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85d946ed7ef%3A0xa7856b2c6f769a34!2zQ8OUTkcgVFkgVE5ISCBUSEnhur5UIEvhur4gWMOCWSBE4buwTkcgVEjDgE5IIFBIw4FU!5e0!3m2!1svi!2s!4v1691827021429!5m2!1svi!2s" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-8 bg-primary p-3'>
            <ul>
                <li className='d-block '><Link className='text-white text-decoration-none' href={'/about'}>Về chúng tôi</Link></li>
                <li className='d-block'>Dịch vụ</li>
                <li className='d-block'>Dự án</li>
                <li className='d-block'>Báo giá</li>
                <li className='d-block'>Liên lạc</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer