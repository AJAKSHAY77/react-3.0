import React, { useContext } from 'react'
import Usercontext from '../Utils/UserContext'

const Footer = () => {
    const{code}=useContext(Usercontext)
  return (
    <>
      <div>Footer</div>
          <div>{ code.name}</div>
    </>
  );
}

export default Footer