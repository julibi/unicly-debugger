const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Debugger", function () {
  it("Should return the new greeting once it's changed", async function () {
    const DebuggerFactory = await ethers.getContractFactory("Debugger");
    const Debugger = await DebuggerFactory.deploy();
    await Debugger.deployed();
    const FACTORY_ADDRESS = '0x47625f645f394517807e5c2e95d8c2289b9ed3d5';
    const WETH_ADDRESS = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
    const UTOKEN_FRD_ADDRESS = '0xfd58c57105e7c11b58f094264ae4a44d96317d41';

    const pairForResult = await Debugger.pairFor(FACTORY_ADDRESS, WETH_ADDRESS, UTOKEN_FRD_ADDRESS);
    console.log({ pairForResult });
    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // // wait until the transaction is mined
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});