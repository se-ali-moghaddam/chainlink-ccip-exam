const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('TransferUSDCBasicModule', m => {
    const TransferUSDCBasicModule = m.contract('TransferUSDCBasic');

    return { TransferUSDCBasicModule };
});