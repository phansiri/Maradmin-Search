import React from 'react';
import './App.css';
import { Layout } from 'antd';
import MaradminList from "./components/MaradminList";
import HeaderTop from "./components/Header";
import FooterBottom from "./components/Footer";
import UsefulLinks from "./components/GridUsefulLinks";


const { Content } = Layout;


function App() {
    return (
        <div className="App">
            <Layout>
                <HeaderTop/>
                <Content className="site-layout" style={{ marginTop: 16 }}>
                    <div className="site-layout-background" style={{ padding: 12, minHeight: 580 }}>
                        <UsefulLinks/>
                        <MaradminList/>
                    </div>
                </Content>
                <FooterBottom/>
            </Layout>
        </div>
    );
}

export default App;
