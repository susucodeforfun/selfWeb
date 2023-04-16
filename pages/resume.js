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
                <div>
                  <h2>
                    My Resume
                  </h2>
                </div>
                <br/>
                <div>
                  <h4>
                    Languages: Proficient: Java; Experience: JavaScript, C/C++, Python, SQL, HTML5, CSS3
                  </h4>
                </div>
                <br/>
                <h4>
                  Tech Skills: Spring, Spring MVC, SpringBoot, Spring Cloud, Spring Data, Redis, Hibernate, RabbitMQ,
                  Kubernetes, Docker, AWS S3, Eureka, Azure, Grafana, Node.js, jQuery, MySQL, MongoDB, Git, Maven
                </h4>
                <br/>
                <h3>Professional Experience</h3>
                <br/>
                <h4>Software Engineer | NV Software</h4>
                <p>
                Hospital Online Appointment Registration System
                <br/>
                • Designed and developed an Online Appointment Registration System using SpringBoot, Mongodb, and Hibernate.
                <br/>
                • Implement a hospital configuration management module which includes functionalities for hospital, department, and schedule management, optimizing image loading speed by encoding images in base64.
                <br/>
                • Built a data dictionary module utilizing Spring Cache and Redis to cache data, which improved the
                page loading speed by 0.7 seconds.
                <br/>
                • Developed a hospital management module using Zookeeper for service registration and discovery,
                integrated data dictionary and hospital configuration management modules, and implemented the hospital list interface and data dictionary display interface. This resulted in an 75% reduction in service delays, thereby enhancing the system’s processing capabilities.
                <br/>
                • Implemented a scheduled task module using Kafka to add scheduled tasks and enable scheduling reminders to enhance user experience.
                <br/>
                • Constructed a log monitoring system using Elasticsearch, Logstash, and Kibana to search and analyze logs, utilization, and network activity data.
                </p>
                <h4>Software Engineer | DXY Health</h4>
                Weibo Spider Data Management System
                <br/>
                • Created a user-friendly dashboard for displaying and retrieving spider data, resulting in a more efficient data analysis process.
                <br/>
                • Implemented full-text index documents in Elasticsearch, enabling fast searching of result from hundreds of thousands of data entries and improving the performance of the search API by 50%.
                <br/>
                • Contributed to team efforts by collaborating with internal teams and effectively communicating technical information.
            </section>
      {/* <section style={{ maxWidth: '1440px', margin: '0 auto', padding: '30px 0' }}>
        <Row type="flex" justify="center">
          <Col>
            <Title level={3}>What I do</Title>
            <Divider style={{ background: '#A06C22', height: '2px', width: 55}} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between" gutter={[24, 24]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="placeholder" src="/placeholder.png" />}
            >
              <Meta title="Security" description={
                <Paragraph>
                  Comprehensive security assessments and audits<br/>
                  Implementation of encryption, authentication, and access control<br/>
                  Continuous monitoring and threat detection <br/>
                  Regular security updates and patches <br/>
                  Compliance with industry and regulatory standards <br/>
                </Paragraph>
              } />
            </Card>
          </Col>
        </Row>
      </section> */}
        </MainLayout>
    )
}