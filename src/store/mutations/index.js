export default {
  login: (state, payLoad) => {
    state.me = payLoad;
  },
  logout: state => {
    state.me = undefined;
  },
};
