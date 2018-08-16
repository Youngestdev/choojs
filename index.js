var css = require('sheetify')
var choo = require('choo')

css('./assets/css/paper.min.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/clicks'))

app.route('/', require('./views/main'))
app.route('/abdul', require('./views/abdu'))
app.route('/auth0', require('./views/auth0'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
