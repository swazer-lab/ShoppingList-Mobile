/* @flow */

import * as React from 'react';

import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persiststore } from './config/store';

import { AppNavigator } from './config/routes';

type Props = {}

class App extends React.Component<Props> {
	onStoreDidRehydrate = () => {

	};

	render() {
		return (
			<AppNavigator />
		);
	}
}

const stateToProps = (state) => {
	return {};
};

export default () => {
	const AppWithNavigation = connect(stateToProps)(App);

	return (
		<Provider store={store}>
			<AppWithNavigation />
		</Provider>
	);
};
