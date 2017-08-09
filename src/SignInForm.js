import React, {Component} from 'react'

export default class SignInForm extends Component {
	render() {
		return (
			<form className="signIn" onSubmit={this.signIn.bind(this)}> {/* 登录*/}
          <div className="row">
            <label>用户名</label>
              <input type="text" value={this.state.formData.username}
                onChange={this.changeFormData.bind(this, 'username')}/>
          </div>
          <div className="row">
            <label>密码</label>
              <input type="password" value={this.state.formData.password}
                onChange={this.changeFormData.bind(this, 'password')}/>
          </div>
          <div className="row actions">
              <button type="submit">登录</button>
              <a href="#" onClick={this.showForgotPassword.bind(this)}>忘记密码了？</a>
          </div>
      </form>	
		)
	}
}