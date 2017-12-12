import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
  events: [],
  videos: [],
  albums: []
})

export const mutations = {
  setEvents (state, events) {
    state.events = events
  },
  setVideos (state, videos) {
    state.videos = videos
  },
  setAlbums (state, albums) {
    state.albums = albums
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })

        let events = _.orderBy(_.filter(filteredDownResponse, (item) => {
          return item.id === 'event'
        }), 'dateAndTime')
        let videos = _.filter(filteredDownResponse, (item) => {
          return item.id === 'video'
        })
        let albums = _.filter(filteredDownResponse, (item) => {
          return item.id === 'album'
        })
        commit('setVideos', videos)
        commit('setEvents', events)
        commit('setAlbums', albums)
      })
      .catch(console.error)
  }
}
