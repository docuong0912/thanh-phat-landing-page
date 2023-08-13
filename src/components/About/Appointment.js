import React from 'react'

const Appointment = () => {
  return (
    <div className='container p-5'>
        <h4>Đăng kí tư vấn</h4>
        <form className='needs-validation' validate>
            <label className='form-label'>Họ và tên</label>
            <input type='text' className='form-control p-2' placeholder='Họ và tên' required/>
            <label className='form-label'>Điện thoại</label>
            <input type='number' className='form-control p-2' placeholder='Điện thoại' required/>
            <label className='form-label'>Nội dung</label>
            <textarea className='form-control p-2' rows={3} required></textarea>
            <button className='btn btn-danger btn-large p-3 col-3 mt-3'>Gửi</button>
        </form>
    </div>
  )
}

export default Appointment;
