import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { validationRules } from '../../utils/utils'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { IUser } from '../../models/IUser'

export const LoginForm = () => {

  const {isLoading, isError} = useTypedSelector(state => state.authReducer)

  const [loginData, setLoginData] = useState<IUser>({username: '', password: ''})

  const {login} = useActions()

  const loginSuccess = () => {
    login(loginData.username, loginData.password)
  }

  return (
    <Form onFinish={ loginSuccess }>
      {
        isError && <div style={ {color: 'orangered', margin: '0.5rem', justifyContent: 'center', display: 'flex'} }>{ isError }</div>
      }
      <Form.Item
        label="Username"
        name="username"
        rules={ [validationRules.required('Please input your password!')] }
      >
        <Input value={ loginData.username }
               onChange={ event => setLoginData({...loginData, username: event.target.value}) }/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={ [{required: true, message: 'Please input your password!'}] }
      >
        <Input.Password value={ loginData.password }
                        onChange={ event => setLoginData({...loginData, password: event.target.value}) }/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={ isLoading } style={{justifyContent: 'center', display: 'flex'}}>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}