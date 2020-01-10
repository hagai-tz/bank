import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Transactions from './component/Transactions'
import Operations from './component/Operations';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    let newData = await axios.get(`http://localhost:2000/transactions`)
    // console.log("I'm newData", newData.data)
    let newState = [...this.state.data]
    // console.log("I'm newState", newState)
    newState.push(newData.data)
    // console.log("I'm newState 2", newState)
    newState = newState.flat()
    // console.log("I'm newState 3", newState)
    this.setState({data: newState})
    // console.log(this.state.data)
    
  }
  
  
  widrawClick = async (data, isWidraw) => {
    data.amount = parseInt(data.amount, 10)
    
    if (isWidraw) {
      data.amount = (data.amount * -1)
      let updateState = [...this.state.data]
      let newTransaction = await axios.post(`http://localhost:2000/transactions`, data)
      updateState.push(newTransaction.data)
      this.setState({ data: updateState }, function () {
          console.log(this.state)
        })
      }
  
      else {
        let updateState = [...this.state.data]
        let newTransaction = await axios.post(`http://localhost:2000/transactions`, data)
        console.log('dsdsdsdsdsds',newTransaction)
        updateState.push(newTransaction.data)
        this.setState({ data: updateState }, function () {
          console.log(this.state)
        })
    }   
    
  }

  deleteHandler = async (del) => {
    let id = del.target.id
    let delFromDB = await axios.delete(`http://localhost:2000/transactions?id=${id}`)
    let newData = await axios.get(`http://localhost:2000/transactions`)
    this.setState({data: newData.data}, function() {
      console.log(this.state.data)
    })
  }

  calcAmount = () => {
    let amountArray = this.state.data.map(c => c.amount)
    return amountArray.reduce((a, b) => a + b, 0)
  }

  
  render() {

    return (
        <Router>
              <div className="App">
                  <div id='main-links'>
                    <Link to='/'>Home </Link>
                    <Link to='/transactions'>Transactions </Link>
                  </div>

                  <div>
                      <Route path='/transactions' exact render= { () => <Operations data={this.state.data} widrawClick={this.widrawClick} /> } />
                      <Route path='/' exact render={ () => <Transactions data={this.state.data} del={this.deleteHandler}/> } />
                      {/* <Route path='/breakdown' exact  */}
                  </div>
              </div>
        </Router>
    )
  }
}

export default App;
