
console.log('App.js is running');

// JSX - Javascript XML

const app = {
    title: 'Awesome stuff',
    subTitle: 'Your subtitle',
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



const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

const reRenderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>One</li>
                <li>Two</li>
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
