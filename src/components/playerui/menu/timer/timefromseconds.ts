interface TimeString {
  hours: number
  minutes: number
  seconds: number
}

const getTimeFromSeconds = (totalSeconds: number): TimeString => {
  const hours = Math.floor(totalSeconds / 3600)
  const rest = totalSeconds % 3600
  const minutes = Math.floor(rest / 60)
  const seconds = rest % 60
  const timestring: TimeString = { hours, minutes, seconds }
  return timestring
}

export default getTimeFromSeconds
