import { useEffect, useState } from "react";
import { Container, ListGroup } from "reactstrap";
import Student from "./Student";
import Add from "./Add";
import Footer from "./Footer";

function Students() {
    const [checkAll, setCheckAll] = useState(false)
    const [flag, setFlag] = useState("")
    const [list, setList] = useState([
        {
            id: 1,
            name: "le tho",
            checked: true
        },
        {
            id: 2,
            name: "le hieu",
            checked: true
        },
        {
            id: 3,
            name: "le cún",
            checked: false
        },
        {
            id: 4,
            name: "le hổ",
            checked: false
        }
    ])
    useEffect(()=>{
        if(localStorage.getItem("list")) {
            setList(JSON.parse(localStorage.getItem("list")))
        }
    }, [])
    console.log("render students")
    useEffect(()=>{
        console.log("useEffect load duy nhất 1 lần")
    }, [])
    const rename = (id, name)=>{
        let newList =list.map(student=>student.id===id?{...student,name: name}:student)
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList))
    }
    const deleteById = (id) => {
        const newList = list.filter(item=>item.id !== id)
        setList(newList)
        localStorage.setItem("list", JSON.stringify(newList))
    }
    const reChecked = (id)=>{
        let newList = list.map(item=>item.id===id?{...item, checked: !item.checked}: item)
        setList(newList)
        localStorage.setItem("list", JSON.stringify(newList))
    }
    const addNewStudent = (name) => {
        let idMax = list.reduce((max_value, student) => Math.max(max_value, student.id), -Infinity)
        let newList = [...list, {id: list.length===0?1:idMax+1, name: name, checked: false}]
        setList(newList)
        localStorage.setItem("list", JSON.stringify(newList))
    }
    const filterStudents= (list,flag) =>{
        if(flag === "CHECK"){
            return list.filter(student=>student.checked)
        }
        else if(flag === "NOCHECK"){
            return list.filter(student=>!student.checked)
        }
        else if(flag === "DELETEALL"){
            setList(list.filter(item=>item.checked == false))
            localStorage.setItem("list", JSON.stringify(list.filter(item=>item.checked == false)))
            setFlag("")
        }
        else if(flag === "CHECKALL"){
            setList(list.map((item)=>({...item, checked: !checkAll})))
            localStorage.setItem("list", JSON.stringify(list.map((item)=>({...item, checked: !checkAll}))))
            setCheckAll(!checkAll)
            setFlag("")
        }
        return list;
    }
    return(
        <div>
            <Container>
                <h1>Student list</h1>
                <Add
                addNewStudent={addNewStudent}/>
                <ListGroup className="list-ground">
                    {
                        filterStudents(list, flag).map((item, index)=>(
                        <Student
                        index={index}
                        deleteById={deleteById}
                        key={index}
                        student={item}
                        reChecked={reChecked}
                        rename={rename}/>))
                    }
                </ListGroup>
                <Footer
                checkAll={checkAll}
                setFlag={setFlag}/>
            </Container>
        </div>
    )
}

export default Students;