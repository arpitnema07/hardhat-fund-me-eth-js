const { network } = require("hardhat")
const {
    developmentChainIds,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChainIds.includes(chainId)) {
        // deploy mocks
        log("Local network detected! Deploying Mocks...")
        log("----------------------------------------------------------")

        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks Deployed!")
        log("----------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
