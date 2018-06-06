import React from 'react';

// import components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }));
    };

    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick= () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    // handle this globally but only display on component level
    // by passing it down to component
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add an option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({
            options: prevState.options.concat(option) 
        }));   
    };
   
    // lifecycle methods
    componentDidMount() {
        try {
            const jsonToLoad = localStorage.getItem('options');
            const options = JSON.parse(jsonToLoad);
            // NEEDS TO BE NAMED AS THE THING STATED IN THIS.STATE
            if (options) {
                this.setState(() => ({options}));
            } 
        } catch (e) {
            // do nothing
            // we got a good default in defaults for the class component - defautl props
        }
        
        console.log('fetching data');
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const jsonToSave = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonToSave);
            console.log('saving data');
        }
        
    }
    componentWillUnmount() {
        console.log('component will Unmount');
    }

    

    render() {
        const subTitle = 'Awesome react thingie';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
                
            </div>
        );
    }  
}

IndecisionApp.defaultProps = {
    options: []
};
