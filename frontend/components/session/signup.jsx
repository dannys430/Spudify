import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: '',
      name: '',
      bday_month: '',
      bday_year: '',
      bday_date: '',
      gender: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  // nesting state does a shallow merge

  handleSubmit(e) {
    e.preventDefault()
    debugger
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      birth_date: this.state.bday_year + '/' + this.state.bday_month + '/' + this.state.bday_date,
      gender: this.state.gender
    }
    debugger
    this.props.createNewUser(newUser)
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
              placeholder="Enter your email."
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          
          <br/>

          <label>Create a password
            <input 
              type="password"
              placeholder="Create a password."
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <br />

          <label>What should we call you?
            <input 
              type="text" 
              placeholder="Enter a profile name."
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          
          <br />

          <label>What's your date of birth?
            <select value={this.state.bday_month} onChange={this.handleInput('bday_month')} >
                <option value='' disabled >Month</option>
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

            <input type="text" placeholder="DD" maxlength="2" value={this.state.bday_date} onChange={this.handleInput('bday_date')} />
            <input type="text" placeholder="YYYY" maxlength="4" value={this.state.bday_year} onChange={this.handleInput('bday_year')} />
          </label>

          <br />

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

          <br />

          <button onClick={this.handleSubmit}>SIGN UP</button>
          
        </form>
      </div>
    )
  }
}

export default Signup;