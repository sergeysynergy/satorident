exports.SMALL = 768
exports.MEDIUM = 992
exports.PORT = 28002
// lg (≥1200px)
// md (≥992px)
// sm (768px ≤ width < 992px)
// xs (<768px)

if (window.location.hostname === '127.0.0.1') {
  exports.FRONT = 'http://127.0.0.1:21026'
  exports.BACK = 'http://127.0.0.1:21016'
} else {
  exports.FRONT = 'http://ocean.cttgroup.ru:21026'
  exports.BACK = 'http://ocean.cttgroup.ru:21016'
}
