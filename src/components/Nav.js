import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
    background-color: #B5E8D5;
    padding: 4%;

    @media (min-width: 300px) {
       h1 {
           font-size: 4rem;
       }       
       h3 {
           font-size: 1.5rem;
       }
    }


    @media (min-width: 700px) {
       h1 {
           font-size: 6rem;
       }
       h3 {
           font-size: 3.5rem;
       }
    }

    @media (min-width: 1000px) {
       h1 {
           font-size: 10rem;
       }

       h3 {
           font-size: 5rem;
       }
    }
`;

const StyledLink = styled(Link)`
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 2px 2px 3px #333;

    @media (min-width: 300px) {
      font-size: 2.5rem;
    }


    @media (min-width: 700px) {
        font-size: 3rem;
    }

    @media (min-width: 1000px) {
        font-size: 4rem;
    }
`;


const Nav = (props) => {
    return(
        <NavContainer>
            <div>
                <h1>Food Truck TrackR</h1>
                <h3>Food truck delights at your fingertips</h3>
            </div>
            <div>
                <StyledLink to='/'>Home</StyledLink>
            </div>

            {/*if user is logged in show signout button*/}
            {props.isLoggedIn 
                ?
                (<>
                    <div>
                        <StyledLink to='/signout'>Sign Out</StyledLink>
                    </div>
                    <div>
                        {`You\'re currently signed in as ${props.username}`}
                    </div>
                </>)
                : 
                (<>
                    <div>
                        <StyledLink to='/signup'>Sign Up</StyledLink>
                    </div>
                    <div>
                        <StyledLink to='/signin'>Sign In</StyledLink>
                    </div>
                </>)
            }            
        </NavContainer>
    )
}

export default connect(mapStateToProps, {})(Nav);