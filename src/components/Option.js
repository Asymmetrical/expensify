import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            
            <button 
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOptionSingular(props.optionText);
                }}
                >
                Remove
            </button>
        </div>
    );
};

// since this is not a class we need to put it down here
export default Option;