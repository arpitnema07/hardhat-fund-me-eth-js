const { network } = require("hardhat")
const {
    networkConfig,
    developmentChainIds,
} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let ethUsdPriceFeedAddress

    // if contract doesn't exist, we deploy a minimal version of it for our local testing
    if (developmentChainIds.includes(chainId)) {
        ethUsdPriceFeedAddress = (await deployments.get("MockV3Aggregator"))
            .address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    // when going for localhost or hardhat network we want to use a mock

    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args, // put price feed address
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })

    // verify contract
    if (
        !developmentChainIds.includes(chainId) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, args)
    }

    log("----------------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]
