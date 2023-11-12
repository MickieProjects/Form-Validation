import React, { useState } from 'react'

const Form = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    //  Error Message Management
    const [errorUserName, setErrorUsername] = useState('กรุณาป้อนชื่อผู้ใช้')
    const [errorEmail, setErrorEmail] = useState('รูปแบบอีเมบไม่ถูกต้อง')
    const [errorPassword, setErrorPassword] = useState('รหัสผ่านต้องมีจำนวณ 6 ตัวอักษร')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('รหัสผ่านไม่ถูกต้อง')

    return (
        <div className=' h-[100vh] flex  '>
            <form className=' p-7 w-[500px] shadow-2xl mx-auto my-auto rounded-md '>
                <h1 className=' text-center text-[30px] mb-5'>แบบฟอร์มลงทะเบียน</h1>
                {/* Username */}
                <div className="form-control mb-3 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>ชื่อผู้ใช้</label>
                    <input 
                        type="text"
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 ' 
                    />
                    <small>{errorUserName}</small>
                </div>
                {/* Email */}
                <div className="form-control mb-3 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>อีเมล</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 ' 
                    />
                    <small>{errorEmail}</small>
                </div>
                {/* Password */}
                <div className="form-control mb-3 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>รหัสผ่าน</label>
                    <input 
                        type="text" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 ' 
                    />
                    <small>{errorPassword}</small>
                </div>
                {/* Confirm Password */}
                <div className="form-control mb-10 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>ยืนยันรหัสผ่าน</label>
                    <input 
                        type="text" 
                        value={confirmpassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 ' 
                    />
                    <small>{errorConfirmPassword}</small>
                </div>
                {/* Button */}
                <button type="submit" className=' w-full  bg-violet-600 text-white py-2 px-6 rounded-md text-lg'>ลงทะเบียน</button>
            </form>
        </div>
  )
}

export default Form