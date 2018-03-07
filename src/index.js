import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
