import React from 'react';
import { Card} from "antd";

/** @type {{search: React.CSSProperties}} */
const gridStyle = {
    width: '20%',
    textAlign: 'center',
} as React.CSSProperties;

class UsefulLinks extends React.Component {


    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Card title="Useful Marine Links">
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/Marines/#panel-0-608">Training and Education</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/Marines/#panel-1-608">Careers</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/Marines/#panel-2-608">Publications</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/Marines/#panel-3-608">Marine Services</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/Marines/#panel-4-608">News and Media</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marinenet.usmc.mil/my.policy">Marine Net</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://sso.tfs.usmc.mil/sso/DoDConsent.do">Marine On Line</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/News/Messages/MARADMINS.aspx">Marine Admin</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.public.navy.mil/bupers-npc/reference/messages/ALNAVS/Pages/default.aspx">All Navy</a></Card.Grid>
                    <Card.Grid style={gridStyle}><a target='_blank' href="https://www.marines.mil/News/Messages/ALMARS.aspx">All Marine</a></Card.Grid>
                </Card>,
            </div>
        )
    }


}

export default UsefulLinks;