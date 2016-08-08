var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(JSON.parse(data.body)) // FYI: data.body is a string
  var data = JSON.parse(data.body)
  var issAlt = data.altitude
  var issLat = data.latitude
  var issLong = data.longitude
  var issTime = data.timestamp
  var issName =  data.name.toUpperCase()
  var issSpeed = data.velocity
  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Max', issAlt: issAlt, issLat: issLat, issLong: issLong, issTime: issTime, issName: issName, issSpeed: issSpeed })
})
