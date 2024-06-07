import React, { useState } from 'react';
import './CFstyles.css';

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [education, setEducation] = useState('');
    const [interestedArea, setInterestedArea] = useState('');
    const [preferredArea, setPreferredArea] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [motivation, setMotivation] = useState('');
    const [source, setSource] = useState('');
    const [referral, setReferral] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create an object with form data
        const formData = {
            fullName,
            email,
            contactNumber,
            dateOfBirth,
            gender,
            education,
            interestedArea,
            preferredArea,
            preferredTime,
            motivation,
            source,
            referral,
            selectedPackage,
            acceptTerms
        };

        try {
            // Submit form data to backend API
            const response = await fetch('https://cchmembership-248c9-default-rtdb.firebaseio.com/UserData.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // Handle response
            if (response.ok) {
                // Form data successfully submitted
                console.log('Form data submitted successfully!');
                // Reset form fields
                resetForm();
            } else {
                // Error handling
                console.error('Form data submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const resetForm = () => {
        // Reset all form fields to initial state
        setFullName('');
        setEmail('');
        setContactNumber('');
        setDateOfBirth('');
        setGender('');
        setEducation('');
        setInterestedArea('');
        setPreferredArea('');
        setPreferredTime('');
        setMotivation('');
        setSource('');
        setReferral('');
        setSelectedPackage('');
        setAcceptTerms(false);
    };

    return (
        <div className="form-container">
            <h1>Membership Form</h1>
            <p>Fill out the form below to become a member.</p>
            <form className="fc" onSubmit={handleSubmit}>
                {/* Form inputs */}
                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="tel" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="text" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
                <input type="text" placeholder="Interested Area" value={interestedArea} onChange={(e) => setInterestedArea(e.target.value)} required />
                <input type="text" placeholder="Preferred Area" value={preferredArea} onChange={(e) => setPreferredArea(e.target.value)} required />
                <input type="text" placeholder="Preferred Time" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} required />
                
                <textarea placeholder="What motivated you to join Community Connect Hub?" value={motivation} onChange={(e) => setMotivation(e.target.value)}></textarea>
                <input type="text" placeholder="How did you come to know about CCH?" value={source} onChange={(e) => setSource(e.target.value)} />
                <input type="text" placeholder="Would you like to refer others to be associated with CCH?" value={referral} onChange={(e) => setReferral(e.target.value)} />
 
                {/*
                <h3 className="h">Choose Membership Package:</h3>
                <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
                    <option value="">Select Package</option>
                    <option value="1year">1 Year - Rs. 1000</option>
                    <option value="2years">2 Years - Rs. 1800</option>
                    <option value="3years">3 Years - Rs. 2500</option>
                </select>
    */}
                <div>
                    <input type="checkbox" id="acceptTerms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
                    <label htmlFor="acceptTerms">Accept Terms and Conditions</label>
                </div> 
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ContactForm;
