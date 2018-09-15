
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component <{onAddMessage: any, testStore: any}>{
  addMessage = () => {
    console.log('addMessage', this.messageInput.value);
    this.props.onAddMessage(this.messageInput.value);
    this.messageInput.value = '';
}
    private messageInput: any;

  render() { 
    return (  
      <div>
        <input type="text" ref={(input) => { this.messageInput = input }} />
        <button onClick={this.addMessage.bind(this)}>Add message</button>
        <ul>
          {this.props.testStore.map((message: any, index: any) =>
            <li key={index}>{message}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddMessage: (messageName: any) => {
      dispatch({ type: 'ADD_MESSAGE', payload: messageName });
    }
  })
)(App);

//импут в стейте хранить
//описть мкссажеимпут