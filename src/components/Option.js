import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
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