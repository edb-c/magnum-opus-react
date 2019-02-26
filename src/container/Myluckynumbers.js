import React, { Component } from 'react';   //destructured
import { delete_myluckynumbers } from '../actions/delete_myluckynumbers';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'

//All of the visible content of our app is contained within this App class.
//<MyluckynumbersForm create_myluckynumbers={this.props.create_myluckynumbers}/> 
class Myluckynumbers extends Component {

    renderWinners = () => {
        
        return this.props.winningNumbers.map((winner,index) => {  
          return <tr key={winner.id}>
          <td>  {winner.id}</td>
          <td> {winner.winning_numbers} </td>
          <td><a href="/thenumbers" onClick={delete_myluckynumbers(winner.id,winner.winning_numbers, 0)}>Delete</a></td>
           </tr> 
        })

  
    }
  render() {
      return (
        <div> 
          <h3> Your {this.renderWinners().length} Stored Favorite Numbers are:</h3>
          <Table striped bordered hover>
        <tbody>
        <tr>
            <th>Record ID</th>
            <th>Your Stored Numbers</th> 
            <th>Action</th> 
        </tr>
   
        {this.renderWinners()}

        </tbody>
        </Table>
        </div>
      )
  }
}

const mapStateToProps = state => {

    return {
        winningNumbers: state.winners.winnersPayload
      } 
    }

//When connect is used, it 'connects' the component to the application store.
//Now is smart component or container.
    export default connect(mapStateToProps, { delete_myluckynumbers })(Myluckynumbers)