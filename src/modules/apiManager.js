const remoteURL = "http://localhost:5002"

export default {
    get(database, id) {
      return fetch(`${remoteURL}/${database}/${id}`).then(e => e.json())
    },

  delete(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => this.getAll(database))
  },

  getAll(database) {
    return fetch(`${remoteURL}/${database}`).then(e => e.json())
  },
  post(newAnimal, database) {
    return fetch(`${remoteURL}/${database}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },

  put(database, editedObject) {
    return fetch(`${remoteURL}/${database}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  }
}


