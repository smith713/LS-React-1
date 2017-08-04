import React, { Component } from 'react';

export class Todo extends Component {
     
    constructor(){
        super(...arguments);
        this.state = {
            title: this.props.title,
            summary: this.props.summary,
            completed: this.props.completed,
            inEditMode: false
        }
    } 
    toggleCompleted(){
        this.setState({completed: !this.state.completed})
    }
    toggleEditMode(){
        this.setState({ inEditMode: !this.state.inEditMode });
    }
    editTodo(key, event) {
         
        var change = {
            title: this.state.title,
            summary: this.state.summary
        };
        change[key] = event.target.value;
        this.setState(change);       
    }       
    render() {
        var isComplete = this.state.completed ? 'complete' : '';
        var display;
         
        if(this.state.inEditMode) {
            display = <div><input type="text" value={this.state.title} onChange={(e) => this.editTodo('title', e)} /> <textarea value={this.state.summary} onChange={(e) => this.editTodo('summary', e)}></textarea></div>;
        } else {
            display = <div className={isComplete}><h2>{this.state.title}</h2><p>{this.state.summary}</p> <input type="checkbox" checked={this.state.completed} onChange={() => this.toggleCompleted()} /></div>
        }
         
        return(
            <li>
                {display}
                <button className="btn-success"onClick={() => this.toggleEditMode()}>{this.state.inEditMode ? 'Save' : 'Edit'}</button>
                <button className="btn-danger"onClick={this.props.remove}>Remove</button>
            </li>
        )  
    }
};



Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string,
    completed: React.PropTypes.bool
}