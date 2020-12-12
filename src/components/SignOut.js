import React, { useEffect } from 'react';
import mapStateToProps from '../redux/state';
import { signOut } from '../redux/actions/'
import { connect } from 'react-redux'; 
import styled from 'styled-components';


const SignOutContainer = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    padding: 4% 2%;
    height: 100vh;
    font-size: 3rem;
    text-align: center;
`;

const SignOut = (props) => {
    useEffect(() => {
        props.signOut();
    }, []);

    return(
        <SignOutContainer>
            You are now logged out!
        </SignOutContainer>
    )
};

export default connect(mapStateToProps, { signOut })(SignOut);