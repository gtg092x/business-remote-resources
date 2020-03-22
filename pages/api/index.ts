import index from '../../shared/controllers/index'

export default async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const result = await index()
  res.end(JSON.stringify(result))
}
