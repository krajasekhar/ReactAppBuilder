import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootswatch/dist/solar/bootstrap.min.css';
import allreducers from './reducers';
import App from './app';

const store = createStore(
	allreducers
);
class Client extends React.Component {
	render() {
		// console.info(store.getState());
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

ReactDOM.render(<Client />, document.getElementById("root"));