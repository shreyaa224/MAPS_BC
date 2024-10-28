const hre = require("hardhat")

async function main(){

    const Tracking = await hre.ethers.getContractFactory("Tracking");
    const tracking = await Tracking.deploy();

    await tracking.waitForDeployment();

    console.log(`Deployed to ${tracking.target}`)
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})