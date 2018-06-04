class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        // this function gets passed as a props to the relevant component
        // so it can be used as a global method
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
//        this.handleReset = this.handleReset.bind(this);
        this.state = {
            // test options: ['thing one', 'thing two', 'thing three', 'thing four']
            options: props.options
        };
    }
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

    handleDeleteOptions() {
        this.setState(() => ({ options:[] }));
    }

    handleDeleteOptionSingular(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    // handle this globally but only display on component level
    // by passing it down to component
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add an option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({
            options: prevState.options.concat(option) 
        }));   
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

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision app by Johan'
};


const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
}


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
}

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
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        // if error call global function
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error // shorthand is just error not error: error
            };
        });

        if (!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            </div>
        );
    } 
}

// stateless component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));