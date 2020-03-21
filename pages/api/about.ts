import about from '../../shared/controllers/about'

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  about().then(result => res.end(JSON.stringify(result)))
}
