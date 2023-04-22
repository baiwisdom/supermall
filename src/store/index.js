import { createStore } from 'vuex'
import { StoreMutations } from '@/common/store_mutations/StoreMutations'

  const MyBayCar = {
  number: 0,
  list: []
}

export default createStore({
  state: {
    MyBayCar
  },
  getters: {
  },
  mutations: {
    [StoreMutations.addIntoBuyCar](state, iid){
      console.log(iid);
    }
  },
  actions: {
  },
  modules: {
  }
})
