class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Awesome react thingie';
        const options = ['thing one', 'thing two', 'thing three', 'thing four'];
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
                
            </div>
        );
    }  
}
class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            </div>
        );
    }  
}
// self containing class which includes methods
class Action extends React.Component {
    handlePick() {
        alert("handle picked");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }  
}

class Options extends React.Component {
    // to avoid binding issues
    // wherever we call this it ensures it is binded correctly
    constructor(props) {
        super(props);
        this.handleRemoveall = this.handleRemoveall.bind(this);
    }
    handleRemoveall() {
        // below crashes
        //console.log(this.props.options);
        alert("Removing all");
    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveall}>Remove all</button>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            </div>
        );
    } 
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    } 
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            // app.options.push(option);
            // e.target.elements.option.value = '';
            alert(option);
        }  
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            </div>
        );
    } 
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));