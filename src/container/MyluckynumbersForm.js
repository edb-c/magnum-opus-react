import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_myluckynumbers } from '../actions/create_myluckynumbers';
import { bindActionCreators } from 'redux';
import '../assets/MLN_Form.css';

class MyluckynumbersForm extends Component { 
//Since state is initialized and methods are binded, a constructor is implemented.    
    constructor() {
        super() 
        this.state = {
            winning_numbers: "",
            bonus: 0,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleSubmit.bind(this) 
    }

handleChange (event) {
   const { name, value } = event.target
   let state = this.state

   state[name] = value 
   this.setState(state)  
}
handleSubmit = event => {
    event.preventDefault();
 
    this.props.create_myluckynumbers(this.state.winning_numbers, this.state.bonus);

    this.setState({ 
        winning_numbers: "",
        bonus: 0,
    });
}
render (){
    return (
        <div>
            <form id="MLN_Form" onSubmit={this.handleSubmit}>
            
            <br></br>
                <input 
                required
                type="string"
                
                name="winning_numbers"
                placeholder="New Lucky Numbers"
                value={this.state.winning_numbers}
                onChange={this.handleChange}
                />      
                <input 
                required
                type="integer"
                name="bonus"
                placeholder="Bonus Number"
                value={this.state.bonus}
                onChange={this.handleChange}
                />
        
                <input type="submit"/> 
            </form>
        </div>
      ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return { create_myluckynumbers: bindActionCreators(create_myluckynumbers, dispatch)}
}
const mapStateToProps = (state) => {
    return {myluckynumbers: state.winners.winnersPayload}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyluckynumbersForm);
