import { useState } from "react";
import { Input } from "reactstrap";

function Add(props) {
    const [text, setText] = useState("")
    const { addNewStudent } = props
    return (
        <div className="add-contain">
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <Input placeholder="Enter name" className="my-2 px-4 add-input" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={
                    (e) => {
                        if (e.key === "Enter") {
                            addNewStudent(text)
                            setText("")
                        }
                    }
                } />
            </form>
        </div>
    )
}

export default Add;