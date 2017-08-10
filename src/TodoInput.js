import React from 'react';
import './TodoInput.css'
 
function submit(props, e){
    if (e.key === 'Enter') {
		props.onSubmit(e)
    }
}
function changeTitle(props, e){
    props.onChange(e)
}
// let temp = function(e){
// changeTitle.call(null, props, e)
// }

// onChange={temp}
// 搞清楚 bind 用法
export default function(props) {
	return <input type="text" value={props.content}
      		 className="TodoInput"	
      		 onChange={changeTitle.bind(null, props)}
      		 onKeyPress={submit.bind(null, props)}/>
}
