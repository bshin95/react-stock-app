import React from "react"

function StockDetails(props) {
  //console.log(props)

  const {
    match: {
      params: { symbol }
    }
  } = props

  const stockInfo = props.data.find(ele => {
    return ele.symbol === symbol
  })

  return (
    <div className="stockInfo">
      <h1>{stockInfo.companyName}</h1>
      <h1>
        {stockInfo.primaryExchange}: {stockInfo.symbol}
      </h1>
      <p>{stockInfo.latestPrice}</p>
      <p>{stockInfo.week52High}</p>
      <p>{stockInfo.week52Low}</p>
      <p>{stockInfo.marketCap}</p>
    </div>
  )
}

export default StockDetails

//   return (
//     <div className="detail">
//       <h1>{stock.companyName}</h1>
//       <h2>
//         {stock.primaryExchange}: {stock.symbol}
//       </h2>
//       <p>{stock.latestPrice}</p>
//       <p>{stock.week52High}</p>
//       <p>{stock.week52Low}</p>
//       <p>{stock.marketCap}</p>
//     </div>
//   )
// }
