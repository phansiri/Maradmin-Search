import React, { Component } from 'react';
import { Table, Input, Button, Space} from "antd";
import { SearchOutlined, EyeTwoTone } from '@ant-design/icons';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';



const Highlighter = require('react-highlight-words');


// const dataSource = [
//     {
//         "count": 108,
//         "next": "http://127.0.0.1:8000/api/?limit=100&offset=100",
//         "previous": null,
//         "results": [
//             {
//                 "id": 13965,
//                 "number": "302/20",
//                 "title": "MANPOWER FORCE SHAPING IN SUPPORT OF FORCE DESIGN PHASE ONE",
//                 "date": "2020-05-21",
//                 "status": "Active"
//             },
//             {
//                 "id": 13966,
//                 "number": "301/20",
//                 "title": "JUNE 2020 REGULAR CORPORAL AND SERGEANT PROMOTION AUTHORITY",
//                 "date": "2020-05-21",
//                 "status": "Active"
//             },
//             {
//                 "id": 13967,
//                 "number": "300/20",
//                 "title": "CONVENING OF THE ACADEMIC YEAR 2021-22 RESERVE OFFICER PROFESSIONAL MILITARY EDUCATION BOARD",
//                 "date": "2020-05-21",
//                 "status": "Active"
//             },
//         ]
//     }];



class MaradminList extends Component {

    private searchInput: any;


    state = {
        searchText: '',
        searchedColumn: '',
        backendSource: [],
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
            const data = await res.json();
            this.setState({
                backendSource: data
            });
        } catch (e) {
            console.log(e);
        }
    }

    // render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    //     return (
    //         <div>
    //             <h1>Start of api...stuff</h1>
    //             {console.log(this.state.backendSource)}
    //             {this.state.backendSource.map((item: any) => (
    //                 <div key={item.id}>
    //                     {item.title}
    //                 </div>
    //             ))}
    //         </div>
    //     )
    // }


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
                ...this.getColumnSearchProps('number')
            },
            {
                title: 'Link',
                dataIndex: 'body_link',
                key: 'body_link',
                render: (text: string) => <a href={text} target='_blank' rel="noopener noreferrer"><EyeTwoTone /></a>,
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                ...this.getColumnSearchProps('title'),
                // render: (text: React.ReactNode, record: { body_link: string | undefined; }) => <div>{text} <a href={record.body_link} target='_blank'>link</a></div>,

            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                ...this.getColumnSearchProps('date'),
                responsive: ['lg'] as Breakpoint[],

            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                responsive: ['lg'] as Breakpoint[],
            },

        ];

        return (
            <div>
                <h2>Marine Administration</h2>
                <Table dataSource={this.state.backendSource} columns={columns} />
            </div>
            )
    }

}

export default MaradminList;
