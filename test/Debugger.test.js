const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Debugger", function () {
  it("Should return the new greeting once it's changed", async function () {
    const DebuggerFactory = await ethers.getContractFactory("Debugger");
    const Debugger = await DebuggerFactory.deploy();
    await Debugger.deployed();
    const FACTORY_ADDRESS = '0x47625f645f394517807e5c2e95d8c2289b9ed3d5';
    const WETH_ADDRESS = '0xdf032bc4b9dc2782bb09352007d4c57b75160b15';
    const UTOKEN_FRD_ADDRESS = '0xfd58c57105e7c11b58f094264ae4a44d96317d41';

    const pairForResult = await Debugger.pairFor(FACTORY_ADDRESS, UTOKEN_FRD_ADDRESS, WETH_ADDRESS);
    const bytesToAddressResult = await Debugger.bytesToAddress(pairForResult);
    console.log({ pairForResult });
    console.log({ bytesToAddressResult });
    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // // wait until the transaction is mined
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
