import React,{ useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'; //used to redirect page
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false)


    //Check if user has previously logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setLoginData(foundUser);
        }
      }, []);



    const submitHandler=(e)=>{
        if(userName !== '' && password.length >= 8){
            setLoginData([...loginData,{user: userName, pass: password}]);
            // const user = { userName, password };
            // // send the username and password to the server
            // const response = await axios.post(
            //     "url",
            //     user
            // );
            // //Getting response from backend
            // if(response.data===user){
            //     // set the state of the user
            //     setLoginData(response.data)
            // }else{
            //     setLoginData('')
            // }
            
            // // store the user information in localStorage
            // localStorage.setItem('user', response.data)
            // console.log(response.data)
            setUserName('');
            setPassword('');
        }else if(userName !== '' && password=== ''){
            alert(' Please Enter password!')
        }else if(userName !== '' && password.length < 8){
            alert('Please Enter Correct password!')
        }else if(userName === '' && password !== ''){
            alert('Please Enter Username!')
        }else{
            alert('Please Enter Username and Password!')
        }
    }

    const handelInputChange =(text)=>{
        setUserName(text);
        if (text !== '') {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }
    const handelPasswordChange =(text)=>{
        setPassword(text);
        if (text !== '') {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
    }

    const responseGoogle =(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    //redirect to signup component
    let history = useHistory();
    const redirect = () => {
        history.push('/signup')
    }

    // if there's a user then redirect to page
    // if (loginData) {
    //     return (
    //         <div>
    //             {loginData.user} is loggged in
    //         </div>
    //     );
    // }
    //if there's no user, then this login form will show
    return (
            <div className="body">
                <div className="header">
                    <strong>Login</strong>
                </div>
                <div className="subheader">
                    Please enter your username and password!
                </div>
                <div id="float-label">
                    <input type="text"  value={userName}  onChange={(e)=>handelInputChange(e.target.value)} />
                    <label className={ isActive ? "Active" : ""} htmlFor="username">
                        Username
                    </label>
                </div>
                <div id="float-label">
                    <input type="password"  value={password}  minLength="8" onChange={(e)=>handelPasswordChange(e.target.value)} />
                    <label className={ isActive ? "Active" : ""} htmlFor="password">
                        Password
                    </label>
                </div>
                <div >
                    <button type="submit" className="button1" onClick={submitHandler}>Login</button>
                </div>
                <div>
                    <GoogleLogin 
                        clientId="840392859042-ms1jvga8ftcka46bjl8ungmhi0pj4iud.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className="new">
                    <p onClick={redirect}><u>create new account</u></p>
                </div>
            </div>
    )
}

export default Login

