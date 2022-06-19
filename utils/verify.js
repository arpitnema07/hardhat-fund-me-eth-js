const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        }).then((msg) => console.log("verify " + msg))
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified")
        }
    }
}

module.exports = { verify }
