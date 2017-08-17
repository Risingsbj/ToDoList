import React from 'react';
import './TodoInput.css';
import './../public/iconfont/iconfont.css'

export default function(props){
    return (
        <form className="TodoInput" onSubmit={addItem.bind(null, props)}>
            <input type="text" className="InputBar"
                placeholder={props.placeHolder}
                value={props.content}
                onKeyPress={submit.bind(null, props)}
            onChange={changeTitle.bind(null, props)}/>
            <button type="submit"><i className="iconfont icon-tianjia"></i></button>
        </form>
    );
}

function addItem(props, e){
    e.preventDefault();
    if(props.content !== ''){
        props.onSubmit(props.content);
    }
}

function submit(props, e){
    if(e.key === 'Enter' && e.target.value !== ''){
    e.preventDefault();
        props.onSubmit(e.target.value);
    }
}

function changeTitle(props, e){
    props.onChange(e);
}
// let temp = function(e){
// changeTitle.call(null, props, e)
// }

// onChange={temp}
// 搞清楚 bind 用法

