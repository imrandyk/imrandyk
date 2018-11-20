export function GetRandomDeg() {
  return `${Math.round(Math.random()) === 1 ? '-' : ''}${Math.floor(
    Math.random() * 10
  ) + 1}deg`
}

export function GetRandomColor() {
  const num = Math.floor(Math.random() * 8) + 1
  switch (num) {
    case 1:
      return 'red'
    case 2:
      return 'orange'
    case 3:
      return 'green'
    case 4:
      return 'teal'
    case 5:
      return 'blue'
    case 6:
      return 'indigo'
    case 7:
      return 'purple'
    default:
      return 'pink'
  }
}
