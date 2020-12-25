import React, { Component } from 'react';
import "./style.css"
import { useDispatch } from 'react-redux'
import { action } from "../../../Actions/action"

function Add(props) {
    const dispatch = useDispatch()
    const [name, setName] = React.useState('');
    const [flavor, setFlavor] = React.useState('grapefruit');

    const handleChange = (event) => {
        event.target.name == "name" ? setName(event.target.value) : setFlavor(event.target.value);
    }
    const handleSubmit = () => {
        const detail = {
            name: name,
            flavor: flavor
        };
        // dispatch({ type: "ADD_ITEM", payload: detail });
        dispatch(action.getFlavor(detail));
        setName('');
        setFlavor('grapefruit');
        alert("Added successfully");
    }
    const onView = () => {
        props.history.push("/view");
    }
    return (
        <>
            <div className="form-container">
                <div className="form-custom">
                    <label>
                        Your Name:</label>
                    <input value={name} name="name" onChange={handleChange} />
                    <label>
                        Pick your favorite flavor:</label>
                    <select value={flavor} name="flavor" onChange={handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                    <input type="submit" value="Submit" onClick={handleSubmit} />
                </div>
                <button onClick={onView}>View Page</button>
            </div>
        </>
    )
}

export default Add;

