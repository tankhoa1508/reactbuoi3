import { Button, Input } from "reactstrap"

function Footer(props) {
    const {setFlag, checkAll}=props
    return(
        <div className="my-3">
            <Input type="checkbox" checked={checkAll} name="checkAll" onChange={()=>setFlag("CHECKALL")}/>
            <Button className="mx-1" onClick={()=>setFlag("CHECK")}>filter check</Button>
            <Button className="mx-1" onClick={()=>setFlag("NOCHECK")}>filter no check</Button>
            <Button className="mx-1" onClick={()=>setFlag("")}>Clear filter check</Button>
            <Button className="mx-1" onClick={()=>setFlag("DELETEALL")}>Delete all</Button>
        </div>
    )
} 

export default Footer;