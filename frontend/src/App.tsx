import { useState } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppMenuUser } from './components/AppMenuUser'
import { AppMenuAdmin } from './components/AppMenuAdmin'
import GetAllDestinationsAdmin from './components/PublicList/GetAllDestinationsUser'
import GetAllDestinationsUser from './components/PublicList/GetAllDestinationsUser'
import { AddPrivateDestination } from './components/BucketList/AddPrivateDestination'
import GetBucketList from './components/BucketList/GetBucketList'
import { AddPublicDestination } from './components/PublicList/AddPublicDestination';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin' element={<AppMenuAdmin/>}/>
          <Route path='/user' element={<AppMenuUser/>}/>
          <Route path="/admin/publicListAdmin" element={<><AppMenuAdmin/><GetAllDestinationsAdmin/></>}/>
          <Route path="/admin/publicListAdmin/add" element={<AddPublicDestination/>}/>
          <Route path="/user/publicListUser" element={<GetAllDestinationsUser/>}/>
          <Route path="/user/bucketList" element={<GetBucketList/>}/>
          <Route path="/user/bucketList/add" element={<AddPrivateDestination/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
