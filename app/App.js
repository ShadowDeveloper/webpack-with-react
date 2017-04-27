import React from 'react';
import ReactDOM from 'react-dom';

// Components
import LoginForm from './components/loginForm';


class App extends React.Component{
  render(){
    return <LoginForm color="#ccc"/>
  }
}

/*let App = React.createClass({ //JSX
  render: function(){
    return(
      <div className="MainComponent">
        <h1>H1</h1>
        <p>H1 Rodrigo</p>
      </div>
    )
  }
});*/

ReactDOM.render(<App />, document.getElementById('app'));