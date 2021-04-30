adjustTextarea()

function adjustTextarea(o) {
  for (t of document.querySelectorAll('textarea')) {
    const [match] = t.textContent.match(/^\s+/)
    t.textContent = t.textContent.replace(new RegExp(`^${match}`, 'gm'), '')
    t.textContent = t.textContent.replace(/\s+$/, '')
    t.style.height = '1px' //https://stackoverflow.com/a/18048497
    t.style.height = t.scrollHeight + 'px'
  }
}
