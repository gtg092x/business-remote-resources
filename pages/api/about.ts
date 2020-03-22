import about from '../../shared/controllers/about'

export default async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const result = await about()
  res.end(JSON.stringify(result))
}
