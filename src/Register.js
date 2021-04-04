import { useState } from 'react';
import validator from 'validator';
import DoneIcon from '@material-ui/icons/Done';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import './Register.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showError, setShowError] = useState(false)
    let history = useHistory();
    var doneEmailClassName = 'IconClass'
    var doneNameClassName = 'IconClass'
    var doneConfirmPasswordClassName = 'IconClass'
    var donePasswordClassName = 'IconClass'
    let NameSuccessStyle,EmailSuccessStyle,PasswordSuccessStyle,ConfirmPasswordSuccessStyle = {}
    let isNameValidated, isEmailValidated, isPasswordValidated, isConfirmPasswordValidated;
    const handleRegister = () => {
        if (isNameValidated && isEmailValidated && isPasswordValidated && isConfirmPasswordValidated)
        {
            const data = {
                Name: name,
                Email: email,
                Password: password,
                ConfirmPassword: confirmPassword
            }
            axios.post('https://e-com-app-9887.herokuapp.com/register', data)
                .then(res => {
                if (res.data === true)
                {
                    history.push('/');
                }
            })
        }
        else 
        {
            setShowError(true)
        }
    }

    const handleLogin = () => {
        //redirect to login page
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
        isNameValidated = true
    }
    else
    {
        isNameValidated = false;
    }
    if (validator.isEmail(email))
    {
        EmailSuccessStyle = { border: '1px solid #80ff00' }
        doneEmailClassName = 'SuccessIconClass'
        isEmailValidated = true
    }
    else
    {
        isEmailValidated = false    
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
            isPasswordValidated = true
        }
        else
        {
            isPasswordValidated = false    
        }
    }
    else 
    {
        isPasswordValidated = false    
    }

    if (confirmPassword === password && confirmPassword.length > 6)
    {
        ConfirmPasswordSuccessStyle = {
            border: '1px solid #80ff00' 
        }
        doneConfirmPasswordClassName = 'SuccessIconClass'
        isConfirmPasswordValidated = true
    }
    else
    {
        isConfirmPasswordValidated = false    
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
            
            {showError===true && isNameValidated===false ? <p className='ErrorMessage'>Length of name must be greater than 1</p> : '' }
            <div>
                <input style={EmailSuccessStyle} className='InputField' type='text' placeholder='Email Id' value={ email} onChange={handleEmailChange} />
                <DoneIcon className={doneEmailClassName}/>
            </div>
            {showError && isEmailValidated===false ? <p className='ErrorMessage'>Incorrect Email ID</p> : ''}
            <div>
                <input style={PasswordSuccessStyle} className='InputField' type='text' placeholder='Password' value={password} onChange={handlePasswordChange} />
                <DoneIcon className={donePasswordClassName}/>
            </div>
            {showError && isPasswordValidated===false ? <p className='ErrorMessage'>Password Should Contain Atleat 1 capital word, 1 unique letter and one number and  size should be greater than 6</p> : ''}
            <div>
                <input style={ConfirmPasswordSuccessStyle} className='InputField' type='text' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                <DoneIcon className={doneConfirmPasswordClassName}/>
            </div>
            {showError && isConfirmPasswordValidated===false ? <p className='ErrorMessage'>Passwords doesn't match</p> : '' }
            <div className='buttons'>
                <button className='RegisterButton' onClick={handleRegister}>Register</button>
                <button className='LoginButton' onClick={handleLogin}>Login</button>
            </div>
            
        </div>
    )
}

export default Register;