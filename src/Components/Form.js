import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

// Form to add new lead to table

const Form = ({ form, title, name, date, type, email, phone, market, inputType, inputClass, label, placeholder, markets, submit, radioClass, radioName }) => {

    const mouseOver = (e) => {
        e.target.style.color = 'red'
    }

    const mouseLeave = (e) => {
        e.target.style.color = 'white'
    }

    const mouseClick = () => {
        document.querySelector('.form').style.display = 'none'
    }



    const submitHover = () => {
        const submitButton = document.querySelector('.submitButton')
        submitButton.style.backgroundColor = 'tomato'
    }

    const submitLeave = () => {
        const submitButton = document.querySelector('.submitButton')
        submitButton.style.backgroundColor = '#32fafffc'
    }

    // Format Phone Number Field (Automated for users to input numbers and insert dashes/paranthesis automatically)


    const onKey = (e) => {
        const phone = document.querySelector('.phone')
        let regexpr0 = /\D/g

        let cNum = phone.value.replace(regexpr0, "");
    
        //Adds parenthesis and dashes to format phone number
        if (cNum.length < 3) {
            phone.value = cNum.substring(0)
        }
        if (3 < cNum.length && cNum.length <= 6) {
            phone.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3)
        }
        if (7 <= cNum.length) {
            phone.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3, 6) + "-" + cNum.substring(6)
        }


        // cNum.length < 3 ? phone.value = cNum.substring(0) : 
        // 3 < cNum.length && cNum.length <= 6 ? phone.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3) : 
        // 7 <= cNum.length ? phone.value = "(" + cNum.substring(0,3) + ")" + "-" + cNum.substring(3, 6) + "-" + cNum.substring(6) : 
        // null;

        let rawNumbers = phone.value.replace(regexpr0, "");

        if ( rawNumbers.length > 9 && e.key != "Backspace") {
            e.preventDefault()
        };
    }
    

    
    // const emailInput = document.querySelector('.email');

    // const emailLeave = () => {
    //     emailInput.value > '' && emailInput.value.includes('@') ? emailInput.style.borderColor = 'aqua' : emailInput.style.backgroundColor = 'red';

    //     emailInput.value.includes('@') ? emailInput.style.backgroundColor = '61c2e757' : emailInput.style.backgroundColor = 'red';
    // }

    const onSubmit = () => {
        
        const nameValue = document.querySelector('.name').value;
        const dateValue = document.querySelector('.date').value;

    // --------------
    // Selection for type of Buyer/Seller

        // const buyerSelect = document.querySelector('.buyer');
        // const sellerSelect = document.querySelector('.seller');

        const typeValue = document.querySelector('input[name="type"]:checked').value;

        // if (buyerSelect.checked) {
        //     var buyerValue = document.querySelector('buyer').value
        // };
        // if (sellerSelect.checked) {
        //     var sellerValue = document.querySelector('seller').value
        // };

        // var typeValue;

        // buyerValue != undefined ? typeValue = 'Buyer' : sellerValue != undefined ? typeValue = 'Seller' : null;

        // if (buyerValue != undefined) {
        //     var typeValue = 'Buyer'
        // }
        // if (sellerValue != undefined) {
        //     var typeValue = 'Seller'
        // }

    // --------------

        const emailValue = document.querySelector('email').value;
        const phoneValue = document.querySelector('.phone').value;

        const markets = document.querySelector('.market');
        const marketValue = markets.options[markets.selectedIndex].value;

        const formValue = {
            lead: [nameValue, dateValue, typeValue, emailValue, phoneValue, marketValue]
        }

        console.log(formValue)
        
    }

    return (
        <div className={form} style={divStyle}>
            <div style={innerDivStyle}>
                <div style={headerStyle}>
                    <h1 style={titleStyle}>
                        {title}
                    </h1>
                </div>
                <form onSubmit={onSubmit} style={inputDivStyle}>
                    {/* Name */}
                    <h1 style={inputHeaderStyle}>
                        {name} 
                    </h1>
                    <input type={inputType.text} placeholder={placeholder.name} className={inputClass.name} style={inputStyle} />
                    {/* Date */}
                    <h1 style={inputHeaderStyle}> 
                        {date} 
                    </h1>
                    <input type={inputType.date} className={inputClass.date} style={inputStyle} />
                    {/* Type */}
                    <h1 className={inputClass.type} style={inputHeaderStyle}> 
                        {type} 
                    </h1>
                    <div style={radioStyle}>
                        <div style={radioButtonStyle}>
                            <input className={radioClass.buyer} value={radioClass.buyer} type={inputType.radio} name={radioName.type} />
                            <label style={labelStyle}>
                                {label.buyer}
                            </label>
                        </div>
                        <div style={radioButtonStyle}>
                            <input className={radioClass.seller} value={radioClass.seller} type={inputType.radio} name={radioName.type} />
                            <label style={labelStyle}>
                                {label.seller}
                            </label>
                        </div>
                    </div>
                    {/* Email */}
                    <h1 style={inputHeaderStyle}> 
                        {email} 
                    </h1>
                    <input type={inputType.email} placeholder={placeholder.email} className={inputClass.email} style={inputStyle} />
                    {/* Phone Number */}
                    <h1 style={inputHeaderStyle}> 
                        {phone} 
                    </h1>
                    <input className={inputClass.phone} placeholder={placeholder.phone} onKeyDown={onKey} style={inputStyle} />
                    {/* Market */}
                    <h1 style={inputHeaderStyle}> 
                        {market} 
                    </h1>
                    <select placeholder={placeholder.market} className={inputClass.market} style={inputStyle}>
                        <option value={markets.orlando}>
                            {markets.orlando}
                        </option>
                        <option value={markets.tampa}>
                            {markets.tampa}
                        </option>
                        <option value={markets.newark}>
                            {markets.newark}
                        </option>
                        <option value={markets.saltLake}>
                            {markets.saltLake}
                        </option>
                        <option value={markets.charlotte}>
                            {markets.charlotte}
                        </option>
                        <option value={markets.columbus}>
                            {markets.columbus}
                        </option>
                        <option value={markets.kansasCity}>
                            {markets.kansasCity}
                        </option>
                        <option value={markets.stLouis}>
                            {markets.stLouis}
                        </option>
                        <option value={markets.austin}>
                            {markets.austin}
                        </option>
                        <option value={markets.atlanta}>
                            {markets.atlanta}
                        </option>
                        <option value={markets.sanAntonio}>
                            {markets.sanAntonio}
                        </option>
                    </select>
                    {/* Submit Button */}
                    <button className={inputClass.submit} onMouseOver={submitHover} onMouseOut={submitLeave} onSubmit={onSubmit} style={submitStyle}>
                        {submit}
                    </button>
                </form>
            </div>
            <FaTimes onMouseOver={mouseOver} onMouseOut={mouseLeave} onMouseDown={mouseClick} style={buttonStyle}/>
        </div>
    )
}


