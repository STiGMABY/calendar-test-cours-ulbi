import React, { useEffect } from 'react'
import './App.css'
import { AppRouter } from './routes/AppRouter'
import { Layout } from 'antd'
import { NavBar } from './components/NavBar/NavBar'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'

function App() {

  const {setAuth, setUser} = useActions()

  useEffect(()=> {
    if (localStorage.getItem('auth')){
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setAuth(true)
    }
  }, [])

  return (
    <Layout>
      <NavBar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </Layout>
  )
}

export default App
