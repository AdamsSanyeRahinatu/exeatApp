import { useContext, useState} from 'react'
import { StudentContext} from "../context/StudentContext";
function AddStudent() {
    const { dispatch } =useContext(StudentContext);
    const [name, setName] = useState()
    const [level, setLevel] = useState()
    const [date, setDate] = useState()
    const [indexNo, setIndexNo] = useState()

    const onsubmit = (e) => {e.preventDefault();
        dispatch ({type:"addstudent", payload:{name,level,date,indexNo}});
    }
    return (
        <form onSubmit={onsubmit} style={{display:"grid", gridTemplateRows:"1fr", justifyContent:"center", marginTop:"20px"}}>
            <input type="text" placeholder="student name" onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="student level" onChange={(e) => setLevel(e.target.value)}/>
            <input type="date" placeholder="date"  onChange={(e) => setDate(e.target.value)}/>
            <input type="text" placeholder="index number" onChage={(e) => setIndexNo(e.target.value)}/>
            <button>ADD</button>
        </form>
    )
}

export default AddStudent
