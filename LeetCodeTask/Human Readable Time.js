// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
  let h = Math.floor(seconds / 3600).toString()
  if(h.length === 1) {
    h = '0'+h
  }
  let m =  Math.floor(seconds / 60 % 60).toString()
  if(m.length === 1) {
    m = '0'+m
  }
  let s = Math.floor(seconds / 1 % 60).toString()
  if(s.length === 1) {
    s = '0'+s
  }
  return `${h}:${m}:${s}`
}