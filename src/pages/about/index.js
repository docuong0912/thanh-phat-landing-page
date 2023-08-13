import React from 'react'
import Image from 'next/image'
import Commitment from '@/components/About/Commitment'
import Appointment from '@/components/About/Appointment'
const About = () => {
  return (
    <div className='container'>
        <div className='about-header p-5'>
            <h2>Về chúng tôi</h2>
        </div>
        <div className='about-main p-3'>
            <div className='container-fluid bg-white p-4'>
                <h3 className='text-center'>Vì sao chọn Thành Phát</h3>
                <p>
                Tự hào là đơn vị đi đầu trong lĩnh vực thiết kế, thi công xây nhà trọn gói, thi công nội thất, sửa nhà trọn gói uy tín số 1 tại Thành phố Hồ Chí Minh, Bình Dương và các tỉnh thành Lân Cận.
                </p>
                <div>
                    <Image src={'/about/PANO21.jpg'} width={400} height={400} alt='about'/>
                    <div className='d-inline-block col-5 mx-3'>
                        <h4>Phương châm</h4>
                        <ul>
                            <li>Chữ Tín + Chữ Tâm đặt lên hàng đầu.</li>
                            <li>Độ ngũ kiến trúc sư thiết kế và kỹ sư chuyên nghiệp được đào tạo từ các trường đại học chính quy trên toàn quốc.</li>
                            <li>Xây Dựng Thành Phát sẽ làm hài lòng quý khách bằng những công trình chất lượng.</li>
                        </ul>
                    </div>
                </div>
                <Commitment/>
                <Appointment/>
            </div>
        </div>
    </div>
  )
}

export default About