import { StoreData, User, Post, UserFormatted } from '../types'
import { createSelector } from 'reselect'

const tableData = (state: StoreData)  => {
  return state.tableData
}

const postData = (state: StoreData)  => {
  return state.postData
}

const searchInput = (state: StoreData)  => {
  return state.searchValue
}

export const getCurrentView = (state: StoreData)  => {
  return state.currentView
}

export const getPostUser = (state: StoreData)  => {
  return state.postUser
}

export const getFormattedPostData = createSelector(
  postData,
  data => {
    return formattedPostData(data)
  }
)

export const getFormattedTableData = createSelector(
  tableData,
  searchInput,
  (data, searchInput) => {
    return formattedTableData(data, searchInput)
  }
)

export const formattedTableData = (data: User[], searchInput: string) => {
  return data.reduce((formattedData: UserFormatted[], user) => {
    //Search input
    if (searchInput && searchInput !== '') {
      //Filter by name
      if (user.name.trim().toLowerCase().search(searchInput.trim().toLowerCase()) > -1) {
        formattedData.push({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city,
          company: user.company.name
        })
      }
    }
    // No search input
    else {
      formattedData.push({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name
      })
    }

    return formattedData

  }, [])
}

export const formattedPostData = (data: Post[]) => {
  return data.map(post => {
    return {
      title: post.title,
      body: post.body,
    }
  })
}

