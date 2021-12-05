import axios from 'axios'
import { IUser } from '../../../models/IUser'
import { AppDispatch } from '../../index'

export enum AuthActionList {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  SET_USER = 'SET_USER',
}

interface ISetAuthAction {
  type: AuthActionList.SET_AUTH
  payload: boolean
}

interface ISetErrorAction {
  type: AuthActionList.SET_ERROR
  payload: string
}

interface ISetLoadingAction {
  type: AuthActionList.SET_LOADING
  payload: boolean
}

interface ISetUserAction {
  type: AuthActionList.SET_USER
  payload: IUser
}

export type AuthActions =
  ISetAuthAction |
  ISetErrorAction |
  ISetLoadingAction |
  ISetUserAction

export const AuthActionCreatorsList = {
  setAuth: (auth: boolean): ISetAuthAction => ({type: AuthActionList.SET_AUTH, payload: auth}),
  setError: (error: string): ISetErrorAction => ({type: AuthActionList.SET_ERROR, payload: error}),
  setLoading: (loading: boolean): ISetLoadingAction => ({type: AuthActionList.SET_LOADING, payload: loading}),
  setUser: (user: IUser): ISetUserAction => ({type: AuthActionList.SET_USER, payload: user}),
}

export const AuthUsersAPI = {
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreatorsList.setLoading(true))
      setTimeout(async () => {
        const response = await axios.get<IUser[]>('./MOCK_DATA.json')
        const currentUser = response.data.find(user => user.username === username && user.password === password)
        console.log(currentUser)
        if (currentUser) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', currentUser.username)
          dispatch(AuthActionCreatorsList.setUser(currentUser))
          dispatch(AuthActionCreatorsList.setAuth(true))
        } else {
          dispatch(AuthActionCreatorsList.setError('Wrong password or username!'))
        }
        dispatch(AuthActionCreatorsList.setLoading(false))
      }, 1000)
    } catch (e: any) {
      dispatch(AuthActionCreatorsList.setError('Login error!'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreatorsList.setUser({} as IUser))
    dispatch(AuthActionCreatorsList.setAuth(false))
  },
}