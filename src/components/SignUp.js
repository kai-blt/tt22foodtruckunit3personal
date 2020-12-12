import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpDiner, signUpOperator } from '../redux/actions';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const SignUpContainer = styled.nav`
    padding: 4%;

    .checkboxes {
        display: flex;
        justify-content: flex-start;
        
        div {
            margin-right: 6%;
            margin-bottom: 2%;    
        }
    }
`;

const initialSignupInfo = {
    username: '',
    email: '',
    password: '',
    role: '',
    location: null
};


const SignUp = (props) => {
    //state
    const [signupInfo, setSignupInfo] = useState(initialSignupInfo);

    //history hook
    const history = useHistory();

    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Create a mock location number for the account
        const mockLocation =  Math.round(Math.random() * 5) + 1;
        
        const signUpObj = {
            username: signupInfo.username,
            email: signupInfo.email,
            password: signupInfo.password,
            role: signupInfo.role,
            location: mockLocation,
        }

        //debug
        console.log(signUpObj)

        //check if signup is diner or operator, then do appropriate signup
        if (signupInfo.role === 'diner') {
            props.signUpDiner(signUpObj)
        } else {
            props.signUpOperator(signUpObj)
        }

        //move to sign in page on sign up success
        history.push('/signin')
    };

    const handleChange = (e) => {
       setSignupInfo({
           ...signupInfo,
           [e.target.name]: e.target.value,
       });
    };

    return(
        <SignUpContainer>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username&nbsp;
                    <input
                        type="text"
                        name="username"
                        value={signupInfo.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        type="email"
                        name="email"
                        value={signupInfo.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        type="password"
                        name="password"
                        value={signupInfo.password}
                        onChange={handleChange}
                    />
                </label>
                <div className="checkboxes">
                    <div>
                    <label>Diner
                        <input
                            type="radio"
                            name="role"
                            value="diner"
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    <div>
                        <label>Operator
                            <input
                                type="radio"
                                name="role"
                                value="operator"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>
                <button>Sign Up</button>
            </form>
            <div>{String(props.error)}</div>
        </SignUpContainer>
    )
}

export default connect(mapStateToProps, { signUpDiner, signUpOperator })(SignUp);