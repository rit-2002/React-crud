import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import SearchFilter from "./components/SearchFilter";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const API_URL = "http://localhost:4000/employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "", designation: "", department: "", joiningDate: "", salary: "", email: "", phone: ""
  });
  const [editEmployee, setEditEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const addEmployee = async () => {
    try {
      const response = await axios.post(API_URL, newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({
        name: "", designation: "", department: "", joiningDate: "", salary: "", email: "", phone: ""
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const startEdit = (employee) => {
    setEditEmployee(employee);
    setNewEmployee(employee);
    setShowForm(true);
  };

  const saveEdit = async () => {
    try {
      const response = await axios.put(`${API_URL}/${editEmployee.id}`, editEmployee);
      setEmployees(
        employees.map((emp) => (emp.id === editEmployee.id ? response.data : emp))
      );
      setEditEmployee(null);
      setNewEmployee({
        name: "", designation: "", department: "", joiningDate: "", salary: "", email: "", phone: ""
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error editing employee:", error);
    }
  };

  const filterEmployees = (employees) => {
    return employees.filter((employee) => {
      const search = searchTerm.toLowerCase();
      
      // Check if the employee matches the search term in any of the name, designation, or department fields
      return (
        employee.name.toLowerCase().includes(search) ||
        employee.designation.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search)
      );
    });
  };

  return (
    <Container>
      <h1 className="text-center my-4 header">Employee Management System</h1>
      <Row className="mb-4">
        <Col>
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <EmployeeTable
            employees={employees}
            deleteEmployee={deleteEmployee}
            startEdit={startEdit}
            filteredEmployees={filterEmployees(employees)}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button
            variant="primary"
            onClick={() => {
              setShowForm(!showForm);
              setEditEmployee(null);
              setNewEmployee({
                name: "", designation: "", department: "", joiningDate: "", salary: "", email: "", phone: ""
              });
            }}
          >
            {showForm ? "Cancel" : "Add Employee"}
          </Button>
        </Col>
      </Row>
      {showForm && (
        <Row className="mb-4">
          <Col>
            <EmployeeForm
              newEmployee={newEmployee}
              setNewEmployee={setNewEmployee}
              addEmployee={addEmployee}
              editEmployee={editEmployee}
              setEditEmployee={setEditEmployee}
              saveEdit={saveEdit}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
