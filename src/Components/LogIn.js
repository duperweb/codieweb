import React from 'react';


var name = prompt("enter aname")
function UserGreeting(props) {
    return <h1> Welcome + {name} </h1>
}

export default UserGreeting;