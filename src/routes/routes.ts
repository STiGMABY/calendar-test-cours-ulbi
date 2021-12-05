import { Login } from '../components/Login/Login'
import { EventPage } from '../components/Event/EventPage/EventPage'
import { SettingsPage } from '../components/SettingsPage/SettingsPage'

interface IRoutes {
  path: string
  component: any
  exact: true
}

export enum Paths {
  LOGIN = '/login',
  EVENT_PAGE = '/',
  SETTINGS = '/settings',
}

export const publicRoutes: IRoutes[] = [
  {path: Paths.LOGIN, component: Login, exact: true},
]

export const privateRoutes: IRoutes[] = [
  {path: Paths.EVENT_PAGE, component: EventPage, exact: true},
  {path: Paths.SETTINGS, component: SettingsPage, exact: true},
]