Form.defaultProps = {
    form: 'form',
    title: 'Create New Lead',
    name: 'Name:',
    date: 'Date:',
    type: 'Lead Type:',
    email: 'Email:',
    phone: 'Phone Number:',
    market: 'Market:',
    submit: 'Submit',
    markets: {
        orlando: 'Orlando, FL',
        memphis: 'Memphis, TN',
        tampa: 'Tampa, FL',
        newark: 'Newark, NJ',
        saltLake: 'Salt Lake City, UT',
        charlotte: 'Charlotte, NC',
        columbus: 'Columbus, OH',
        kansasCity: 'Kansas City, MO',
        stLouis: 'St. Louis, MO',
        austin: 'Austin, TX',
        atlanta: 'Atlanta, GA',
        sanAntonio: 'San Antonio, TX'
    },
    placeholder: {
        name: 'Type in full name',
        email: 'example@test.com',
        market: 'Select Market',
        phone: '(123)-456-3579'
    },
    inputType: {
        text: 'text',
        radio: 'radio',
        email: 'email',
        date: 'date',
        select: 'select'
    },
    label: {
        buyer: 'Buyer',
        seller: 'Seller'
    },
    inputClass: {
        name: 'name',
        date: 'date',
        type: 'type',
        email: 'email',
        phone: 'phone',
        market: 'market',
        submit: 'submitButton'
    },
    radioClass: {
        buyer: 'buyer',
        seller: 'seller'
    },
    radioName: {
        type: 'type'
    },
    marketClass: {
        orlando: 'orlando',
        memphis: 'memphis',
        tampa: 'tampa',
        newark: 'newark',
        saltLake: 'saltLake',
        charlotte: 'charlotte',
        columbus: 'columbus',
        kansasCity: 'kansasCity',
        stLouis: 'stLouis',
        austin: 'austin',
        atlanta: 'atlanta',
        sanAntonio: 'sanAntonio'
    }
}

Form.propTypes = {
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseDown: PropTypes.func,
    form: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    market: PropTypes.string,
    submit: PropTypes.string,
}



// ---Styling

const divStyle = {
    position: 'absolute',
    width: '60em',
    height: '70em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000b3',
    borderRadius: '20px',
    top: '6em',
    left: '25%'
}

const innerDivStyle = {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffeb',
    borderRadius: '20px',
    top: '6em',
    left: '16em',
    overflowY: 'auto'
}

const headerStyle = {
    display: 'flex',
    width: '90%',
    height: '5em',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '5em'
}

const buttonStyle = {
    position: 'absolute',
    left: '.3em',
    top: '.4em',
    color: 'white',
    fontSize: '2em',
    cursor: 'pointer'
}

const titleStyle = {
    fontFamily: 'monospace',
    borderBottom: '1px solid black',
    fontSize: '2.5em'
}

const inputDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowY: 'auto',
    width: '80%',
    height: '90%',
    marginTop: '15%'
}

const inputHeaderStyle = {
    color: 'black',
    fontFamily: 'monospace',
    marginTop: '5%',
    fontSize: '1.5em'
}

const inputStyle = {
    width: '80%',
    backgroundColor: '#61c2e757',
    marginBottom: '5%',
    height: '1.5em'
}

const labelStyle = {
    fontFamily: 'monospace',
    fontSize: '1.3em',
    marginLeft: '.5em'
}


// Style Div for Radio Input
const radioStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    height: '4em',
    justifyContent: 'center',
    backgroundColor: '#1cb2f336',
    border: '1px solid black',
    boxShadow: '#0000006b 0px 0px 0px 1px'
}

const radioButtonStyle = {
    display: 'flex',
    width: '50%',
    justifyContent: 'center'
}

// Submit Button

const submitStyle = {
    marginTop: '1em',
    width: '10em',
    height: '4em',
    backgroundColor: '#32fafffc'
}

export default Form
