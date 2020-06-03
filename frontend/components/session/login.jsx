import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
      .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        <h1>To continue, log in to Spudify.</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Email address" 
            value={this.state.email}
            onChange={this.handleInput('email')}
          />
          <input 
            type="text" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
          <button onClick={this.handleSubmit}>LOG IN</button>
        </form>
      </div>
    )
  }
}

export default Login;