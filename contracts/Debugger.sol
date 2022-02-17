//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Debugger {
    using SafeMath for uint;
    // returns sorted token addresses, used to handle return values from pairs sorted in this order
    function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {
        require(tokenA != tokenB, 'UnicSwapV2Library: IDENTICAL_ADDRESSES');
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'UnicSwapV2Library: ZERO_ADDRESS');
    }

    function pairFor(address factory, address tokenA, address tokenB) public pure returns (uint pair) {
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = uint(keccak256(abi.encodePacked(
                hex'ff',
                factory,
                keccak256(abi.encodePacked(token0, token1)),
                hex'bfcc62b757e2ca00eee45a5dd8129354c7b4f88da9cbdfe4da3b2a55bf698633' //    xinit code hash
            )));
    }

    function bytesToAddress(bytes memory bys) public pure returns (address addr) {
        assembly {
          addr := mload(add(bys,20))
        } 
    }

}
