import React from 'react'

export default function(props) {
	return (
		<form className="signUp" onSubmit={props.onSubmit.bind(this)}> {/* 注册*/}
            <div className="row">
                <input type="text" placeholder="邮箱"
                  value={props.formData.email}
                  onChange={props.onChange.bind(this, 'email')}/>
            </div>
            <div className="row"> 
          		<input type="text" placeholder="用户名"
                value={props.formData.username}
          			onChange={props.onChange.bind(null, 'username')}/>
          		{/*bind不仅可以绑定this,还可以绑定第一个参数*/}
        	</div>
        	<div className="row">
          		<input type="password" placeholder="密码（不少于6位）"
                value={props.formData.password}
          			onChange={props.onChange.bind(null, 'password')}/>
        	</div>
        	<div className="row action">
          		<button type="submit">注册</button>
       		</div>
      	</form>	
	)
}