const networkConfig = {
    4: {
        name: "rinkby",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    },
    80001: {
        name: "mumbai",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
}

const developmentChainIds = [1337, 31337]
const DECIMALS = 8
const INITIAL_ANSWER = 100000000000
module.exports = {
    networkConfig,
    developmentChainIds,
    DECIMALS,
    INITIAL_ANSWER,
}
