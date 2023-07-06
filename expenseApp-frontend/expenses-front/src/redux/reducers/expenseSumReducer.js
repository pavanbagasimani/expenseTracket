const expenseSumInitial=[]

export const expenseSumReducer=(state=expenseSumInitial,action)=>{
    switch(action.type){
        case 'SUM_EXPENSES':{
            const {sum,cat}=action.payload
            const data=[...sum].map(ele=>{
                const category=cat.find(cat=>cat._id===ele._id)
                return [category?.name,ele.totalExpense]
            })
            const result=[["category","expenses"],...data]
            console.log(result)
           return result
        }
        default:{
            return [...state]
        }
    }
}
