import React from 'react';
import { Card, Row, Col } from "antd";


const gridStyle = {
    width: '100%',
    textAlign: 'center',
} as React.CSSProperties;

class UsefulLinks extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Card title="Useful Marine Links">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marines.mil/Marines/#panel-0-608">Training and Education</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marines.mil/Marines/#panel-1-608">Careers</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marines.mil/Marines/#panel-2-608">Publications</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div ><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marinenet.usmc.mil/my.policy">Marine Net</a></Card.Grid></div>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://sso.tfs.usmc.mil/sso/DoDConsent.do">Marine On Line</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marines.mil/News/Messages/MARADMINS.aspx">Marine Admin</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.public.navy.mil/bupers-npc/reference/messages/ALNAVS/Pages/default.aspx">All Navy</a></Card.Grid></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div><Card.Grid style={gridStyle}><a target='_blank'rel="noopener noreferrer" href="https://www.marines.mil/News/Messages/ALMARS.aspx">All Marine</a></Card.Grid></div>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }


}

export default UsefulLinks;