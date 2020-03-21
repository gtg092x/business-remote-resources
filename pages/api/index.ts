import index from '../../shared/controllers/index'

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  index().then(result => res.end(JSON.stringify(result)))
}
