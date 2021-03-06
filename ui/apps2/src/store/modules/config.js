// 系统性状态存储
const config = {
  state: {
    dmdMineConfig: [ // 钻石参与LP挖矿配置
      {
        mid: 39,
        duration: 31104000,
        epoch: 1600855200,
        maxSupply: 500,
        poolContract: "eosdmdpool1d",
        poolid: 9,
        sTokenContract: "",
        sTokenPrecision: 4,
        sTokenSymbol: "",
      },
      { // hub
        mif: 344,
        duration: 1209600,
        epoch: 1599796800,
        maxSupply: 2000,
        poolContract: "eosdmdpool1b",
        poolid: 7,
        sTokenContract: "",
        sTokenPrecision: 4,
        sTokenSymbol: "",
      },
      {
        mid: 329,
        duration: 1209600,
        epoch: 1599796800,
        maxSupply: 2000,
        poolContract: "eosdmdpool1a",
        poolid: 6,
        sTokenContract: "",
        sTokenPrecision: 4,
        sTokenSymbol: "",
      },
      {
        mid: 370,
        duration: 31104000,
        epoch: 1600855200,
        maxSupply: 500,
        poolContract: "eosdmdpool1c",
        poolid: 8,
        sTokenContract: "",
        sTokenPrecision: 4,
        sTokenSymbol: "",
      }
    ],
    // YFC类型LP挖矿配置
    lpMid: [{
      mid: 329,
      symbol: 'YFC',
      contract: 'yfctokenmain', // 币种合约
      poolAcc: 'yfcfishponds', // 待瓜分余额
      mineAcc: 'yfcfishponds', // 挖矿操作合约账户
      decimal: 8,
    }, {
      mid: 346,
      symbol: 'DBC',
      contract: 'dbctokenmain', // 币种合约
      poolAcc: 'dbcfarmers11', // 待瓜分余额
      mineAcc: 'dbcfarmers11', // 挖矿操作合约账户
      decimal: 8,
    }, {
      mid: 459,
      symbol: 'PDD',
      contract: 'pddtokenmain', // 币种合约
      poolAcc: 'pddissuemain', // 待瓜分余额
      mineAcc: 'pddfarmers11', // 挖矿操作合约账户
      decimal: 8,
    }],
    lpMineList: {}, // 存放格式为 {YFC: [...],}
    lpPoolsBal: {}, // 存放格式为 {YFC: '1.00...'}
    lpDamping: {},  // 存放格式为 {YFC: 0.75, ...}
    tampList: 0,
  },
  mutations: {
    SET_LpMineList: (state, lpMineList) => {
      state.lpMineList = lpMineList;
      state.tampList = Math.random() * 1000;
    },
    SET_LpPoolsBal: (state, lpPoolsBal) => {
      state.lpPoolsBal = lpPoolsBal;
    },
    SET_LpDamping: (state, lpDamping) => {
      state.lpDamping = lpDamping;
    },
  },
  actions: {
    setLpMineList({ commit }, baseConfig) {
      commit('SET_LpMineList', baseConfig);
    },
    setLpPoolsBal({ commit }, lpPoolsBal) {
      commit('SET_LpPoolsBal', lpPoolsBal);
    },
    setLpDamping({ commit }, lpDamping) {
      commit('SET_LpDamping', lpDamping);
    },
  }
};

export default config;
