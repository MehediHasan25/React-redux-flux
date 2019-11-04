import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';
//container
import InputForm from './components/container/FormContainer';
import Show from './components/container/ShowContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={InputForm} />
            <Route exact path="/posts" component={Show} />
            {/* <InputForm />
        <hr />
        <Show /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
