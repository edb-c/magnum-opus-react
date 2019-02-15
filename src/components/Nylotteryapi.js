import React, { Component } from 'react';   //destructured
import { fetch_nylotteryapi } from '../actions/fetch_nylotteryapi';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table'

//All of the visible content of our app is contained within this App class.
//<MyluckynumbersForm create_myluckynumbers={this.props.create_myluckynumbers}/> 
class Nylotteryapi extends Component {

  componentDidMount() {
    this.props.fetch_nylotteryapi() 
    }
    
    renderNylotteryapi = () => {

        return this.props.nylotteryapiNumbers.map(nylapi => {  
          return <tr key={nylapi.draw_date}>
          <td> {nylapi.draw_date.substring(0,10)} </td>
          <td> {nylapi.winning_numbers} </td>
          <td> {nylapi.bonus} </td>
           </tr> 
        })  
    }
  render() {
      return (
        <div> 
          <h4> Past 10 Winning NY Lotto Numbers:</h4>
          <Table striped bordered hover>
        <tbody>
        <tr>
          <th>Draw Date</th> 
          <th>Winning Numbers</th> 
          <th>Bonus</th> 
        </tr>
   
        {this.renderNylotteryapi()}

        </tbody>
        </Table>
        </div>
      )
  }
}

//export default 
const mapStateToProps = state => {

    return {
        nylotteryapiNumbers: state.nylotteryapi.nylotteryapiPayload
      } 
    }
  
    export default connect(mapStateToProps, { fetch_nylotteryapi })(Nylotteryapi)