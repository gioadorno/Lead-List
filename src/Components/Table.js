import PropTypes from 'prop-types'
import TableData from './TableData'


// Main Body Component that outputs info to Table

const Table = ({ name, date, type, email, phone, market }) => {
    return (
        <div style={divStyle} >
            <table style={tableStyle}>
                <thead style={tableHeaderStyle}>
                    <tr style={headerRow} >
                        <th style={headerStyle}> {name} </th>
                        <th style={headerStyle}> {date} </th>
                        <th style={headerStyle}> {type} </th>
                        <th style={headerStyle}> {email} </th>
                        <th style={headerStyle}> {phone} </th>
                        <th style={headerStyle}> {market} </th>
                    </tr>
                </thead>
                <TableData />
            </table>
        </div>
    )
}


Table.defaultProps = {
    name: 'Name',
    date: 'Date',
    type: 'Type',
    email: 'Email',
    phone: 'Phone',
    market: 'Market'
}

Table.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    market: PropTypes.string
}


// -----Styling

// Outer Box for Table
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: '80%',
    backgroundColor: '##66f4ff',
    flex: '9',

}

const tableStyle = {
    display: 'flex',
    width: '95%',
    height: '95%',
    backgroundColor: '#000000a6',
    justifyContent: 'flex-start',
    boxShadow: "0px 0px 0px 1px #62ffe9",
    flexDirection: 'column',
    alignItems: 'center'
}

const tableHeaderStyle = {
    width: '99%',
    height: '10%',
    backgroundColor: 'white',
    marginTop: '.3em',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: "0px 0px 0px 1px white"
}

const headerRow= {
    display: 'flex',
    border: '1px solid black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0px 0px 0px 1px white",
}

// Column Titles
const headerStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0px 0px 0px 1px white",
    height: '98%',
    fontSize: '1.8em',
    fontFamily: 'monospace'
}




export default Table
