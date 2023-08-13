import React from 'react'
import Image from 'next/image'
const Partner = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
        <h3 className='project-header'>Đối tác</h3>
        <div className='bg-secondary bg-opacity-25 col-12 p-3'>
            <div className='d-flex justify-content-between align-items-center col-12'>
                <Image src={'/partners/dulux.png'} width={120} height={120} alt='partner'/>
                <Image src={'/partners/jotun.png'} width={120} height={120} alt='partner'/>
                <Image src={'/partners/kova-logo.png'} width={120} height={120} alt='partner'/>
                <Image src={'/partners/logo-mobile.png'} width={120} height={120} alt='partner'/>
                <Image src={'/partners/nippon-logo.jpg'} width={120} height={120} alt='partner'/>
                <Image src={'/partners/orange4.png'} width={120} height={120} alt='partner'/>
            </div>
        </div>
        
    </div>
  )
}

export default Partner