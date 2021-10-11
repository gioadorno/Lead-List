

const formKeys = Object.values(localStorage);

const forms = formKeys.splice(0);

const TableData = () => {


    return (
        <>
        <tbody style={tbodyStyle}>
                    {forms.forEach((formData) => {
                            const data = JSON.parse(formData);
                <tr style={trowStyle}>
                        <td style={tableDataStyle}>
                        {data[0]}
                        </td>
                        <td style={tableDataStyle}>
                        {data[1]}
                        </td>
                        <td style={tableDataStyle}>
                        {data[2]}
                        </td>
                        <td style={tableDataStyle}>
                        {data[3]}
                        </td>
                        <td style={tableDataStyle}>
                        {data[4]}
                        </td>
                        <td style={tableDataStyle}>
                        {data[5]}
                        </td>
                </tr>
                })}
        </tbody>
        </>
    )
}



// Styling
const tbodyStyle = {
    width: '99%',
    height: '6%',
    backgroundColor: 'white',
    marginTop: '.3em',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: "0px 0px 0px 1px white"
}

const trowStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0px 0px 0px 1px white",
}

const tableDataStyle = {
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

export default TableData
