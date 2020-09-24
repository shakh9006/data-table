import Vue from 'vue'
import Vuex from 'vuex'
import data from "./data"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data,
    search: '',
    dialog: false,
    editedIndex: -1,
    editedItem: {
      artnumber: 0,
      name: "",
      brand: "",
      weight: 0,
      quantity: 0,
      price: 0,
      stock: 0
    },
  },

  mutations: {
    addNewItem(state, data) {
      state.data.push(data)
    },

    updateIndex(state, value) {
         state.editedIndex = typeof value === "object"
             ? state.data.indexOf(value)
             : value
    },

    updateSearch(state, search) {
        state.search = search
    },

    deleteItem(state, item) {
      const index = state.data.indexOf(item)
      state.data.splice(index, 1)
    },

    updateDialog(state, value) {
      state.dialog = value
    },

    updateEditedItem(state, data) {
      state.editedItem = data
    },
  },

  getters: {
    getData: s => s.data,
    getDialog: s => s.dialog,
    getSearch: s => s.search,
    getIndex: s => s.editedIndex,
    getEditedItem: s => s.editedItem,
    getDataByIndex: s => i => s.data.find((e, index) => i === index ),
  },
})
