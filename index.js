const PORT = 8000
const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
    res.json('hi')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))