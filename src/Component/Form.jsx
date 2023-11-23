import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

export default function Form() {
    return (
        
            <div className='form'>
                    <nav>
                        <NavLink className='links' to='/'>Sign Up</NavLink>
                        <NavLink className='links' to='/login'>Login</NavLink>
                    </nav>
                    <Routes>
                        <Route path='/' element={<SignUp />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
            </div>
        
    )
}
