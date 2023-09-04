import React, { useEffect, useState } from 'react'

const UpdateUser = ({user , updateUser}) => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    useEffect(()=>{
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    },[ ])

    const onSubmit = (e)=>{
        e.preventDefault();
        updateUser(name , email , password);
        
    }

  return (
    <>
        
    <form className='form border p-3 mb-3' onSubmit={onSubmit}>
    <div className='mb-3'>
        <label className='mb-3' > Type User Name  </label>
        <input type='text' name='user' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
        <label className='mb-3 mt-3' > Type Your Email  </label>
        <input type='email' name='user' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
        <label className='mb-3 mt-3' > Type Your Password  </label>
        <input type='password' name='user' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'/>

    </div>
    <button className='btn btn-info' type='submit'> Update User</button>
    </form>
    </>
  )
}

export default UpdateUser;