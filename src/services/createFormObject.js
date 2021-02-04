export const createFormObject = (e) => {
  const arr = [...e.target]
  const inputs = arr.splice(0, arr.length - 2)
  const form = {}
  inputs.forEach(({id, value}) => {
    form[id] = value
  })
  return form
}