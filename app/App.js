import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  render(){
    return <h1>Hello world</h1> 
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