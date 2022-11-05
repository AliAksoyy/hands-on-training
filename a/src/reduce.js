
export const initialState = {

    loading:false,
    catImage:"",
    error:""
};

export const reduce = (state,action)=> {

    switch (action.type) {
        case "start":
            return {...state, loading:true};
        case "success":
            return {...state, catImage:action.payload, loading:false}
        case "fail":
            return {...state, catImage:"", error:action.payload, loading:false}
    }
    
    };
        
        
    
