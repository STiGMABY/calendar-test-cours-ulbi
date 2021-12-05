import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreatorsBoundList } from '../store/reducers/actionCreators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreatorsBoundList, dispatch)
}