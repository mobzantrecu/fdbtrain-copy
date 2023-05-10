function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed' //avoid scrolling to bottom
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

function copyToClipboard(text: string) {
  try {
    return navigator.clipboard.writeText(text)
  } catch (error) {
    return fallbackCopyTextToClipboard(text)
  }
}

export default copyToClipboard
