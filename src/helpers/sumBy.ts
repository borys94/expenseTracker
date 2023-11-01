const sumBy = <T>(arr: T[], field: keyof T) => {
  if (arr.length === 0) {
    return 0
  }

  return arr.reduce((total, obj) => total + Number(obj[field]), 0)
}

export default sumBy
