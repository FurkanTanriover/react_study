
import React, { Component } from 'react'
import User from "./User";
import UserConsumer from '../context';
export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value=>{const users=value;
          console.log(users);
          return (
            <div>
                {
                  users.map(user=>{
                    return(
                      <User
                      key={user.id}
                      name={user.name}
                      salary={user.salary}
                      department={user.department}
                      />
                      )
                    })
                }
            </div>
          );
        }
        }
      </UserConsumer>
    )
  
  }
}
