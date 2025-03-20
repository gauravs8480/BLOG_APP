import React from 'react'
import Navbar from './components/Navbar'

import { Route,Routes } from 'react-router-dom'
import HomePage from './routes/Homepage'
import PostListPage from './routes/PostListPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import SinglePostPage from './routes/SinglePostPage'




const App = () => {
  return (
    <div className='px-4 md:px-9 lg:px-16 lx:px-32 2xl:px-64'>

{/*NAVBAR*/}
<Navbar/>


<Routes>

<Route  path='/' element={<HomePage/>} />
<Route  path='/posts' element={<PostListPage/>} />
<Route  path='/:slug' element={<SinglePostPage/>} />
<Route  path='/Write' element={<Write/>} />
<Route  path='/login' element={<LoginPage/>} />
<Route  path='/register' element={<RegisterPage/>} />
</Routes>

    </div>
  )
}

export default App