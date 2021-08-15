import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Launcher from './components/launcher';
import FeedContainer from './containers/feed';
import { persist, store } from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<Launcher />} persistor={persist}>
                    <FeedContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
