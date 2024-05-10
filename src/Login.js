import {memo} from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import './Login.css'

function Login() {
    const signIn = () => {
        auth.signInWithRedirect(provider).catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    
                   src = "https://imgur.com/YI0CVBI.png"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to Chat-Application</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default memo(Login)