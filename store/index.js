export const state = () => ({
  sidebar: false,
  tiles: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },

  getTiles (state, { courseOverview }) {
    state.tiles = courseOverview.tiles
  }
}
