import { useEffect, useState } from 'react';

const ProfilePage = ()=>{

  const [user, setUser] = useState(null);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(()=>{

    fetch(`https://dummyjson.com/users/${id}`)
    .then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log("response",res)
        setUser(res);
        console.log("user",user);
    })
  },[id,token])

  if (!user) {
    return <div>Loading...</div>;
  }

    return (
        <div className='profile-div'>
            <h1>Profile Page</h1>
            <div className='name-div'>Welcome,<b>{user.firstName} {user.lastName}</b></div>
            <div className='info-div'>
            <div className='img-div'><img src={user.image}></img></div>
            <div>Username - {user.username}</div>
            <div>Email - {user.email}</div>
            <div>Mobile No. - {user.phone}</div>
            <div>Address - {user.address.address},{user.address.city} </div>
            <div>Date of Birth - {user.birthDate}</div>
            <div>Gender - {user.gender}</div>
            </div>
        </div>
    )
}

export default ProfilePage;