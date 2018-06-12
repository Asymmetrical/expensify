import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>This is from my dahsboard</div>
);
const AddExpensePage = () => (
    <div>This is from my AddExpensePage</div>
);
const EditExpensePage = () => (
    <div>This is from my EditExpensePage</div>
);
const HelpPage = () => {
        return <div>
        This is from my HelpPage
        </div>;
};

const NotFoundPage = () => (
    <div>404 page! - <Link to="/">Go to home</Link>
    
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>  
    </header>
);

const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit" component={EditExpensePage} exact={true}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFoundPage} exact={true}/>
    </Switch>  
    </div>
    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));