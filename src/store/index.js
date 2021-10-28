// import { reactive } from 'vue';

import { createStore } from 'vuex';

// export default reactive({ flashMessage: '', event: null });

export default createStore({
  state: {
    user: 'Aleksanteri Jaakola',
    events: [],
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  modules: {},
});
