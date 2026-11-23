;(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle')
    if (!toggle) return

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light'
      var next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      window.localStorage.setItem('jb-theme', next)
    })
  })
})()
