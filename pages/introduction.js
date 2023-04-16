import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Carousel, Row, Col, Card, Typography, Divider } from 'antd';
import MainLayout from '../components/MainLayout';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;
export default function Home() {
    const name = 'Oliver Su';
    const pageTitle = 'intruction';
    return (
        <MainLayout pageTitle={pageTitle}>
            <Head>
              <title>{name}</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About me</h1>
            <div className={styles.header}>
              <h1 className={styles.title}>Hello! I am {name}, a software engineer</h1>
              <br/>
              <img src="/myphoto.jpg" style={{ width: '150px', maxHeight: '200px' }} className={styles.image} alt="Profile Picture" />
            </div>
            <br/>
            <h3>I am very passionate about software development techniques and am always learning and exploring new technologies</h3>
            <br/>
            <h3>On my personal website you can find my work and projects and learn more about me and my experiences</h3>
            <br/>
        </MainLayout>
    )
}