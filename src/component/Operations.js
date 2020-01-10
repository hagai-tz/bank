import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

updateInputVal = (event) => {
// console.log(event.target)
    if(event.target.id === 'input-amount'){
        this.setState({ amount: event.target.value })
        // console.log(this.state.amountVal)
    }

    if(event.target.id === 'input-vendor'){
        this.setState({ vendor: event.target.value})
        // console.log(this.state.vendorVal)
    }

    if(event.target.id === 'input-category') {
        this.setState({ category: event.target.value})
        // console.log(this.state.categoryVal)
    }
}

widClick = () => {
    let data = {...this.state}
    this.props.widrawClick(data, true)
}

depClick = () => {
    let data = {...this.state}
    this.props.widrawClick(data, false)
}

render() {
        return (
            <div>
                <div className='inputs'>
                    <div className='input'>
                        <span>Amount: <input id='input-amount' value={this.state.amount} onChange={this.updateInputVal} type="text"/></span>                
                    </div>
                    <div className='input'>
                        <span>Vendor: <input id='input-vendor' value={this.state.vendor} onChange={this.updateInputVal} type="text"/></span>                
                    </div>
                    <div className='input'>
                        <span>Category: <input id='input-category' value={this.state.category} onChange={this.updateInputVal} type="text"/></span>                
                    </div>
                <div >
                    
                   <Link to='/'><button className='btn' onClick={this.depClick} >Deposit</button></Link>
                   <Link to='/'><button className='btn' onClick={this.widClick} >Withdraw</button></Link>
                </div>
                </div>

            </div>
        );
    }
}

export default Operations;


