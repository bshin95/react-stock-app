import React from "react"
import { Link } from "react-router-dom"

const StocksContainer = ({ stocks }) =>
  stocks.map((stock, index) => {
    const switchPrice = Number(stock.change) > 0 ? "up" : "down"
    return (
      <Link to={`/StockDetails/${stock.symbol}`}>
        <div className="card" key={index}>
          <h4 className="title">{stock.symbol}</h4>
          <div className="ticker">
            <p className="price">{stock.latestPrice}</p>
            <p className={`change ${switchPrice}`}>{stock.change}%</p>
          </div>
          {/* <Link>
          <button>More information</button>
        </Link> */}
        </div>
      </Link>
    )
  })

export default StocksContainer
