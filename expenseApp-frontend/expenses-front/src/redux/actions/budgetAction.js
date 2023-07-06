import axios from 'axios';

export const startAddBudget = (budgetData) => {
  return (dispatch) => {
    axios.post('http://localhost:3077/api/addBudget', budgetData)
      .then(res => {
        alert(`Budget of ${res.data.amount} added successfully`);
        dispatch(setuserBudget(res.data))
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const startUpdateBudget = (updateBody,id) => {
  return (dispatch) => {
    axios.put(`http://localhost:3077/api/updateBudget/${id}`, updateBody)
      .then(res => {
        alert(`Budget updated`);
        dispatch(setuserBudget(res.data))
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const startGetBudget = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3077/api/userBudget/${id}`)
      .then(res => {
        dispatch(setuserBudget(res.data))
      })
      .catch(e => {
        console.log(e);
      });
  };
};


export const setuserBudget = (budget) => {
  return {
    type: 'SET_USER_BUDGET',
    payload: budget,
  };
};


