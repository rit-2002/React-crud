import React from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";

const EmployeeForm = ({
  newEmployee,
  setNewEmployee,
  addEmployee,
  editEmployee,
  setEditEmployee,
  saveEdit,
}) => {
  const isEditing = !!editEmployee;

  const validatePhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = () => {
    if (!validatePhoneNumber(newEmployee.phone)) {
      alert("Phone number must be 10 digits long.");
      return;
    }

    if (isEditing) {
      saveEdit();
    } else {
      addEmployee();
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col md={6}>
        <Card
          className="p-4"
          style={{ backgroundColor: "#f8f9fa", borderColor: "#007bff" }}
        >
          <Card.Body>
            <h4 className="text-center mb-4" style={{ color: "#007bff" }}>
              {isEditing ? "Edit Employee" : "Add Employee"}
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={isEditing ? editEmployee.name : newEmployee.name}
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          name: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          name: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter designation"
                  value={
                    isEditing ? editEmployee.designation : newEmployee.designation
                  }
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          designation: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          designation: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  as="select"
                  value={isEditing ? editEmployee.department : newEmployee.department}
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          department: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          department: e.target.value,
                        })
                  }
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Product">Product</option>
                  <option value="Human Resources">Human Resources</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                  type="date"
                  value={
                    isEditing ? editEmployee.joiningDate : newEmployee.joiningDate
                  }
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          joiningDate: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          joiningDate: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter salary"
                  value={isEditing ? editEmployee.salary : newEmployee.salary}
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          salary: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          salary: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={isEditing ? editEmployee.email : newEmployee.email}
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          email: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          email: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number (10 digits)"
                  value={isEditing ? editEmployee.phone : newEmployee.phone}
                  onChange={(e) =>
                    isEditing
                      ? setEditEmployee({
                          ...editEmployee,
                          phone: e.target.value,
                        })
                      : setNewEmployee({
                          ...newEmployee,
                          phone: e.target.value,
                        })
                  }
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleSubmit}>
                  {isEditing ? "Save Changes" : "Add Employee"}
                </Button>
                {isEditing && (
                  <Button
                    variant="secondary"
                    className="ml-2"
                    onClick={() => setEditEmployee(null)}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EmployeeForm;