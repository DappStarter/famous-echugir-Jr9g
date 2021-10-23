require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy razor misery attitude guess entire metal gift'; 
let testAccounts = [
"0x6fbecd00e84b7de8d97002a8c1cd26b80af92716c0a7ae75b9e967400c40cc0a",
"0xcd79f061e6f08d406c31ea2ff09523107f12d5da627b81ceac8ac6a7efc3c1ad",
"0xa602a32e1d016541d89d37544ec168cd629c59d394a50c753491de36f7c731f5",
"0x9c5c62c1d52514cec8dd4f7ada82bd361858e1384488f2f261ade0ca167da622",
"0x3f627479c75063ab866dc00c4e931f7f78a3745e442a7bae9155e0f470012402",
"0xb1846429812d4066083ad4d40e230d7f4e068a2dc5fe3fd59459ed562fdec94b",
"0x09b7c8742ccfc8462b28cc1dbdf0ac649ed52f70d39defd7ad9b08c0a0b4df0e",
"0x530e619bd3228472f6d6ae86a51fb19650f3dc98d20470add9aa3ce384016aed",
"0x781869e66a43ef906bf44dcebfc2515fc9e7d306d153f406c5896f2211c31bd4",
"0x91acd5cb84e921811924cd92e042d93b64111ae19a8c5c755833811669784ec8"
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
            version: '^0.8.0'
        }
    }
};

