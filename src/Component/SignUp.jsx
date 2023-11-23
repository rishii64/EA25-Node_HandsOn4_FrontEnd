import React, { createRef, useState } from 'react'
import axios from 'axios'

export default function SignUp() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const [ph, setPh] = useState("")
  const [err, setErr] = useState({ type: false, value: "" })

  const nameRef = createRef()
  const mailRef = createRef()
  const passRef = createRef()
  const phRef = createRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length <= 0) {
      nameRef.current.focus()
      setErr({ type: true, value: "Please enter name" })
    }
    else if (mail.length <= 0) {
      mailRef.current.focus()
      setErr({ type: true, value: "Please enter mail id" })
    }
    else if (pass.length <= 0) {
      passRef.current.focus()
      setErr({ type: true, value: "Please enter password" })
    }
    else if (ph.length <= 0) {
      phRef.current.focus()
      setErr({ type: true, value: "Please enter ph no." })
    }
    else {
      const tempObj = {
        "name": name,
        "mail": mail,
        "pass": pass,
        "ph": ph
      }
      axios.post("https://handson4backend-dxua.onrender.com", tempObj)
      .then((response) => {
          setErr({ type: true, value: `${response.data.msg}` })
          if (response.data.token)
            localStorage.setItem("Token", response.data.token)
          clearInput()
        })
    }
  }
  const handleChange = (e) => {
    if (e.target.name)
      setName(e.target.value)
    else if (e.target.mail)
      setMail(e.target.value)
    else if (e.target.pass)
      setPass(e.target.value)
    else if (e.target.ph)
      setPh(e.target.value)
    // else
    //   alert("Wrong input")
  }
  const clearInput = () => {
    nameRef.current.value = ""
    nameRef.current.focus()
    mailRef.current.value = ""
    passRef.current.value = ""
    phRef.current.value = ""
  }

  return (
    <>
      {err.type ? <p>{err.value}</p> : null}
      <form className='signUp'>
        <h2 className='header'>Create your new Account</h2> <br />

        <div className='form-item'>
          <input type="text" name='name' onChange={handleChange} ref={nameRef} required /> <br />
          <label>Name</label> <br />
        </div>

        <div className='form-item'>
          <input type="text" name='mail' onChange={handleChange} ref={mailRef} required />  <br />
          <label>E-mail</label> <br />
        </div>

        <div className='form-item'>
          <input type="password" name='pass' onChange={handleChange} ref={passRef} required />  <br />
          <label>Password</label> <br />
        </div>

        <div className='form-item'>
          <input type="number" name='ph' onChange={handleChange} ref={phRef} required />  <br />
          <label>Phone No.</label>  <br />
        </div>

        <button className='signUpBtn' onClick={handleSubmit} >SIGN UP</button>
      </form>
    </>
  )
}
