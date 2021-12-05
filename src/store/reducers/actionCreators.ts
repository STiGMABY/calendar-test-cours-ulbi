import { AuthActionCreatorsList, AuthUsersAPI } from './auth/types'

export const ActionCreatorsBoundList = {
  ...AuthUsersAPI,
  ...AuthActionCreatorsList,
}