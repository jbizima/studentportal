import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "level", headerName: "Level", width: 130 },
  
];


export default function DisplayStudent() {
    
    const [studentArray, setStudentArray] = useState([]);
    //**Fetch student data from the api */
    useEffect(()=>{
        fetch("http://localhost:8080/student")
        .then(res=>res.json())
        .then(result=>setStudentArray(result))//pass data in row
        .catch(e=>console.log(e))
    }, [studentArray]);

  return (
    <div style={{ height: 200, width: "60%", marginBottom:"15000px", marginTop:"30px", margin:"auto" }}>
        <h1>Student List</h1>
      <DataGrid
        rows={studentArray}
        columns={columns}
        pagesize= {2}
        rowsPerPageOptions={[2]}
        checkboxSelection
        
      />
    </div>
  );
}
