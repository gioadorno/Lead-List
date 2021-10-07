import NavBar from "./NavBar"
import Table from "./Table"




const Body = () => {
    return (
        <div style={divStyle} >
            <NavBar />
            <Table />
        </div>
    )
}

// ----Styling

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
    height: '80em',
    backgroundColor: '#0083ff47'
}

export default Body
