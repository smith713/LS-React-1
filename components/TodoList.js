import React, { Component } from 'react';
import { Todo } from './Todo';

export class TodoList extends Component {
     
    constructor(){
        super(...arguments);
        this.state = {
            todos: this.props.data,
            newItem: {
                title: '',
                summary: ''
            }
        }
    }
     
    handleChange(key, event){
        var change = {
            title: this.state.newItem.title,
            summary: this.state.newItem.summary
        };
        change[key] = event.target.value;
         
        this.setState({           
            newItem: change        
        });               
    }
     
    addTodo(){
        this.state.todos.push({
            id: this.state.todos[this.state.todos.length - 1].id + 1,
            title: this.state.newItem.title,
            summary: this.state.newItem.summary,
            done: false
        });
 
        this.setState({
            todos: this.state.todos,
            newItem: {
                title: '',
                summary: ''
            }
        });
        console.log(this.state.todos)        
    }

    updateTodo(obj, index){
        this.state.todos[index] = {
            id: this.state.todos[index].id,
            title: obj.title,
            summary: obj.summary
        };
    }

     
    removeTodo(index) {
        this.state.todos.splice(index, 1);
 
        this.setState({
            todos: this.state.todos
        });  
    }
     
    render() {
         
        var items = this.props.data.map((item, index) => {
            return (
                <Todo 
                    key={item.id} 
                    title={item.title} 
                    summary={item.summary} 
                    completed={item.done}
                    update={(obj) => this.updateTodo(obj, index)}
                    remove={() => this.removeTodo(index)} />);        
        });
         
        return(
            <div>
                <ul>{items}</ul>
                 
                <h3>Add New Item:</h3>
                <label>Title</label> <input type="text" value={this.state.newItem.title} onChange={(e) => this.handleChange('title', e)} />
                <label>Description</label> <textarea value={this.state.newItem.summary} onChange={(e) => this.handleChange('summary', e)}></textarea>
                <button className="btn-primary" onClick={() => this.addTodo()}>Add New Item</button>
            </div>
        )
    }
};


TodoList.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object)
}
