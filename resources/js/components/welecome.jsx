import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'

  
export default function About (){
    const [students, setStudents] = useState([])

    useEffect(()=>{
        fetchStudents() 
    },[])

    const fetchStudents = async () => {
        await axios.get(`http://localhost:8000/api/student`).then(({data})=>{
            setStudents(data)
        })
    }



    return (
		    <div>
			 	<Card className="mt-3">
			      <Card.Body>
			      <div>
			        <Card.Title>Students List
			        	<Link to="/student/create">
							<Button style={{float:'right'}} className="mb-3 pull-right" variant="primary">Add Student</Button>
						</Link>
			        </Card.Title>
			        </div>
			         <Table striped bordered hover variant="dark">
					     <thead>
					        <tr>
					          <th>#</th>
					          <th>Student Name</th>
					          <th>Roll</th>
					          <th>Student Class</th>
					          <th>Section</th>
					          <th>Address</th>
					          <th>Phone</th>
					          <th>Email</th>
					        </tr>
					      </thead>
					      <tbody>

					      {
                            students.length > 0 && (
                                students.map((row, key)=>(
							        <tr key={key}>
							          <td>{key+1}</td>
							          <td>{row.studentName}</td>
							          <td>{row.roll}</td>
							          <td>{row.studentClass}</td>
							          <td>{row.section}</td>
							          <td>{row.adress}</td>
							          <td>{row.phone}</td>
							          <td>{row.email}</td>
							        </tr>
				                    ))
                                )
                            }
					      </tbody>
					    </Table>
			        
			      </Card.Body>
			    </Card>
		    </div>
		)
}
  
 