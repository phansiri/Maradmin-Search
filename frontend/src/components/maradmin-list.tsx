import React from 'react';
import { Table, Input, Button, Space} from "antd";
import { SearchOutlined } from '@ant-design/icons';


const Highlighter = require('react-highlight-words');

const dataSource = [
    {
        "id": 1,
        "number": "302/20",
        "title": "MANPOWER FORCE SHAPING IN SUPPORT OF FORCE DESIGN PHASE ONE",
        "date": "2020-05-21",
        "status": "Active",
        "body_link": "http://www.marines.mil/News/Messages/Messages-Display/Article/2193900/manpower-force-shaping-in-support-of-force-design-phase-one/"
    },
    {
        "id": 2,
        "number": "301/20",
        "title": "JUNE 2020 REGULAR CORPORAL AND SERGEANT PROMOTION AUTHORITY",
        "date": "2020-05-21",
        "status": "Active",
        "body_link": "http://www.marines.mil/News/Messages/Messages-Display/Article/2193885/june-2020-regular-corporal-and-sergeant-promotion-authority/"
    },
    {
        "id": 3,
        "number": "300/20",
        "title": "CONVENING OF THE ACADEMIC YEAR 2021-22 RESERVE OFFICER PROFESSIONAL MILITARY EDUCATION BOARD",
        "date": "2020-05-21",
        "status": "Active",
        "body_link": "http://www.marines.mil/News/Messages/Messages-Display/Article/2193869/convening-of-the-academic-year-2021-22-reserve-officer-professional-military-ed/"
    },
];
const columns = [
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Link',
        dataIndex: 'body_link',
        key: 'body_link',
        render: (text: string) => <a href={text} target='_blank'>{text}</a>
    }
];


class MaradminList extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />;
            </div>
            )
    }


}

export default MaradminList;
