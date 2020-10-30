/*
  info from:
    https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp
*/

var common = {
  name: 'Wagerr',
  per1: 1e8,
  unit: 'WGR'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000007b9191bc7a17bfb6cedf96a8dacebb5730b498361bf26d44a9f9dcc1079',
  // nDefaultPort
  port: 55002,
  portRpc: 55003,
  protocol: {
    // pchMessageStart
    magic: 0xfd612d84 // careful, sent over wire as little endian
  },
  // vSeeds
  seedsDns: [
    'main.seederv1.wgr.host',
    'main.seederv2.wgr.host',
    'main.devseeder1.wgr.host',
    'main.devseeder2.wgr.host'
    ],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0221312b,
      public: 0x022d2533
    },
    bip44: 0,
    private: 0xc7,
    public: 0x49,
    scripthash: 0x3f,
    messagePrefix: '\x18Wagerr Signed Message:\n'
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '0x00000fdc268f54ff1368703792dc046b1356e60914c2b5b6348032144bcb2de5',
  port: 55004,
  portRpc: 55005,
  protocol: {
    magic: 0x99d19e87
  },
  seedsDns: [
    'testnet.testnet-seeder-01.wgr.host',
    'testnet.testnet-seeder-02.wgr.host'
  ],
  versions: {
    bip32: {
      private: 0x3a805837,
      public: 0x3a8061a0
    },
    bip44: 1,
    private: 0xb1,
    public: 0x41,
    scripthash: 0x7d,
    messagePrefix: '\x18Wagerr Signed Message:\n'
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '0x671d0510c128608897d98d1819d26b40810c8b7e4901447a909c87a9edc2f5ec',
  port: 55006,
  portRpc: 55007,
  protocol: {
    magic: 0xfaa17612
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394, //not available
      public: 0x043587cf //not available
    },
    bip44: 1, //not available
    private: 0xef,//not available
    public: 0x6f,//not available
    scripthash: 0xc4,//not available
    messagePrefix: '\x18Wagerr Signed Message:\n'
  }
}, common)

module.exports = {
  main: main,
  test: test,
  regtest: regtest
}
