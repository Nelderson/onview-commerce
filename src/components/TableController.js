import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { 
  getTableData, 
  changeToPostView, 
  changeToTableView, 
  updateSearchInput 
} from '../actions';
import { 
  getCurrentView, 
  getFormattedTableData, 
  getFormattedPostData,
  getPostUser, 
} from '../selectors'
import UserTable from './UserTable'
import PostTable from './PostTable'

class TableController extends Component {
  componentDidMount() {
    this.props.getTableData()
  }

  render() {
    const { 
      currentView, 
      tableData,
      postData,
      changeToPostView, 
      changeToTableView,
      updateSearchInput,
      postUser,
    } = this.props

    return (
      <div className='main-container'>
        {currentView === 'userTable' &&
          <div>
            <div className='input-container'>
              <input onChange={(e) => updateSearchInput(e.target.value)} placeholder='Search by name:'/>
            </div>
            <UserTable 
              data={tableData} 
              goToPostView={(userId) => changeToPostView(userId)}
            />
          </div>
        }
        {currentView === 'postTable' &&
          <div>
            <div className='button-container'>
              <button onClick={changeToTableView}>Back</button>
            </div>
            <PostTable 
              data={postData}
              postUser={postUser}
            />
          </div>
        }
      </div>
    ) 
  }
}

  const mapStateToProps = (state) => ({
    currentView: getCurrentView(state),
    tableData: getFormattedTableData(state),
    postData: getFormattedPostData(state),
    postUser: getPostUser(state),
  })

  const actions = {
    getTableData,
    changeToPostView,
    changeToTableView,
    updateSearchInput,
  }

  export default connect(mapStateToProps, actions)(TableController);
