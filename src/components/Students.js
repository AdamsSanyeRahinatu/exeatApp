import {useContext} from 'react'
import {StudentContext} from "../context/StudentContext"
function Students() {
     
     const { students,dispatch}  =useContext(StudentContext)
    return (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", margin:"1cm"}}>
          {
               students.map((student) => (
                <div style={{border:"3px solid white", width:"100%"}}>
                    <h2>{student.name}</h2>
                    <h3>{student.level}</h3>
                    <h4>{student.date}</h4>
                    <button onClick={() =>dispatch({type:"delete", indexNo:student.indexNo})}>x</button>
                </div>
              ))
          }

        </div>
    )
}

export default Students;
