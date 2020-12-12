import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTruckInfo, addFavorites, submitRating, getFavorites } from '../redux/actions';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const TruckCardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 1% 0;
    padding: 1% 0;
    div {
        width: 50%;
        img {
            width: 30%;
        }
    }
    h2 {
        margin: 1% 0;
    }
    &:not(:last-child) {
        border-bottom: 2px dashed #FFBFB3
    };
`;

const RatingContainer = styled.div`
    padding: 0;
    margin: 0;
    h3 {
       margin: 1% 0;
    }
    select {
        margin: 1% 0;
    }
`;




const DinerTruckCard = (props) => {   
    const [rating, setRating] = useState('')

    useEffect(() => {      
        props.getFavorites(props.dinerId);
    }, [props.addSuccess])

    //Add Favorite
    const handleAdd = (e) => {
        e.preventDefault();
        const truckId = {
            truckId: props.id,
        };
        props.addFavorites(props.dinerId, truckId);
    }

    //handle Rating
    const handleRating = (e) => {
        setRating(e.target.value)
    }

    //Submit Rating
    const submit = (e) => {
        e.preventDefault();
        const ratingObj = {
            customerRating: rating
        }
        props.submitRating(props.id, props.dinerId, ratingObj);
    }

    return(
        <TruckCardContainer>
            <div className="image" id={props.id}>
                <h2>{props.name}</h2>
                <img src={props.imageOfTruck} alt={props.name} />
            </div>
            <div>
                <p>Cuisine: {props.cuisineType}</p>
                <p>Location: {props.currentLocation}</p>
                <p>Rating: {props.customerRatingsAvg}</p>
                <p>Menu: {props.menu.map(item => <div key={item.itemName}>{`$${item.itemPrice}`} {item.itemName}</div> )}</p>
            </div>
            <RatingContainer>
                <h3>Rate This Truck</h3>
                <select name="rating" onChange={handleRating}>
                    <option>Please select a rating...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={submit}>Submit Rating</button>
            </RatingContainer>
            <button onClick={handleAdd}>Add To Favorites</button>            
        </TruckCardContainer>       
    );
};

export default connect(mapStateToProps, { getTruckInfo, addFavorites, getFavorites, submitRating} )(DinerTruckCard);