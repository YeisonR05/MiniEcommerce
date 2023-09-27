export const addItem = (product, quantity) => {
  return {
    type: "ADDITEM",
    payload: product
  }
}

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product
}
}

