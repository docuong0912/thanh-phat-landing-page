import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='p-3 position-sticky'>
        <div className='top-bar border-bottom'>
            <ul>
                <li className='d-inline-block mx-3'>Hỗ trợ</li>
                <li className='d-inline-block mx-3'>Đối tác</li>
                <li className='d-inline-block mx-3'>Việc làm</li>
            </ul>
            <div className='social-media'>
                
            </div>
        </div>
        <div className='menu-line col-10 mx-auto mt-4 position-sticky'>
            <Image src={'/logo.png'} width={60} height={60} alt='logo'/>
            <ul className='d-inline-block'>
                <li className='d-inline-block mx-4'><Link href={'/'}>Trang chủ</Link></li>
                <li className='d-inline-block mx-4'><Link href={'/about'}>Giới thiệu</Link></li>
                <li className='d-inline-block mx-4'>Dịch vụ</li>
                <li className='d-inline-block mx-4'><Link href={'/news'}>Tin tức</Link></li>
                <li className='d-inline-block mx-4'><Link href={'/news'}>Liên hệ</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header