const remoteURL = "http://localhost:5002"

export default {
  get(database) {
    return fetch(`${remoteURL}/${database}/${database.id}`).then(e => e.json())
  },
  getAll(database) {
    return fetch(`${remoteURL}/${database}`).then(e => e.json())
  }
}
