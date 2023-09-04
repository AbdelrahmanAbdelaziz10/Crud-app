import './App.css';
import HeadTitle from './component/Head-Title';
import UpdateUser from './component/UpdateUser';
import UserForm from './component/userform';
import Users from './component/Users';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [state , setState]= useState(false);
  const [user,setUser] = useState({});
  const {addToLocalStorage,getFromLocalStorage}=useLocalStorage();
  const [users , setUsers]= useState(getFromLocalStorage());

  const store =(data)=>{
    setUsers([...users,data]);
    addToLocalStorage([...users,data]);
  }

  const  deleteUser = (id)=>{
      let newUser=users.filter((item)=>item.id !== id);
      setUsers (newUser) ;
      addToLocalStorage(newUser);

  }

  const editUser=(id)=>{
    let editUser=users.find(item=> item.id === id);
    setState(true);
    setUser(editUser);

  }

  const updateUser=(name , email , password)=>{
    let UpdateUser=users.map((item)=>{
      if(user.id === item.id){
        user.name=name;
        user.email=email;
        user.password=password;
        return user;
      }
      return item;
    });

    setState(false);
    setUsers(UpdateUser);
    addToLocalStorage(UpdateUser);

  }

  return (
    <div className="App">
    <div className='container'>
      <HeadTitle title={'Crud App'}/>
      <div className='row'>
        <div className='col-5 col-sm-12'>
        {!state ? <UserForm  store={store}/> : <UpdateUser user={user} updateUser={updateUser}/>}
        </div>
        <div className='col-7 col-sm-12'>
        <table className='table table-bordered '>
    <thead>
        <tr>
            <th>
            ID
            </th>
            <th>
            Name
            </th>
            <th>
            Email
            </th>
            <th>
            Password
            </th>
            <th>
            Action
            </th>
        </tr>
    </thead>
    {users.map((user)=>{
          return <Users 
          key={user.id} 
          id={user.id} 
          name={user.name} 
          email={user.email} 
          password={user.password} 
          deleteUser={deleteUser}
            editUser ={editUser} 
          />
        })}
    </table>

        </div>
      </div>
      
    </div>

    </div>
  );
}

export default App;
