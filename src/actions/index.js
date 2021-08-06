export const increment = (incrementcount) => {
  return {
    type: 'INCREMENT',
    payload: incrementcount,
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const addMilestone = (milestoneObject) => {
  return {
    type: 'ADDMILESTONE',
    payload: milestoneObject,
  }
}
