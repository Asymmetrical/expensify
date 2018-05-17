
let count = 0;
const addOne = () => {
    console.log('addOne = ', count);
    count++;
    renderCounterApp();
};
const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
};
const resetAll = () => {
    console.log('resetAll');
   count = 0;
   renderCounterApp();
};

const templateThree = (
    <div>
        <h1>
            Count: {count}
        </h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetAll}>Reset</button>
    </div>
);

// const user = {
//     name: 'Johan',
//     age: 22,
//     location: 'Limhamn'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// };

// // three different kinds of conditional rendering
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const appRoot = document.getElementById('app');

//ReactDOM.render(templateThree, appRoot);

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();