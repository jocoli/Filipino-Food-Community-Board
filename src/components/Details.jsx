import React from "react";




const Details = (props) => {
    const handleClick = () => {
        window.location.href = props.link;
    }
    return (
        <div className={'Details ' + props.color}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h6>{props.description}</h6>
            <button onClick={handleClick}>{props.a_button}</button>    
        </div>
    )
}

export default Details;