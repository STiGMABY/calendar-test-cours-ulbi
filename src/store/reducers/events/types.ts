import { IUser } from '../../../models/IUser'
import { IEvent } from '../../../models/IEvent'

export enum EventsActionList  {
  SET_EVENTS = 'SET_EVENTS',
  SET_GUESTS = 'SET_GUESTS'
}

interface ISetEventAC {
  type: EventsActionList.SET_EVENTS,
  payload: IEvent[]
}

interface ISetGuestsAC {
  type: EventsActionList.SET_GUESTS,
  payload: IUser[]
}

export type EventActions =
  ISetEventAC |
  ISetGuestsAC
