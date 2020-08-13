import React, { Component } from 'react';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      email: 'john@doe.com',
      password: '',
      nationality: 'Pick a Nationality',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;

    // const data = {};
    // data[property] = value;
    // this.setState(data);

    this.setState({
      [property]: value,
    });
  };

  render() {
    return (
      <div className="form-group">
        <h1>John Cena Fan Club Form</h1>
        <img
          class="formavatar"
          src="https://pbs.twimg.com/profile_images/378800000189463369/80644bcb8406a55b492294d03eb24fc5_400x400.png"
          alt=""
        />

        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <label for="nationality">Nationality:</label>
        <select
          class="custom-select"
          onChange={this.handleInputChange}
          id="nationality"
          name="nationality"
          value={this.state.nationality}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
        </select>
        <p>
          {this.state.nationality === 'en'
            ? 'Hello  '
            : this.state.nationality === 'de'
            ? 'Hallo  '
            : this.state.nationality === 'fr'
            ? 'Bonjour  '
            : ''}
          Your e-mail is {this.state.email}
          <br></br>
          {this.state.email.includes('@')
            ? 'Your e-mail address is correct'
            : 'Your email address is incorrect'}
        </p>
        <button class="btn btn-info">Submit</button>
      </div>
    );
  }
}
export default SignupPage;
