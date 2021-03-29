import { createContext, useReducer } from "react"
import StudentReducer from "../reducers/studentReducer"
export const StudentContext =createContext()
const initialStudents = [
{   name: "Rahinatu",
    level: "200",
    date: "12/12/12",
    indexNo: "KWE004"
},
   {name: "Sanye",
   level: "300",
    date: "10/11/20",
     indexNo: "KWE005"
    },
   {name: "Umu",
   level: "400",
    date:"15/03/20",
     indexNo:"KWE003"
    } 
]

const StudentContextProvider = ({children}) => {
    const [students, dispatch] = useReducer(StudentReducer, initialStudents )

    return (
    <StudentContext.Provider value={{students, dispatch}}>
           {children}
    </StudentContext.Provider>
    )
}
export default StudentContextProvider;