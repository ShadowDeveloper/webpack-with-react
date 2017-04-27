import React from 'react';


class LoginForm extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>ADM 360</h1>
        <form style={{backgroundColor: this.props.color}}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nome Loja" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nome de Usuario" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Senha" />
          </div>
          <button type="submit" className="btn btn-default" value="post">Entrar</button>
        </form>
      </div>
    )
  }
}



export default LoginForm;
