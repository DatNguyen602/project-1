import React, { useReducer } from 'react';
import axios from 'axios';

const Reducer = () => {
  const reducer = (state,action) => {
    switch(action.type){
      case "TANG":
        return state + action.data;
      case "GIAM":
        return state - action.data;
      case "NHAN2":
        return state * action.data;
      case "CHIA3":
        return state!==0 ? state / action.data : "NaN";
      case "XOA":
        return action.data;
      default:
        return state; 
      }
    }
  const [count,dispath] = useReducer(reducer,0);

  const useRed = (state,action) => {
    switch(action.type){
      case "GET_USER_REQ":
        return {
          ...state,
          loading: true,
        }
      case "GET_USER_SUC":
        return {
          ...state,
          loading: false,
          data: action.data,
        }
      case "GET_USER_ERR":
        return {
          loading: false,
          data: [],
          error: action.data,
        }
          
    }
  }

  const init = {
    loading: false,
    data: [],
    error: null,
  }

  const [user,Dispatch] = useReducer(useRed,init);

  const getUser = () => {
    Dispatch({
      type: "GET_USER_REQ",
    })
    setTimeout(async()=>{
      try{
        const res = await axios.get("https://reqres.in/api/users")
        Dispatch({
          type: "GET_USER_SUC",
          data: res,
        })
      }
      catch{
        Dispatch({
          type: "GET_USER_ERR",
          data: "err",
        })
      }
    },2000)
  }

          
  return (
    <div>
      <h1 className='col-12 text-center'>Count {count}</h1>
      <div className="col-12 text-center">
        <button type='button'
        onClick={()=>dispath({type: "TANG",data: 4})}
        className='bg-primary'>
          TANG
        </button>
        <button type='button'
        onClick={()=>dispath({type: "GIAM",data: 6})}
        className='ms-4 bg-danger'>
          GIAM
        </button>
        <button type='button'
        onClick={()=>dispath({type: "NHAN2",data: 2})}
        className='ms-4 bg-danger'>
          Nhan 2
        </button>
        <button type='button'
        onClick={()=>dispath({type: "CHIA3",data: 3})}
        className='mx-4 bg-danger'>
          Chia 3
        </button>
        <button type='button'
        onClick={()=>dispath({type: "XOA",data: 0})}
        className='bg-success'>
          XOA
        </button>
        <br/>
        <button onClick={getUser}
        className='mt-5'>
          Get User
        </button>
        <br/>
        {
          user.loading ? <h2>Loading...</h2> : <h2>{JSON.stringify(user)}</h2>
        }
      </div>
    </div>
  )
}

export default Reducer;