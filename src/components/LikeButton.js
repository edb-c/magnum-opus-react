import React, { Component } from 'react';   

class LikeButton extends Component {
  constructor() {
    super();
      this.state = {
        count: 0,
      };
      this.updateCount = this.updateCount.bind(this);
    }
  
    updateCount() {
      this.setState((prevState) => {
        return { count: prevState.count + 1 }
      });
    }
  
    render() {
      return ( <button onClick={() => this.updateCount()} >
                Clicked {this.state.count} times
              </button>);
    }
  }
export default LikeButton;
//Resources:
//https://reactjs.org/docs/react-component.html#constructor
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
//https://lucybain.com/blog/2016/react-state-vs-pros/
