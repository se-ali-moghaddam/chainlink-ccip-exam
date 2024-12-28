const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CrossChainPriceNFT_Module', m => {
    const CrossChainPriceNFT_Module = m.contract('CrossChainPriceNFT');

    return { CrossChainPriceNFT_Module };
});