import { useState } from 'react';
import validator from 'validator';
import DoneIcon from '@material-ui/icons/Done';
import './Register.css'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    var doneEmailClassName = 'IconClass'
    var doneNameClassName = 'IconClass'
    var doneConfirmPasswordClassName = 'IconClass'
    var donePasswordClassName = 'IconClass'
    let NameSuccessStyle,EmailSuccessStyle,PasswordSuccessStyle,ConfirmPasswordSuccessStyle = {
        
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
     
    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value)
    }

    if (name.length > 1)
    {
        NameSuccessStyle = { border: '1px solid #80ff00' }
        doneNameClassName = 'SuccessIconClass'
    }
    if (validator.isEmail(email))
    {
        EmailSuccessStyle = { border: '1px solid #80ff00' }
        doneEmailClassName = 'SuccessIconClass'
    }
    if (password.length > 6)
    {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (password.match(passw))
        {
            PasswordSuccessStyle = {
                border: '1px solid #80ff00' 
            }
            donePasswordClassName = 'SuccessIconClass'
        }
    }
    if (confirmPassword === password && confirmPassword.length > 6)
    {
        ConfirmPasswordSuccessStyle = {
            border: '1px solid #80ff00' 
        }
        doneConfirmPasswordClassName = 'SuccessIconClass'
    }
    return (
        <div className='Register'>
            <div className='headerName'>
                <span >REGISTER</span>
            </div>
            <div className='helperText'>
                <span>Click on Register after filling details if you do not already have an Account Else hit Login</span>
            </div>
            <div >
                <input style={NameSuccessStyle}className='InputField' type='text' placeholder='Name' value={name} onChange={handleNameChange} />
                <DoneIcon className={doneNameClassName}/>
            </div>
            <div>
                <input style={EmailSuccessStyle} className='InputField' type='text' placeholder='Email Id' value={ email} onChange={handleEmailChange} />
                <DoneIcon className={doneEmailClassName}/>
            </div>
            <div>
                <input style={PasswordSuccessStyle} className='InputField' type='text' placeholder='Password' value={password} onChange={handlePasswordChange} />
                <DoneIcon className={donePasswordClassName}/>
            </div>
            <div>
                <input style={ConfirmPasswordSuccessStyle} className='InputField' type='text' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                <DoneIcon className={doneConfirmPasswordClassName}/>
            </div>
            <div className='buttons'>
                <button className='RegisterButton'>Register</button>
                <button className='LoginButton'>Login</button>
            </div>
            
        </div>
    )
}

export default Register;