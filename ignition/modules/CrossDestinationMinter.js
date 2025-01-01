const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CrossDestinationMinterModule', m => {
    const CrossDestinationMinterModule = m.contract('CrossDestinationMinter', [
        '0x16bdae582321d9eba26e3f716726db9710bca4d3'
    ]);

    return { CrossDestinationMinterModule };
});