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



class MaradminList extends React.Component {

    private searchInput: any;

    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = (dataIndex: any) => ({
        filterDropdown: (itemFilter: any) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={(itemFilter.selectedKeys)[0]}
                    onChange={e => itemFilter.setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(itemFilter.selectedKeys, itemFilter.confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(itemFilter.selectedKeys, itemFilter.confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => this.handleReset(itemFilter.clearFilters)}
                        size="small"
                        style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: string) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value: any, record: { [x: string]: any; }) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : false,
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text: any) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (text),
    });

    handleSearch = (selectKeys: any[], confirm: () => void, dataIndex: any) => {
        confirm();
        this.setState({
            searchText: selectKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters: () => void) => {
      clearFilters();
      this.setState({ searchText: '' })
    };


    render() {

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
                ...this.getColumnSearchProps('title')
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

        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
            )
    }


}

export default MaradminList;
