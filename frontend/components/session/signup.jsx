import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      birthDate: '',
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
            <select name="" id="">
              <option selected disabled value>Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <input type="text" placeholder="DD"/>
            <input type="text" placeholder="YYYY"/>
            
            
          </label>








          <label>What's your gender?

            <label>Male
              <input 
                type="radio"
                id="Male"
                name="gender" 
                value='Male'
                onChange={this.handleInput('gender')}
              />
            </label>

            <label>Female
              <input 
                type="radio"
                id="Female"
                name="gender" 
                value='Female'
                onChange={this.handleInput('gender')}
              />
            </label>

            <label>Non-binary
              <input 
                type="radio"
                id="Non-binary"
                name="gender" 
                value='Non-binary'
                onChange={this.handleInput('gender')}
              />
            </label>

          </label>
          <button onClick={this.handleSubmit}>SIGN UP</button>
          
        </form>
      </div>
    )
  }
}

export default Signup;