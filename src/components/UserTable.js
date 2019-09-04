import React from 'react'

const UserTable = ({
  data, 
  goToPostView
}) => {
  const renderRows = () => {
    if (!data) return null

    return (
      <tbody>
        {data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td 
                onClick={() => goToPostView({ id: row.id, name: row.name })}
                style={{cursor: 'pointer'}}
              >
                {row.name}
              </td>
              <td>{row.email}</td>
              <td>{row.city}</td>
              <td>{row.company}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }

  return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        {renderRows()}
      </table>
  )
}

export default UserTable;