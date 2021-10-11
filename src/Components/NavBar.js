import PropTypes from 'prop-types'
import { BiBot } from 'react-icons/bi'

// Top NavBar with Title and Add Lead Button to open form

const NavBar = ({ name, buttonText, openForm }) => {

    function mouseOver(e) {
        e.target.style.background = 'tomato'
    }

    function mouseLeave(e) {
        e.target.style.background = '#32fafffc'
    }

    const mouseClick = () => {
        document.querySelector('.form').style.display = 'flex'
    }

    return (
        <div style={divStyle} >
            <h1 style={headerStyle}>
                {name}
            </h1>
            <button onMouseEnter={mouseOver} onMouseLeave={mouseLeave} onMouseDown={mouseClick} style={buttonStyle}> 
                {buttonText}
            </button>
            <BiBot style={botStyle} />
        </div>
    )
}

NavBar.defaultProps = {
    name: 'Lead List',
    class: 'Page-Body',
    buttonClass: 'buttonHover',
    buttonText: 'Add Lead',
    openForm: 'openForm'
}

NavBar.propTypes = {
    name: PropTypes.string,
    class: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string
}


// ----Styling

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "linear-gradient(#0089ffe3, #ffffff4a)",
    borderBottom: '2px solid transparent',
    width: '100%',
    height: '5em',
    flex: '1'
}

const headerStyle = {
    fontSize: '30px',
    color: 'black',
    fontFamily: 'monospace'
}

const buttonStyle = {
    position: 'absolute',
    left: '5em',
    backgroundColor: '#32fafffc',
    color: 'black',
    width: '12em',
    height: '4em',
    weight: '550',
    fontSize: '.8em'
}

const botStyle = {
    fontSize: '1.8em',
    color: 'red',
    marginLeft: '.1em'
}




export default NavBar
