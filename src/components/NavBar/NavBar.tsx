import React from 'react'
import { Layout, Menu, Row } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const NavBar = () => {

  const {isAuth, user} = useTypedSelector(state => state.authReducer)
  const {logout} = useActions()

  const logoutSuccess = () => {
    logout()
  }

  return (
    <Layout.Header>
      <Row justify={ 'end' }>
        {
          isAuth
            ?
            <>
              <div style={ {color: 'white'} }>
                { user.username }
              </div>
              <Menu theme={ 'dark' } mode={ 'horizontal' } selectable={ false }>
                <Menu.Item
                  key={ 1 }
                  onClick={ logoutSuccess }
                >Выход
                </Menu.Item>
              </Menu>
            </>
            :
            <Menu theme={ 'dark' } mode={ 'horizontal' } selectable={ false }>
              <Menu.Item
                key={ 1 }
              >Login
              </Menu.Item>
            </Menu>
        }
      </Row>
    </Layout.Header>
  )
}