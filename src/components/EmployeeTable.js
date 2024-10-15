import React from "react";
import { Table, Button } from "react-bootstrap";
import "./EmployeeTable.css";

const EmployeeTable = ({ filteredEmployees, deleteEmployee, startEdit }) => {
  return (
    <Table striped bordered hover className="text-center table-custom">
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Joining Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee) => (
          <tr key={employee.id} className="table-row">
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
            <td>{employee.department}</td>
            <td>{employee.joiningDate}</td>
            <td className="action-buttons">
              <Button
                variant="danger"
                onClick={() => deleteEmployee(employee.id)}
                className="animate-button"
              >
                Delete
              </Button>
              <Button
                variant="primary"
                onClick={() => startEdit(employee)}
                className="ml-2 animate-button"
              >
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;