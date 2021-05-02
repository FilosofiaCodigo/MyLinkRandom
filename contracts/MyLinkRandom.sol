// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "./dependencies/VRFConsumerBase.sol";

contract MyLinkRandom is VRFConsumerBase {
  bytes32 internal keyHash;
  uint256 internal fee;

  mapping(bytes32 => uint256) public requestIdToMsgSender;
  mapping(bytes32 => uint256) public requestIdToRandomNumber;

  constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash, uint256 _fee)
  public
  VRFConsumerBase(_VRFCoordinator, _LinkToken)
  {
    keyHash = _keyhash;
    fee = _fee;
  }

  function getRandomNumber(uint256 userProvidedSeed) public returns (bytes32 _requestId) {
    require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
    bytes32 requestId = requestRandomness(keyHash, fee, userProvidedSeed);
    requestIdToMsgSender[requestId];
    return requestId;
  }

  function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
    requestIdToRandomNumber[requestId] = randomness;
  }
}