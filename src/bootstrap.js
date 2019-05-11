import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  state = {
    theme: null,
    username: "",
    password: "",
    sex: "male",
    jsonData: ""
  }

  componentDidMount() {
    console.log('Get Json');

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => json.title)
      .then((jsonData) => {
        this.setState({ jsonData: jsonData })
      })
  }

  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }

  selectSex = (e) => {
    this.setState({ sex: e.target.value })
  }

  render() {

    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';

    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
        <legend className="rainbow-text">xxxShow JSON : {this.state.jsonData}</legend>
        <a href="www.google.co.th">Google</a>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form action="#" onSubmit={() => alert(JSON.stringify(this.state))}>
              
                <legend>Login</legend>
                {/* Comment */}
                <div class="form-group">
                  <label for="">Username</label>
                  <input
                    onChange={e => {
                      this.setState({
                        username: e.target.value
                      })
                    }}
                    value={this.state.username}
                    type="text" class="form-control" id="username" required />
                </div>

                {/* Password */}
                <div class="form-group">
                  <label for="">Password</label>
                  <input
                    onChange={e => {
                      this.setState({ password: e.target.value })
                    }}
                    value={this.state.password}
                    type="password" class="form-control" id="password" required />
                </div>
                <div class="form-group">
                  <label>Sex</label>
                  <select
                    onChange={this.selectSex}
                    id="sex" class="form-control" required="required">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>


        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{theme || 'Default'}</span>

        <div className="btn-group">

          <button type="button" className={`btn btn-${themeClass} btn-lg`}>{theme || 'Choose'} Theme</button>

          <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>

          <div className="dropdown-menu">

            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
            <a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>

            <div className="dropdown-divider"></div>

            <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
          </div>

        </div>

      </div>
    );

  }

}

export default ThemeSwitcher;