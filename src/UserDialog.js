import React, { Component } from 'react';
import './UserDialog.css'
import {signUp,signIn,sendPasswordResetEmail} from './leanCloud'
import deepCopy from './deepCopy'
import SignInOrSignUp from './SignInOrSignUp'
import ForgotPasswordForm from './ForgotPasswordForm'

export default class UserDialog extends Component{
	constructor(props){
    	super(props)
    	this.state = {
          selectedTab: 'signInOrSignUp', //'forgotPassword'
      		formData: {
                email: '',
      			username: '',
      			password: '',
      		}
    	}
  	}
    signUp(e){
      e.preventDefault()
      let {email,username, password} = this.state.formData
      var re = /@/  
      if(!re.test(email)){
          alert("请输入正确邮箱")
          return;
      }
      if(username.length<=3){
          alert("用户名必须大于三个字符")
          return;  
      }
      if(password.length<6){
          alert("密码必须不小于6个字符")
          return;  
      }
      let success = (user)=>{
        this.props.onSignUp.call(null, user)
      }
      let error = (error)=>{
        switch(error.code){
          case 202:
            alert('用户名已被占用')
            break
          case 217:
            alert('无效的用户名')
            break
          default:
            alert(error)
            break
        }
     }
      signUp(username, password, email, success, error)
    }
  	signIn(e){
      e.preventDefault()
      let {username,password} = this.state.formData
      let success = (user)=>{
        this.props.onSignIn.call(null,user)
      }
      let error = (error)=>{
        switch(error.code){
          case 210:
            alert('用户名与密码不匹配')
            break
            case 502:
            alert('服务器维护中')
            break
            case 124:
            alert('请求超时,请检查网络')
            break
            case 126:
            alert('用户不存在')
            break
            case 201:
            alert('密码不能为空')
            break
          default:
            alert(error)
            break
        }
      }
      signIn(username, password, success, error)
    }
  	changeFormData(key,e){
  		let stateCopy = deepCopy(this.state)     //用JSON深拷贝
  		stateCopy.formData[key] = e.target.value
  		this.setState(stateCopy)
  	}
    render(){
     	  return (
       		<div className="UserDialog-Wrapper">
        		<div className="UserDialog">
                    <h1>todoList</h1>
                    {
                    this.state.selectedTab === 'signInOrSignUp' ?
                        <SignInOrSignUp
                        formData={this.state.formData}
                        onSignIn={this.signIn.bind(this)}
                        onSignUp={this.signUp.bind(this)}
                        onChange={this.changeFormData.bind(this)}
                        onForgotPassword={this.showForgotPassword.bind(this)}
                        /> :
                    <ForgotPasswordForm
                        formData={this.state.formData}
                        onSubmit={this.resetPassword.bind(this)}
                        onChange={this.changeFormData.bind(this)}
                        onSignIn={this.returnToSignIn.bind(this)}
                    />
                    }
        	   </div>
      		</div>
    	  )
  	}

    showForgotPassword(){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.selectedTab = 'forgotPassword'
      this.setState(stateCopy)
    }
    returnToSignIn(){
      let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.selectedTab = 'signInOrSignUp'
      this.setState(stateCopy)
    }
    resetPassword(e){
      e.preventDefault()
      let successFn = () => {
        alert('重置密码已发送成功，请前往邮箱验证');
      }
      let errorFn = () => {
        alert('邮件发送失败，请重新发送重置密码邮件')
      }
      sendPasswordResetEmail(this.state.formData.email,successFn,errorFn) 
    }
}