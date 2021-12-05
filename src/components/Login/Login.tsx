import React from 'react'
import { Card, Layout, Row } from 'antd'
import { LoginForm } from '../LoginForm/LoginForm'

export const Login = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  )
}