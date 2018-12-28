const storage = async (collectionName) => ({
  async set(key, value) {
    return localStorage.setItem(collectionName, value);
  },
  async get(key) {
    return localStorage.getItem(key);
  }
});

export default storage;