module.exports = {
  reactStrictMode: true,
  redirects : async() => {
    return [
      {
        source: '/',
        destination : '/form',
        permanent: true
      }
    ]
  }
}
