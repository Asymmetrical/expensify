let visibility = false;

const render = () => {
    const visTemplate = (
        <div>
            <h1>Visibility</h1>
            <button onClick={onShowDetails}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                <p>My details to be shown</p>
                </div>
            )}
            
        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(visTemplate, appRoot);
};


const onShowDetails = () => {
    visibility = !visibility;
    render();
}


render();


