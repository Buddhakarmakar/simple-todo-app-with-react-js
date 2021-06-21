import React from "react"

import {v4 as uuid} from 'uuid'

class  MyContainer extends React.Component{
state={
  initialState:[
        {id: uuid(), name:" Learning React"},
        {id: uuid(),name:"Learning Angular"},
        {id: uuid(),name:" Learning Node js"},

  ],
  completed:[
    {id:uuid(),name:'Learning HTML'}
  ]
}
render(){
  const {initialState,completed}=this.state;
    return(
          <div className="container">

            <h2 className="bg-secondary text-warning">My ToDo LIST</h2>
            <div >
            <ul>
            {initialState.map(({id,name})=>

     
            <li>
            
           <h4> {name} 
             <button 
             className="btn btn-outline-success ml-4"
             
             onClick={()=>{
                  this.setState(state=>({
                    initialState:state.initialState.filter(item=>item.id!==id),
                    completed:[...completed,{id,name}]
                  }))

            }}
            
                    >&#10003;</button>
                    </h4>
            </li>  
         
          )}

          </ul>

          <hr/>

          <button className="btn btn-dark"
          onClick={()=>{
            const name=prompt("Enter Your name");

            if (name){
              this.setState(state=>({
                initialState:[...state.initialState,{id:uuid(),name}]
                
              }))
            }
          }
          }
          
          >Add Item</button>



            </div>
            
          <hr/>
            <h3 className="text-success">Completed</h3>
            <hr/>
            {completed.map(({id,name})=>

                    
                <li>

                <h4><strike> {name} </strike>
                <button 
                className="btn btn-outline-danger ml-4"
                
                onClick={()=>{
                      this.setState(state=>({
                        completed:state.completed.filter(item=>item.id!==id),
                        initialState:[...initialState,{id,name}]
                      }))

                }}

                        >&times;</button>
                        </h4>
                </li>  

                )}
                          </div>
  )
}
}


export default MyContainer