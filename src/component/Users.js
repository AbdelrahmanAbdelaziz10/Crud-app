import React from 'react'
import '../comstyle/Users.css'
const Users = ({id , name , email ,password , deleteUser , editUser}) => {


  return (

    <tbody>
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>
                {password}
            </td>
            <td>
                <button className='btn btn-info mx-2' onClick={()=>editUser(id)} >Edit</button>
                <button className='btn btn-danger' onClick={()=>deleteUser(id)}  >Delete</button>

            </td>
        </tr>
    </tbody>

  )
}

export default Users