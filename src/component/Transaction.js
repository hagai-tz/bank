import React, { Component } from 'react';
import '../App.css'

class Transaction extends Component {
    
    render() {
            console.log("Transaction: ", this.props)
        return (
            // <div className='tran-container'>
                    <div>
                        <h3>Amount: {this.props.data.amount} <br/> Vendor: {this.props.data.vendor} <br/>Category: {this.props.data.category} </h3>
                        <button id={this.props.data._id} onClick={this.props.del} >Delete Transaction</button>
                    </div>
            // </div>
        )
    }
}
export default Transaction; 