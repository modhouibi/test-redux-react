import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
//import {setStack} from './actions';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';

import './index.css';
const store=createStore(reducers);
store.subscribe(()=>console.log('Store : ', store.getState()));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
	<Switch>
		<Route exact path='/' component={App} />
		<Route path='/stack' component={Stack} />
	</Switch>
</BrowserRouter>
</Provider>
,document.getElementById('root')
)