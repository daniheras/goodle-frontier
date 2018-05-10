import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../../../_components/card/card';

const MiniCard = (props) => {
    return (
        <Col xs={6} sm={6} md={3} lg={3} xl={2}>
            <Card>
                <Row className="card-content">
                    <Col xs={5}>
                        <div className="__title">
                            { props.icon }
                            <br/>
                            <span className={"__subtitle"}>{ props.title }</span>
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div  className="__body">
                            { props.body }
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
 
export default MiniCard;