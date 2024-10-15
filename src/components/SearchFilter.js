import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import './SearchFilter.css';

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
}) => {
  return (
    <div className="search-filter-container">
      <h2 className="search-filter-title">Search and Filter</h2>
      <Form className="search-filter-form">
        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                placeholder="Search by Name, Designation, or Department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="department">
              <Form.Control
                as="select"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="department-select"
              >
                <option value="">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Product">Product</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchFilter;