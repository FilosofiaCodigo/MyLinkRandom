Generating random numbers with the help of Chainlink's Oracle.

# Dependencies

```bash
npm install --save-dev hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai
```

# Setup

Set the following variables the information needed as stated by the [chainlink documentation](https://docs.chain.link/docs/vrf-contracts/) in the `scripts/sample-script.js`. By default is set to work for the mumbai maitc network.

```js
LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255"
KEY_HASH = "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4"
FEE = 0.0001 * 10 ** 18;
```

Create a `.env` on the root of this directory and add the following envionment variables.

```bash
HARDHAT_DEPLOY_URL = https://eth-ropsten.alchemyapi.io/v2/YOURALCHEMYKEY
HARDHAT_DEPLOY_PRIVATE_KEY = YOURPRIVATEKEY
```

# Compile

```bash
npx hardhat compile
```

# Deploy

Chose your network and deploy.

```bash
npx hardhat run scripts/sample-script.js
npx hardhat run scripts/sample-script.js --network ropsten
npx hardhat run scripts/sample-script.js --network mumbai
```