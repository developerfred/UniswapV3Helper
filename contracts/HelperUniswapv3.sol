//SPDX-License-Identifier: MIT
pragma solidity >=0.7.6;
pragma abicoder v2;

import { INonfungiblePositionManager } from "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import { console } from "hardhat/console.sol";


contract HelperUniswapV3 {

    INonfungiblePositionManager nftManager;

    constructor(INonfungiblePositionManager _nftManager) {
        nftManager = _nftManager;
    }


    function getAmountsForPrice(
        address positionManager,
        uint256 tokenId,
        uint256 price0,
        uint256 price1
    )
        public view returns (
            int256 amount0,
            int256 amount1
        )
    {
        console.log(nftManager.positions(tokenId));
        (,,amount0,amount1,,,,,) = nftManager.positions(tokenId);
    }

}