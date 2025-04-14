import React from "react";
import userData from "./user.json"
import User1 from "./user"

const users = () => {
    return(
        <div>
            <h3>USERS</h3>
            <div className="flex flex-wrap item-center justify-center gap-8">
               {userData.map((ele)=>{
                return <User1 user={ele}/>
               })} 
            </div>
        </div>
    )
}

export default users