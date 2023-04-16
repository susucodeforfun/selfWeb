import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Carousel, Row, Col, Card, Typography, Divider } from 'antd';
import MainLayout from '../components/MainLayout';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;
export default function Home() {
    const pageTitle = 'resume';
    return (
      <MainLayout pageTitle={pageTitle}>
      <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '30px 0' }}>
        <Row type="flex" justify="center">
          <Col>
            <Title level={3}>What I did</Title>
            <Divider style={{ background: '#A06C22', height: '2px', width: 55}} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between" gutter={[24, 24]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="placeholder" src="/placeholder.png" />}
            >
              <Meta title="Microservice / Docker" description={
                <Paragraph>
                  Modular software design <br/>
                  Container-based deployment with Docker <br/>
                  API gateway <br/>
                  Service discovery and load balancing<br/>
                  CI/CD pipeline with automated testing and deployment<br/>
                </Paragraph>
              } />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card
              hoverable
              cover={<img alt="placeholder" src="/placeholder.png" />}
            >
              <Meta title="Shared Bicycle management System" description={
                <Paragraph>
                  Developed a shared bike management system to address the issue of noncompliant parking in cities. <br/>
                  The system detects the location and status of shared bikes to ensure parking compliance.<br/>
                </Paragraph>
              } />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="placeholder" src="/placeholder.png" />}
            >
              <Meta title="College Issue Reporting System" description={
                <Paragraph>
                  This web application allows users to post issues related to campus or academic life. <br/>
                  The issues will be categorized by different tags that will help users search for issues similar to theirs.<br/>
                  The application promotes interaction between users with the help of a ‘commenting’ feature. <br/>
                </Paragraph>
              } />
            </Card>
          </Col>
        </Row>
      </section>
        </MainLayout>
    )
}