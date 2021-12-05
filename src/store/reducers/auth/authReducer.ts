import { AuthActionList, AuthActions } from './types'
import { IUser } from '../../../models/IUser'

interface IAuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  isError: string | null
}

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isError: null,
  isLoading: false,
}

export const authReducer = (state = initialState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case AuthActionList.SET_AUTH:
      return {...state, isAuth: action.payload}
    case AuthActionList.SET_ERROR:
      return {...state, isError: action.payload}
    case AuthActionList.SET_LOADING:
      return {...state, isLoading: action.payload}
    case AuthActionList.SET_USER:
      return {...state, user: action.payload}
    default:
      return state
  }
}