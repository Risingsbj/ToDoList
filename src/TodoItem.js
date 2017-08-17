import React, { Component } from 'react';
import './TodoItem.css';
import './../public/iconfont/iconfont.css';
 
export default class TodoItem extends Component {
    render(){
        return (
            <div className="TodoItem">
                <input type="checkbox" id={this.props.id}
                    className={this.props.todo.status}
                    checked={this.props.todo.status === 'completed'}
                    onChange={this.toggle.bind(this)}/>
                <label htmlFor={this.props.id}>
                    <i className={"iconfont "+(this.props.todo.status === 'completed' ? "icon-checkbox1" : "icon-checkbox")}></i>
                </label>
                <span className="title">{this.props.todo.title}</span>
                <button onClick={this.delete.bind(this)}><i className="iconfont icon-delete"></i></button>
            </div>
        );
    }

    delete(e){
        this.props.onDelete(e, this.props.todo);
    }

    toggle(e){
        this.props.onToggle(e, this.props.todo);
    }
}
