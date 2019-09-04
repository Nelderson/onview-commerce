import React from 'react'

const PostTable = ({data, postUser}) => {
  const renderRows = () => {
    if (!data) return null

    return (
      <tbody>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td>{row.title}</td>
              <td>{row.body}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }

  return (
    <div className='table-container'>
        <h3>{postUser.name} Posts:</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          {renderRows()}
        </table>
      </div>
  )
}

export default PostTable;