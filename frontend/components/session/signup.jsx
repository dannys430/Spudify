import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: '',
      name: '',
      birth_date: {
        month: '',
        date: '',
        year: ''
      },
      gender: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleYear(type) {
    return (e) => {
      this.setState({ birth_date: { [type]: e.target.value } })
    }
  }

  handleMonth(type) {
    return (e) => {
      this.setState({birth_date: {[type]: e.target.value}})
    }
  }

  handleDate(type) {
    return (e) => {
      this.setState({ birth_date: { [type]: e.target.value } })
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    // debugger
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      birth_date: this.state.birth_date.date + this.state.birth_date.year + this.state.birth_date.month,
      gender: this.state.gender
    }
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
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          
          <br/>

          <label>Create a password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <br />

          <label>What should we call you?
            <input 
              type="text" 
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          
          <br />

            <input type="text" value={this.state.birth_date.date} onChange={this.handleDate('date')} />
            <input type="text" value={this.state.birth_date.year} onChange={this.handleYear('year')} />

            <select value={this.state.birth_date.month} onChange={this.handleMonth('month')} >
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


            {/* this works */}
          {/* <label>What's your date of birth?
            <input 
              type="date"
              value={this.state.birth_date}
              onChange={this.handleInput('birth_date')}
            />
          </label> */}

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