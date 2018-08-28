const express = require('express')
const app = express()

// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html', 'css', 'js','mp4'],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
//   setHeaders: function (res, path, stat) {
//     res.set('x-timestamp', Date.now())
//   }
// }

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(3000, () => console.log('Server is listening on port 3000!'))