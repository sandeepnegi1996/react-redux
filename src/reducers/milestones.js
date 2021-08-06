const initialMilestone = {
  milestones: [
    {
      name: 'milestone1',
      description: 'this is description',
      amount: '1',
    },

    {
      name: 'milestone2',
      description: 'this is description',
      amount: '1',
    },
    {
      name: 'milestone3',
      description: 'this is description',
      amount: '1',
    },
  ],
}
const milestoneReducer = (state = initialMilestone, action) => {
  switch (action.type) {
    case 'ADDMILESTONE':
      return Object.assign({}, state, {
        milestones: [...state.milestones, action.payload],
      })

    default:
      return state
  }
}

export default milestoneReducer
