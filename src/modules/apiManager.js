const remoteURL = "http://localhost:5002"

export default {
  get(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => this.getAll(database))
  },
  
  getAll(database) {
    return fetch(`${remoteURL}/${database}`).then(e => e.json())
  }
}
