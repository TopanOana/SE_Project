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
import { AddPublicDestinationToBucketList } from './components/PublicList/AddPublicDestinationToBucketList';


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
          <Route path="/publicListUser" element={<><AppMenuUser/><GetAllDestinationsUser/></>}/>
          <Route path="/bucketList" element={<><AppMenuUser/><GetBucketList/></>}/>
          <Route path="/bucketList/add" element={<AddPrivateDestination/>}/>
          <Route path="/publicListUser/addPublicDestination/:id" element={<AddPublicDestinationToBucketList/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
