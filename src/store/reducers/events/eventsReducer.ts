import { EventActions, EventsActionList } from './types'
import { IUser } from '../../../models/IUser'
import { IEvent } from '../../../models/IEvent'

interface IEventsState {
  events: IEvent[],
  guests: IUser[]
}

const initialState: IEventsState = {
  events: [],
  guests: [],
}

export const eventsReducer = (state = initialState, action: EventActions): IEventsState => {
  switch (action.type) {
    case EventsActionList.SET_EVENTS:
      return {...state, events: action.payload}
    case EventsActionList.SET_GUESTS:
      return {...state, guests: action.payload}
    default:
      return state
  }
}