
console.log('App.js is running');

// JSX - Javascript XML

const app = {
    title: 'Indecision APP',
    subTitle: 'An awesome react app by Johan',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRenderApp();
    }

    console.log("Form submitted " + option);
};

const onRemoveAll = () => {
    app.options = [];
    reRenderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);
// boolenas, null, undefined, object NOT going to work

const reRenderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol> 
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        
        </div>
        );
    ReactDOM.render(template, appRoot);
};

reRenderApp();
