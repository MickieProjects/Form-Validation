import React, { useState } from 'react'

const Form = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    //  Error Message Management
    const [errorUserName, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    // setColor Input
    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    // Form Validate
    const validateForm = (e) => {
        e.preventDefault()
        
        // Check Username 
        if (userName.length > 8) {
            setErrorUsername('')
            setUserNameColor('green')
        }else {
            setErrorUsername('ชื่อผู้ใช้น้อยกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }
        // Check Email
        if (email.includes("@")) {
            setErrorEmail('')
            setEmailColor('green')
        }else {
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }
        // Check Password
        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        }else {
            setErrorPassword('รหัสผ่านน้อยกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }
        // Check Confirm Password
        if (confirmpassword != '' && confirmpassword === password) {
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }else {
            setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน')
            setConfirmPasswordColor('red')
        }
    }

    return (
        <div className=' h-[100vh] flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
            <form onSubmit={validateForm} className=' p-7 w-[500px] shadow-2xl mx-auto my-auto rounded-md bg-white '>
                <h1 className=' text-center text-[30px] mb-5'>แบบฟอร์มลงทะเบียน</h1>
                {/* Username */}
                <div className="form-control mb-3 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>ชื่อผู้ใช้</label>
                    <input 
                        type="text"
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 outline-none ' 
                        style={{borderColor:userNameColor}}
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
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 outline-none ' 
                        style={{borderColor:emailColor}}
                    />
                    <small>{errorEmail}</small>
                </div>
                {/* Password */}
                <div className="form-control mb-3 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>รหัสผ่าน</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 outline-none ' 
                        style={{borderColor:passwordColor}}
                    />
                    <small>{errorPassword}</small>
                </div>
                {/* Confirm Password */}
                <div className="form-control mb-10 p-2">
                    <label className=' block mb-2 text-[16px] font-medium '>ยืนยันรหัสผ่าน</label>
                    <input 
                        type="password" 
                        value={confirmpassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className=' block rounded-sm border-solid border-2 border-inherit w-full p-1 outline-none ' 
                        style={{borderColor:confirmPasswordColor}}
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