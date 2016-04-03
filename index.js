var xhr = require('xhr')
var example = require('./example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  console.log(data.body)
  document.body.innerHTML = example({ name: "Space" });
})

