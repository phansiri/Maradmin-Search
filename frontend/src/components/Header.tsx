import React from 'react';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';

const { Header } = Layout;

function HeaderTop() {
    return (
        <div>
            <Header className='header'>
                <Title level={2}><a href="/">Maradmin Search</a></Title>
            </Header>
        </div>
    )
}
export default HeaderTop;