import React from 'react';
import logo from './logo.svg';
import './App.css';
import MaradminList from "./components/maradmin-list";
import HeaderTop from "./components/header";
import FooterBottom from "./components/footer";
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;



function App() {
    return (
        <div className="App">
            <Layout>
                <HeaderTop/>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 580 }}>
                        <MaradminList/>
                    </div>
                </Content>
                <FooterBottom/>
            </Layout>
        </div>
    );
}

export default App;
