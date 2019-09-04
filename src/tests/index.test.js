const tableData = require('./tableData.json')
const postData = require('./postData.json')
const { formattedTableData, formattedPostData } = require('../selectors')

describe('Name Search Filtering with formattedTableData', () => {
  it(`Name filter 'Lea' should return 1 row`, () => {
    expect(formattedTableData(tableData, 'Lea')).toHaveLength(1);
  })

  it(`Name filter 'fgdsfhhdh' should return 0 rows`, () => {
    expect(formattedTableData(tableData, 'fgdsfhhdh')).toHaveLength(0);
  })

  it(`Name filter 'clemen' should return 2 rows`, () => {
    expect(formattedTableData(tableData, 'clemen')).toHaveLength(2);
  })

  it(`Name filter 'CLemEn' should return 2 rows`, () => {
    expect(formattedTableData(tableData, 'CLemEn')).toHaveLength(2);
  })

  it(`Name filter '  CLEmEN ' should return 2 rows`, () => {
    expect(formattedTableData(tableData, '  CLEmEN ')).toHaveLength(2);
  })
})

describe('Data format with formatTableData', () => {
  it(`Formatted data should return only id, name, city, email, company`, () => {
    expect(formattedTableData(tableData, '')).toEqual(
      expect.arrayContaining([ 
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          city: expect.any(String),
          company: expect.any(String),
        })
      ])
    )
  })
})

describe('Data format with formattedPostData', () => {
  it(`Formatted data should return only title and body`, () => {
    expect(formattedPostData(postData)).toEqual(
      expect.arrayContaining([ 
        expect.objectContaining({
          title: expect.any(String),
          body: expect.any(String),
        })
      ])
    )
  })
})