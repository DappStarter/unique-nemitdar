require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rescue noble pudding inner cart frame giant'; 
let testAccounts = [
"0x5755fdac51a6a7ca013d1d15a6715dc58297af5c6e7854afbb2fd65fad1bbf2c",
"0x11774134bad1c849881557bd951b3aea109643b1391be24aa0daa245b0a96782",
"0xc26cf00bb92510cecc01cb25285183b1fa176c13aeae093d09e41f21b4c5894e",
"0x4b5440a67ed6609b09029c8a972847ca5f801d79bd982c1c27a0625abe26d8cb",
"0x011fb5dc30930154fcaa02ec12eec307b983f9e52be296faf4b4292bd685cbb3",
"0xc2dbcd96ab5200fbe9e236f099f55c48b79fb2a911143d3a32359c69a45a5047",
"0xf91ca9f4583d5c06817aeac391fe9bfb91fdc1c6089b4cd67df6d0f2978a8778",
"0x0db5d123d166cc77285b1406249a0e1da8321b55f2ecac1db22a6908b8789ac5",
"0x26361896ee08a590c1f354fbceb8ac2baa9f24304015cdbe2c972c1efaefb112",
"0xe5b98b36fa9bb6a8502403491e1f41be904879326f9cc2866633b20e5f90ad02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
