export const XHRGet = function(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      // Request finished. Do processing here.
      if (xhr.status === 200 || xhr.status === 204) {
        // Got positive response
        // console.log("DATA",xhr.response)
        if (callback && typeof(callback) === "function") {
          callback(xhr.response)
        }
      } else {
        // Got error
        console.log('Error: ' + xhr.status)
      }
    }
  }
  xhr.send()
}


export const XHRPost = function(url, attributes, callback) {
  var xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.open("POST", url, true)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      // Request finished. Do processing here.
      if (xhr.status === 200 || xhr.status === 204) {
        // Got positive response
        // console.log("DATA",xhr.response)
        if (callback && typeof(callback) === "function") {
          callback(xhr.response)
        }
      } else {
        // Got error
        console.log('Error: ' + xhr.status)
      }
    }
  }
  xhr.send(attributes)
}
