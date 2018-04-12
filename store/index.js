import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'

const client = createClient()

export const state = () => ({
  events: [],
  videos: [],
  albums: [],
  works: [],
  bio: [],
  contacts: []
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
  },
  setBio (state, bio) {
    state.bio = bio
  },
  setContacts (state, contacts) {
    state.contacts = contacts
  },
  setWorks (state, works) {
    state.works = works
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse =
        _.map(response.items, item => Object.assign({}, item.fields, item.sys.contentType.sys))
        let events = _.orderBy(_.filter(filteredDownResponse, item => item.id === 'event'), 'date')
        let videos = _.orderBy(_.filter(filteredDownResponse, item => item.id === 'video'), 'orderNumber')
        let albums = _.filter(filteredDownResponse, item => item.id === 'album')
        let bio = _.filter(filteredDownResponse, item => item.id === 'bio')
        let contacts = _.filter(filteredDownResponse, item => item.id === 'contact')
        let works = _.filter(filteredDownResponse, item => item.id === 'collaborativeWork')
        commit('setWorks', works)
        commit('setContacts', contacts)
        commit('setBio', bio)
        commit('setVideos', videos)
        commit('setEvents', events)
        commit('setAlbums', albums)
      })
      .catch(console.error)
  }
}
