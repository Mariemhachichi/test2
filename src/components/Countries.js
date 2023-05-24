import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Carte from './Carte';


const Countries = () => {
    const [data, setdata] = useState([])
    const [rangeC, setrangeC] = useState(36)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setdata(res.data))
    }, [])
    return (
        <div>
            <h1>Countries</h1>

            <Form.Range defaultValue={rangeC} onChange={(e) => setrangeC(e.target.value)} />
            <Container>
                <Row>
                    {data
                        .slice(0, rangeC)
                        .map((Country, index) => (
                            <Col md={{ span: 2, offset: 1 }}>
                                <Carte key={index} props={Country} />
                            </Col>))}
                </Row>
            </Container>

        </div>
    );
};

export default Countries;