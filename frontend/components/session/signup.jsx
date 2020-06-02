import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      birth_date: '',
      gender: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewUser(this.state)
    .then(() => this.props.history.push('/'))
  }
  
  render() {
    return (
      <div>
        <h1>Sign up for free to start listening.</h1>
        <form onSubmit={this.handleSubmit}>
        
          <label>What's your email?
            <input 
              type="text" 
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>

          <label>Create a password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <label>What should we call you?
            <input 
              type="text" 
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          
          <label>What's your date of birth?
            <input type="date"/>
          </label>

          <label>What's your gender?
            <input type="radio" value="Male"/>
            <input type="radio" value="Female"/>
            <input type="radio" value="Non-binary"/>
          </label>
          <button onClick={this.handleSubmit}>SIGN UP</button>
          
        </form>
      </div>
    )
  }
}

export default Signup;