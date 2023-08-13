import React from 'react'

const Commitment = () => {
  return (
    <div className='quote p-5 d-flex justify-content-center align-items-start position-relative'>
                    <b className='fs-1 text-white'>Lời cam kết</b>
                    <div className='d-flex justify-content-around align-items-center col position-absolute commitment'>
                        <div className='col-2'>
                            <div className='bg-white p-3 rounded-2 d-flex justify-content-center align-items-center'>
                                <b className='fs-3 text-white bg-danger p-2 rounded-3 m-1 '>01</b>
                                <p >Hỗ trợ xin cấp phép xây dựng.</p>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='bg-white p-3 rounded-2 d-flex justify-content-center align-items-center'>
                                <b className='fs-3 text-white bg-danger p-2 rounded-3 m-1'>02</b>
                                <p >Luôn sát cánh cùng chủ nhà để lựa chọn sản phẩm tốt nhất.</p>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='bg-white p-3 rounded-2 d-flex justify-content-center align-items-center'>
                                <b className='fs-3 text-white bg-danger p-2 rounded-3 m-1'>03</b>
                                <p>Cam kết không bán thầu.</p>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='bg-white p-3 rounded-2 d-flex justify-content-center align-items-center'>
                                <b className='fs-3 text-white bg-danger p-2 rounded-3 m-1'>04</b>
                                <p>Xây Dựng Thành Phát: An toàn – Chất lượng – Tiến độ</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Commitment