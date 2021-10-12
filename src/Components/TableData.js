

const formKeys = Object.values(localStorage);

const forms = formKeys.splice(0);

const TableData = () => {
    return (
        <>
        {forms.map((form) => {
            const data = JSON.parse(form);

            const values = {
                key: {
                    name: data[0],
                    date: data[2],
                    type: data[4],
                    email: data[6],
                    phone: data[8],
                    market: data[10],
                    tbody: data[12],
                    row: data[13]
                },
                value: {
                    name: data[1],
                    date: data[3],
                    type: data[5],
                    email: data[7],
                    phone: data[9],
                    market: data[11],
                }
            }

            return (
                <tbody style={tbodyStyle} key={values.key.tbody}>
                <tr style={trowStyle} key={values.key.row}>
                    <td style={tableDataStyle} key={values.key.name}>{values.value.name}</td>
                        <td style={tableDataStyle} key={values.key.date}>{values.value.date}</td>
                        <td style={tableDataStyle} key={values.key.type}>{values.value.type}</td>
                        <td style={tableDataStyle} key={values.key.email}>{values.value.email}</td>
                        <td style={tableDataStyle} key={values.key.phone}>{values.value.phone}</td>
                        <td style={tableDataStyle} key={values.key.market}>{values.value.market}</td>
                    </tr>
            </tbody>
            )})}
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
    fontSize: '1.4em',
    fontFamily: 'serif'
}

export default TableData
