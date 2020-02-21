import React, { Component } from "react"
import Axios from "axios"
import StocksContainer from "./StocksContainer"
import Search from "./Search"
import StockDetails from "./StockDetails"

import { Switch, Route, Link } from "react-router-dom"

const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stocks: [],
      tickers: [],
      searchQuery: ""
    }
  }
  componentDidMount() {
    this.fetchStocks()
  }
  fetchStocks = async () => {
    try {
      const stockData = []
      this.state.tickers.forEach(async ticker => {
        const stocks = await Axios.get(
          `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${IEX_TOKEN}`
        )
        stockData.push(stocks.data)
        console.log(stockData)
        this.setState({
          stocks: stockData
        })
      })
    } catch (error) {
      console.error(error)
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { tickers } = this.state
    if (tickers.length === 0 && !this.state.searchQuery.length) {
      alert("Need some cash")
    } else if (tickers.includes(this.state.searchQuery.toLowerCase())) {
      alert("Already Exists")
    } else {
      this.setState(
        state => ({
          tickers: [this.state.searchQuery.toLowerCase(), ...state.tickers],
          searchQuery: ""
        }),
        () => this.fetchStocks()
      )
    }
  }
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            {/* key={stock.id}
            id={stock.id} */}
            <StocksContainer stocks={this.state.stocks} />
            <Search
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              value={this.state.searchQuery}
              name="searchQuery"
            />
          </Route>
          <Route
            path="/StockDetails/:"
            render={props => (
              <StockDetails data={this.state.stocks} {...props} />
            )}
          />
        </Switch>
      </div>
    )
  }
}
