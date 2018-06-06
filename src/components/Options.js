import React from 'react';
import Option from './Option';

const Options = (props) => {
    // to avoid binding issues
    // wherever we call this it ensures it is binded correctly
        return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Add option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                ))
            }
            </div>
        );
};

export default Options;