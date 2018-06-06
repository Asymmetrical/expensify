import React from 'react';

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision app by Johan NOT NOW'
};

export default Header;