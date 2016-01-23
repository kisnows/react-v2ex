/**
 * get.js
 * @author kisnows
 * Created 2015-12-24
 */
function get(url) {
  return new Promise(function (resolve,reject) {
    var xhr = new XMLHttpRequest
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if(this.readyState !== 4){
        return
      }
      if(this.status === 200){
        resolve(this.response)
      }else{
        reject(this.status)
      }
    }
  })
}

export { get }
