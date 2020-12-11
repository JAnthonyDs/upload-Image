const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/posts',multer(multerConfig).single('file'),(req,res) => {
    console.log('AQUI',req.file)
    return res.json({ message: 'ok' })
})

module.exports = routes