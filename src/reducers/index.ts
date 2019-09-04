import { StoreData } from '../types'

let INITIAL_STATE: StoreData = {
  currentView: 'userTable',
  searchValue: '',
  postUser: {
    id: null,
    name: '',
  },
  tableData: [],
  postData: [],
}

export default (state = INITIAL_STATE, action: any = {}) => {
  switch (action.type) {
    case 'TABLE_UPDATE_DATA':
      return {
        ...state,
        tableData: action.payload
      }

    case 'POSTS_UPDATE_DATA':
      return {
        ...state,
        postData: action.payload.postData,
        postUser: action.payload.postUser,
      }

    case 'UPDATE_CURRENT_VIEW':
      return {
        ...state,
        currentView: action.payload
      }

    case 'UPDATE_SEARCH_INPUT':
      return {
        ...state,
        searchValue: action.payload
      }

    default:
      return state
    }
}