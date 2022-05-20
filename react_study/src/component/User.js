//import React, { Component } from 'react'

import React, {useState}from 'react'
import UserConsumer from '../context';
 //function component ve hook kullanarak

 function User(props) {
  const {name, department, salary}=props;

  //burada array destructuring(dizi parçalama) var useState tarafından dönen ilk değer isVisible ikinci değer ise setVisible
  const [isVisible,setVisible]=useState(false);

  const onDeleteUser=(dispatch,e)=>{
    const id=props;
    dispatch({type:"DELETE_USER",payload:id});
  }

    return(
      <UserConsumer>
        {
          value=>{
            const {dispatch}=value;
            return (
              <div className='col-md-8 mb-4'>
                  <div className='card' onClick={()=>setVisible(!isVisible)}>
                    <div className='card-header d-flex justify-content-between'>
                      <h4 className='d-inline'>{name}</h4>
                      <i onClick={()=>onDeleteUser(dispatch)} className='far fa-trash-alt' style={{cursor:"pointer"}}> </i>
                    </div>
                    {isVisible ? 
                    <div className='card-body'>
                    <p className='card-text'>Maaş : {salary}</p>
                    <p className='card-text'>Department : {department}</p>
              
                  </div>:null
                    }
                 
                  </div>
              </div>
            ) 
          }
        }
      </UserConsumer>
    )

  
}

export default User;

