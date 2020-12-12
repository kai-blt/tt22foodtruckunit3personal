import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.nav`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: space-between;
    
    //Main hero section attributes
    .hero {
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        font-weight: 700;
        padding: 6%;
        text-shadow: 2px 1px 6px #000;
        line-height: 4.5rem;
        text-align: center;      
        width: 100%;
        height: 100%;
        color: #fff;        

        p{
            padding: 4%;
        }
    }

    /* Base info panel settings */
    .info1, .info2 {
        color: #444;
        text-shadow: none;
        font-size: 1.5rem;
        line-height: 3rem;
        padding: 0 4%;
    }

    
    .info2 {
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        p {
            height: 100%;
        }
    }

    .info3 {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        padding: 0;
        img {
            width: 20%;
            border-radius: 10px;
            box-shadow: inset 5px 5px 20px #000;
        }
    }

    .yellow {        
        background-color: #F9DB79;
    }

    .gray {
        color: #fff;
        background-color: #555;
    }

    .blue {
        background-color: #B5E8D5;
    }

    //images
    .img1 {
        background: url('./tacos.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 5px 10px 40px #000;
    }

    .img2 {
        background: url('./map.png');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 5px 10px 40px #000;
    }

    @media (min-width: 300px) {
        .info3 {
            img {
                width: 100%;
                margin: 4% 0;
                border-radius: 0;
            }
        }
    }

    @media (min-width: 700px) {
        .hero {
            font-size: 3rem;
            height: 30vh;
        }
        .info2 {
            p {
                width: 50%;
            }
        }
        .info3 {
            width: 10%auto;
            img {
                width: 20%;
                margin: 1% 0;
            }
        }
    }

    @media (min-width: 1000px) {
        .hero {
            font-size: 3.5rem;
            line-height: 4rem;
            height: 60vh;
            p {
                font-size: 10rem;
            }
        }
        .info1, .info2 {
            p {
                font-size: 4rem;
                width: 50%;
            }
        }
        .info3 {
            width: 10%auto;
            img {
                width: 20%;
                margin: 1% 0;
            }
        }
    }
`;

const Home = () => {
    return(
        <HomeContainer>
            <section className="hero img1">
                <p>FOOD WHEN YOU WANT IT</p>
            </section>
            <section className="hero info1 yellow">
                <p>
                    Sign up and find the food that you're craving right now!
                    We love to help pair food truck owners and food connosiours together
                    in one easy to use experience. 
                </p>
            </section>
            <section className="hero img2">
                <p>SEEK OUT YOUR FAVORITE EATS</p> 
            </section>            
            <section className="hero info3">                               
                <img src='./food1.jpg' alt='' />
                <img src='./food2.jpg' alt='' />
                <img src='./food3.jpg' alt='' />
                <img src='./tacos.jpg' alt='' />                
            </section>            
            <section className="hero info2">
                <p className="gray">
                    FoodTruck TrackR was designed to make finding and eating at a food truck fast, easy and fun.
                    Quickly see all of our Operator partners' nearby food trucks that currently open, their menu and rating!
                </p>
                <p className="blue">
                    Truck operators! List your business and pave the way for your food truck. Bring in more customers and street cred for your
                    business today.
                </p>
            </section>
        </HomeContainer>
    )
}

export default Home;