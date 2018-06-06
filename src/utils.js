console.log('Utils js is runinng');

const someFunction = () => {
    return 'johoo';
};

const defaultMethod = () => {
    return 'My Default method';
};

// named export
export const someOtherFunction = () => {
    return 'oh yeah';
};
// two exports - default exports - named exports

// named export + default export
export {
    someFunction, defaultMethod as default
};

// OR one time export - needs to come AFTER the method intended as the Default method
//export default defaultMethod;

// default = one default export