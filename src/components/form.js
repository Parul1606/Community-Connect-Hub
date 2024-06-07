import React, { useState } from 'react';
import './form.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import QRcode from "../assests/QRcode.jpg";

const Form = () => {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Contact: '',
        message: '',
        Country: '',
        Address1: '',
        Address2: '',
        City: '',
        State: '',
        Zip: '',
        NGO: '',
    });

    const [popupOpen, setPopupOpen] = useState(false);
    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const getdata = async (e) => {
        e.preventDefault();
        const { Name, Email, Contact, message, Country, Address1, Address2, City, State, Zip, NGO } = user;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name,
                Email,
                Contact,
                message,
                Country,
                Address1,
                Address2,
                City,
                State,
                Zip,
                NGO,
            }),
        };

        const res = await fetch('https://community-connect-hub-default-rtdb.firebaseio.com/UserData.json', options);
        console.log(res);
        if (res) {
            alert('Message Sent');
            setPopupOpen(true);
        } else {
            alert('Error Occurred');
        }
    };

    const redirectToURL = (url) => {
        window.location.href = url;
    };

    const getdatarazor = async (e) => {
        e.preventDefault();
        const { Name, Email, Contact, message, Country, Address1, Address2, City, State, Zip, NGO } = user;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name,
                Email,
                Contact,
                message,
                Country,
                Address1,
                Address2,
                City,
                State,
                Zip,
                NGO,
            }),
        };

        const res = await fetch('https://community-connect-hub-default-rtdb.firebaseio.com/UserData.json', options);
        console.log(res);
        if (res) {
            alert('Message Sent');
            window.location.href = 'https://rzp.io/l/VsI4JbJh';
        } else {
            alert('Error Occurred');
        }
    };

    return (
        <>
            <div className='form'>
                <div className='container'>
                    <form method='POST'>
                        <div className='personal-info'>
                             <h2>Personal Info</h2>
                            <input type='text' name='Name' placeholder='Your Name' value={user.Name} autoComplete='off' required onChange={data} />
                            <input type='email' name='Email' placeholder='Email-id' value={user.Email} autoComplete='off' required onChange={data} />
                            <input type='text' name='Contact' placeholder='Contact no.' value={user.Contact} autoComplete='off' required onChange={data} />
                        </div>
                        <div className='billing-details'>
                            <h2>Billing Details</h2>
                            <input type='text' name='Country' placeholder='Country' value={user.Country} autoComplete='off' required onChange={data} />
                            <input type='text' name='Address1' placeholder='Address 1' value={user.Address1} autoComplete='off' required onChange={data} />
                            <input type='text' name='Address2' placeholder='Address 2' value={user.Address2} autoComplete='off' onChange={data} />
                            <input type='text' name='City' placeholder='City' value={user.City} autoComplete='off' required onChange={data} />
                            <input type='text' name='State' placeholder='State' value={user.State} autoComplete='off' required onChange={data} />
                            <input type='text' name='Zip' placeholder='Zip' value={user.Zip} autoComplete='off' required onChange={data} />
                        </div>
                        <div className='ngos'>
                            <h2>Select NGO</h2>
                            <select name='NGO' value={user.NGO} onChange={data}>
                                <option value=''>Select NGO</option>
                                <option value='ngo1'>SHRI SAMARTH PRATISHTHAN JAMKHED</option>
                                <option value='ngo2'>SHRINATH SINGH CHARITABLE TRUST</option>
                            </select>
                        </div>
                        <div class="button-container">
                        <button onClick={getdata}>Submit</button>
                        <Popup open={popupOpen} onClose={() => setPopupOpen(false)}>
                                <div className='modal'>
                                    <div className='content'>
                                    <h2>Payment Method</h2>
                                    <h3>UPI:</h3>
                                    <img src={QRcode} alt='Popup Image' style={{ width: '250px', height: '300px' }}/>
                                    </div>
                                        <button onClick={() => setPopupOpen(false)}> Done </button>
                                    <div>
                                        <h3>Razorpay:</h3>
                                        <button onClick={() => redirectToURL('https://rzp.io/l/VsI4JbJh')}> Pay </button>
                                    </div>
                                    <div>
                                        <button onClick={() => setPopupOpen(false)}> Close </button>
                                    </div>
                                </div>
                        </Popup>   
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
