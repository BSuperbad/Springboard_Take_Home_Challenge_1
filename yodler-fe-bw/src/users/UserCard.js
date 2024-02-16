// import React from "react";

/** Show info about user
 * 
 * Rendered by UsersList to show UserCard for each space.
 * 
 * UsersList -> UserCard
 * 
 */

const UserCard = ({firstName, lastName, email, state}) => {
    console.debug("UserCard", firstName, lastName);
    return (
        <div>
            <ul style={{listStyleType: 'none'}}>User: {firstName} {lastName}
            <li>Email: {email}</li>
            <li>State: {state}</li>
            </ul>
        </div>
        
    )
};

export default UserCard;