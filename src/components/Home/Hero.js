import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='position-relative'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div className="carousel-item active position-relative">
                    <Image src="/slider/office-building.png" width="0" height="0" sizes="100vw" className='w-100 h-50'  alt="..."/>
                    <div className='position-absolute top-0 description col-6 p-5'>
                        <h1>Giải pháp xây dựng cho mọi người</h1>
                        <p>Chúng tôi là một trong những công ty thiết kế xây dựng uy tín và chuyên nghiệp nhất, với hơn 5 năm kinh nghiệm phục vụ. Chúng tôi cung cấp đầy đủ các dịch vụ liên quan đến thiết kế kiến trúc, thiết kế nội thất, tư vấn đầu tư xây dựng và quản lý giám sát thi công dự án.</p>
                        <p>Đội ngũ của chúng tôi gồm có các kiến trúc sư, thiết kế nội thất chuyên nghiệp có hiểu biết sâu rộng về xu hướng thiết kế hiện đại, kỹ sư xây dựng giàu kinh nghiệm cùng các chuyên gia quản lý dự án luôn sẵn sàng đồng hành cùng quý khách hàng từ khâu đầu tiên cho tới khi hoàn thiện công trình.</p>
                        <button className='btn btn-danger btn-large p-3'>Tìm hiểu thêm</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image src="/slider/duan.jpg" width="0" height="0" sizes="100vw" className='w-100 h-50'   alt="..."/>
                </div>
                <div className="carousel-item">
                    <Image src="/slider/system.jpg" width="0" height="0" sizes="100vw" className='w-100 h-50'  alt="..."/>
                </div>
                <div className="carousel-item">
                    <Image src="/slider/railway.jpg" width="0" height="0" sizes="100vw" className='w-100 h-50'  alt="..."/>
                </div>
                <div className="carousel-item">
                    <Image src="/slider/tools.jpg" width="0" height="0" sizes="100vw" className='w-100 h-50'  alt="..."/>
                </div>
               
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className='achivement position-absolute d-flex col-8 '>
            <div className='bg-primary col-3 d-flex flex-column justify-content-center align-items-start p-3'>
                <h2>30+</h2>
                <p>Dự án thành công</p>
            </div>
            <div className='bg-danger d-flex flex-column justify-content-center align-items-start col-3 p-3'>
                <h2>5+</h2>
                <p>Năm kinh nghiệm</p>
            </div>
            <div className='bg-white col-5 p-4 position-absolute bottom-50 start-50 main-bussiness'>
                <h3 className='text-dark'>Chúng tôi cung cấp giải pháp xây dựng tối ưu, phù hợp với nhu cầu và ngân sách của mọi khách hàng</h3>
                <div></div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Hero