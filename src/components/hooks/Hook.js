
import React, { useState } from "react";

function Hook() {
    const [student, setStudent] = useState({name:"", age: 0}) 
    return(
        <div>
            <h1>em là {student.name} tuổi {student.age}</h1>
            <form>
                <input type="text" placeholder="name" value={student.name} onChange={(e)=>setStudent({...student, name: e.target.value})}/> <br/>
                <input type="number" placeholder="age" value={student.age} onChange={(e)=>setStudent({...student, age: e.target.value})}/> <br/>
            </form>
        </div>
    )
}

export default Hook;