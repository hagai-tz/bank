import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    
    render() {
        console.log("Transactions: ",this.props)
        return (
            <div className='tran-container'>
                { this.props.data.map( c => 
                     <Transaction data={c} del={this.props.del} />
                )}
            </div>
        )
    }
}

export default Transactions;