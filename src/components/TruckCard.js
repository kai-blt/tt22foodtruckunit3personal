import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTruck, getTruckInfo, updateTruck, addMenuItem } from '../redux/actions';
import mapStateToProps from '../redux/state';
import styled from 'styled-components';

const TruckCardContainer = styled.div`
    margin: 1% 0;
    padding: 1% 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    padding: 2%;
    div {
        width: 100%;
        img {
            width: 40%;
        }
    }
    
    h2 {
        margin: 1% 0;
    }
    &:not(:last-child) {
        border-bottom: 2px dashed #FFBFB3
    };
`;


const initialFormValues = {
    name: '',
    cuisineType: '',
    currentLocation: '',
}

const initialFormMenuValues = {
    itemName: '',
    itemDescription: '',
    itemPrice: '',
};


const TruckCard = (props) => {   
    const [formValues, setFormValues] = useState(false);    
    const [menuValues, setMenuValues] = useState(initialFormMenuValues);
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingItem, setIsAddingItem] = useState(false);

    useEffect(() => {
        props.getTruckInfo();
    }, [props.addSuccess]);
    

    //change handler
    const handleChange = (e) => {
       setFormValues({
           ...formValues,
           [e.target.name]: e.target.value
       })
    }

     //edit state handler
     const handleEdit = () => {       
        setFormValues({
            ...formValues,
            name: props.name,
            cuisineType: props.cuisineType,
            currentLocation: props.currentLocation,            
        })
        setIsEditing(!isEditing);
    }

    const handleMenuChange = (e) => {
        setMenuValues({
            ...menuValues,
            [e.target.name]: e.target.value
        })
    };

    //menu item add handler
    const handleAdd = () => {   
        setIsAddingItem(!isAddingItem);
    }

    //menu item add handler
    const handleMenuSubmit = (e) => {   
        e.preventDefault();
        props.addMenuItem(props.id, menuValues);
        setMenuValues(initialFormMenuValues);
        setIsAddingItem(!isAddingItem);
    }

   

    //submit handler
    const handleUpdate = (e) => {
        e.preventDefault();      
        props.updateTruck(props.id, formValues);
        setIsEditing(!isEditing);
    }


    //delete handler
    const handleDelete = (e) => {
        e.preventDefault();    
        props.deleteTruck(props.id);
    }

    return(
        <TruckCardContainer>
           
            
            {isEditing 
                ? ( <form>
                        <label>Name
                            <input
                                type="text"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Cuisine Type
                            <input
                                type="text"
                                name="cuisineType"
                                value={formValues.cuisineType}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Current Location
                            <input
                                type="text"
                                name="currentLocation"
                                value={formValues.currentLocation}
                                onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleEdit}>Cancel</button>
                    </form>
                    )
                : 
                    (
                        isAddingItem
                        ? (
                            <div>
                                <form>
                                <h2>Add menu items</h2>                    
                                    <label>Name
                                        <input
                                            type="text"
                                            name="itemName"
                                            value={menuValues.itemName}
                                            onChange={handleMenuChange}
                                        />
                                    </label>
                                    <label>Description
                                        <input
                                            type="text"
                                            name="itemDescription"
                                            value={menuValues.itemDescription}
                                            onChange={handleMenuChange}
                                        />
                                    </label>
                                    <label>Price
                                        <input
                                            type="text"
                                            name="itemPrice"
                                            value={menuValues.itemPrice}
                                            onChange={handleMenuChange}
                                        />
                                    </label>
                                    <button onClick={handleMenuSubmit}>Add Menu Item</button>
                                    <button onClick={handleAdd}>Cancel</button>
                                </form>
                            </div>
                        )
                        : (
                            <>
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
                            <button onClick={handleAdd}>Add Menu Items</button>            
                            <button onClick={handleEdit}>Edit Truck Details</button> 
                            <button onClick={handleDelete}>Delete Truck</button>
                            </>
                        )
                    )
            }

            
        </TruckCardContainer>       
    );
};

export default connect(mapStateToProps, { deleteTruck, getTruckInfo, updateTruck, addMenuItem } )(TruckCard);