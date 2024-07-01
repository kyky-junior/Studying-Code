//SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleStorage is Ownable(msg.sender) {

    uint s_FavoriteNumber;

    constructor(uint _x) {
        s_FavoriteNumber = _x;
    }

    function setFavoriteNumber(uint _x) external onlyOwner {
        s_FavoriteNumber = _x;
    }

    function getFavoriteNumber() external view returns(uint) {
        return s_FavoriteNumber;
    }
}