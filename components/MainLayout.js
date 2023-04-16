import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut } from "next-auth/react";
import { Layout, Menu, Row, Col, Card, Typography, Divider } from 'antd';
import { LoginOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, LoadingOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const MainLayout = ({ children, pageTitle }) => {
    const currentTime = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userTime = new Date(currentTime.toLocaleString('en-US', { timeZone }));
    const userHour = userTime.getHours();
    let greeting;
    if (userHour >= 0 && userHour < 12) {
      greeting = 'Good Morning';
    } else if (userHour >= 12 && userHour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
  
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content="We provide all types of software services and training" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Header style={{background: '#ffffff'}}>    
            <Menu mode="horizontal" selectedKeys={[pageTitle]} style={{display: 'flex', maxWidth: '1440px', margin: '0 auto'}}>
              <Menu.Item key="web">
                <Link href="/introduction">
                  My Introduction
                </Link>
              </Menu.Item>
              <Menu.Item key="backend">
                <Link href="/project">
                  My Project
                </Link>
              </Menu.Item>
              <Menu.Item key="blockchain">
                <Link href="/resume">
                  My Resume
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>{children}</Content>
          
          {/*
            footer
          */}
          <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff',}}>
              <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '30px 0 60px', backgroundColor: '#001529' }}>
                <Row type="flex" justify="center">
                  <Col>
                    <Title level={3} style={{ color: '#fff' }}>Contact Me</Title>
                    <img src="/wechat.jpg" style={{ width: '100px', maxHeight: '100px' }} className={styles.image} alt="Profile Picture" />
                    <Divider style={{ background: '#A06C22', height: '2px', width: 55}} />
                  </Col>
                </Row>
                <Row type="flex" justify="center">
                  <Col style={{ textAlign: 'center', color: '#fff' }}>
                    <MailOutlined /><Link style={{ color: '#fff' }} href="mailto:info@nvsoftware.net"> oliversu0101@gmail.com</Link>
                    <br />
                    <br />
                    <PhoneOutlined/><Link style={{ color: '#fff' }} href="tel: +17753066999"> +1 5514309328</Link>
                    <br />
                    <br />
                  </Col>
                </Row>
              </section>
          </Footer>
        </Layout>
      </>
    );
  };
  
  export default MainLayout;