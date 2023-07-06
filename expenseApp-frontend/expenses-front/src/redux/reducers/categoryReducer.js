const categoryInitialValue = [];
const categoryReducer = (state = categoryInitialValue, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES': {
      return [...state, {...action.payload}];
    }
    case 'GET_CATEGORIES':{
      if(Array.isArray(action.payload)){
        return [...action.payload] 
      }
      else{
        return []
      }
    }
    case 'DELETE_CATEGORY':{
      return [...state].filter(ele=>{
        return ele._id!==action.payload
      })
    }

    case'UPDATE_CATEGORY':{
        return [...state].map(ele=>{  
          if(ele._id!==action.payload.catId){
            return ele
          }
          else{
            return {...action.payload.catBody}
          }
        })
    }
    default: {
      return [...state];
    }
  }
};

export default categoryReducer;