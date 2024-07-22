import Portfolio from "schema/portfolio"

const seedPortfolio = () => {

    const portfolio = Portfolio.insert({
        stocks: [
            {
                symbol: "GOOGL",
                shares: 100,
                type: "margin"
            },
            {
                symbol: "APPL",
                shares: 100,
                type: "margin"
            },
            {
                symbol: "NVDA",
                shares: 100,
                type: "option"    
            }

            // ... More
        ]}
    )
}