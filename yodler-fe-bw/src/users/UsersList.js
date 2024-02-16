import React, { useState, useEffect } from "react";
import YodlerApi from "../api/api.js";
import UserCard from "./UserCard.js";

/** Show page with list of users.
 * 
 * Private Route only for admin users
 *
 * On mount, loads users from API.
 *
 * This is routed to at /users
 *
 * Routes -> { UserCard }
 */

const UsersList =()=> {
  console.debug("UsersList");

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersList = async () => {
    try{
        let userData = await YodlerApi.request("users");
        console.log(userData)
        setUsers(userData);
    } catch (e) {
        console.error("Error fetching users", e)
    }
    };
    getUsersList();
  }, []);

  return (
    <div>
    <h1 >Users List</h1>
                  <div>
                    {users? (
                      users.map((u) => (
                        <UserCard
                            key={u.id}
                            firstName={u.firstName}
                            lastName={u.lastName}
                            email={u.email}
                            state={u.state}
                        />
              ))
                    ): ( 
                    <p>Loading...</p>
                    )}
          </div>
    </div>
  );
}

export default UsersList;
