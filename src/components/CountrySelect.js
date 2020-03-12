import React from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Button, Container, Row, Col } from "react-bootstrap";

const options = countryList().getData();

const CountrySelect = ({ value, changeHandler, onClick }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Select options={options} value={value} onChange={changeHandler} />
        </Col>
        <Col>
          <Button onClick={onClick} variant="outline-primary">
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountrySelect;
