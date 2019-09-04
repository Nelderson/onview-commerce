import { PostUser } from '../types'

export const getTableData = () => (dispatch: any) => {
  //HTTP Request
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
      //Store Update
      dispatch({
        type: 'TABLE_UPDATE_DATA',
        payload: data
      })
    });
}

export const getPostData = (postUser: PostUser) => (dispatch: any) => {
  //HTTP Request
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${postUser.id}`)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: 'POSTS_UPDATE_DATA',
        payload: {
          postData: data,
          postUser: postUser,
        }
      })
    });
}

export const changeToPostView = (postUser: PostUser) => (dispatch: any) => {

  dispatch(getPostData(postUser))

  dispatch({
    type: 'UPDATE_CURRENT_VIEW',
    payload: 'postTable'
  })
}

export const changeToTableView = () => (dispatch: any) => {
  //Clear previous search input when going back to user table
  dispatch(updateSearchInput(''))

  dispatch({
    type: 'UPDATE_CURRENT_VIEW',
    payload: 'userTable'
  })
}

export const updateSearchInput = (text: string) => (dispatch: any) => {
  dispatch({
    type: 'UPDATE_SEARCH_INPUT',
    payload: text
  })
}