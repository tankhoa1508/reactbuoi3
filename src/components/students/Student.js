import { useState } from "react";
import { Button, Input, ListGroupItem } from "reactstrap";

function Student(props) {
    const {index,student, deleteById, reChecked, rename} = props
    const [isEdit, setIsEdit] = useState(false)
    const [text, setText] = useState(student.name)
    return(
        <ListGroupItem className={index%2 !== 0?"student-item active-color":"student-item"}>
            <input onChange={()=>reChecked(student.id)} checked={student.checked} type="checkbox" name="checked"/>
            {isEdit ? <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
                if(e.key ==="Enter"){
                    setIsEdit(false)
                    rename(student.id, text)
                }
            }}/> : 
            <p onDoubleClick={()=>setIsEdit(true)} 
            onClick={()=>reChecked(student.id)} 
            className={student.checked?"student-name active":"student-name"}>{student.name}</p>}
            
            <Button className="delete-btn" onClick={()=>deleteById(student.id)}>x</Button>
        </ListGroupItem>
    )
}
export default Student;