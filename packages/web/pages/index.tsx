import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import PageHead from '../components/PageHead/PageHead';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const MainLanding: NextPage = () => {
  const handleEnter = async () => {
    location.href = '/dashboard/';
  };

  return (
    <div className={styles.container}>
      <PageHead />
      <Navigation />
      <main className={styles.main}>
        <Container fluid>
          <Row className={styles.intro}>
            <Col md={1} sm={12}></Col>
            <Col md={6} sm={12}>
              <div className={styles.introContainer}>
                <h1>
                  <div className={styles.mainTitle}>
                    Simplified way to build and deploy smart contracts
                  </div>
                </h1>
                <div className={styles.subtitle}>
                  Create . Deploy . View Insights
                </div>
                <p>
                  Blocks is an advanced blockchain app manager that lets
                  you create, deploy, manage and understand usage for your smart
                  contracts on OPTIMISM, BASE, ZORA and MODE blockchain.
                </p>
                <div style={{ paddingTop: 30 }}>
                  <Button
                    className={styles.buttonHighlight}
                    onClick={() => handleEnter()}
                  >
                    Try the Beta
                  </Button>

                  <Button className={styles.buttonDefault} href="#learn-more">
                    Learn more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={5} sm={12}></Col>
          </Row>
        </Container>
        <Container>
          <div
            id="learn-more"
            style={{ background: '#ffffff', borderRadius: '20px' }}
            className="mt-5 mb-5"
          >
            <Row className="section-container advanced-section">
              <Col lg={7} md={12} sm={12}>
                <div className="feature-image">
                  <img
                    src="/assets/images/homeblock.png"
                    alt="screenshot"
                    className="framed-image"
                  />
                </div>
              </Col>
              <Col lg={5} md={12} sm={12}>
                <div className="advanced-description">
                  <h2>Integrated platform for creating and managing dapps</h2>
                  <h3 className="muted">
                    Just connect your wallet and you're good to go.
                  </h3>
                  <p className="paragraph">
                    Blocks makes dapp creation a breeze. Create smart
                    contracts using preset templates without code, or create
                    your own custom template. Import existing contracts, manage
                    dapps centrally, and link multiple wallets. Leverage robust
                    analytics for insightful app performance.
                  </p>
                </div>
               
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <Row
            id="templates"
            className="section-container"
            style={{ minHeight: 'auto' }}
          >
            <Col md={12} sm={12}>
              <h2 className="section-heading">Build with No Code Templates</h2>
              <p className="section-subheading">
                Build your contract from a growing collection of preset
                templates you can use and customize
              </p>
            </Col>
          </Row>
          <Row className="feature-cards">
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card template">
              <Card body>
                <Card.Title>Token</Card.Title>
                <Card.Subtitle className="mb-2">
                  ERC20 standard token contract used for transactions.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card template">
              <Card body>
                <Card.Title>NFT</Card.Title>
                <Card.Subtitle className="mb-2">
                  ERC721 standard NFT contract to house a collection of unique
                  assets.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card template">
              <Card body>
                <Card.Title>One-Time Subscription</Card.Title>
                <Card.Subtitle className="mb-2">
                  Accept one time payments for product subscription.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card template">
              <Card body>
                <Card.Title>Supply Chain Management</Card.Title>
                <Card.Subtitle className="mb-2">
                  Track and verify products at each stage of a supply chain.
                </Card.Subtitle>
              </Card>
            </Col>
          </Row>
          <Row className="section-container" style={{ minHeight: 'auto' }}>
            <Col md={12} sm={12}>
              <p className="section-subheading">
                ...and many more coming soon.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row
            id="features"
            className="section-container"
            style={{ minHeight: 'auto' }}
          >
            <Col md={12} sm={12}>
              <h2 className="section-heading">More Features</h2>
            </Col>
          </Row>
          <Row className="feature-cards">
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card">
              <Card body>
                <CodeIcon className="feature-icon" />
                <Card.Title>Custom Code</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Can't find the right template? Write your own code!
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card">
              <Card body>
                <ArrowDownwardIcon className="feature-icon" />
                <Card.Title>Contract Import</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Import existing contracts which have been previously deployed
                  so you can manage them together.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="feature-card">
              <Card body>
                <SpeedIcon className="feature-icon" />
                <Card.Title>Dashboard & Analytics</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  See details and statistics for your deployed contracts on the
                  blockchain.
                </Card.Subtitle>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row
            id="pricing"
            className="section-container"
            style={{ minHeight: 'auto', marginTop: '60px' }}
          >
            <Col md={12} sm={12}>
              <h2 className="section-heading">Pricing</h2>
              <h4 className="usability-subtitle">
                We keep things free for as much as we can
              </h4>
            </Col>
          </Row>
          <Row className="pricing-cards">
            <Col xs={12} sm={6} md={6} lg={4} className="pricing-card">
              <Card body>
                <Card.Title>
                  <p>Beta Preview</p>
                </Card.Title>
                <hr />
                <Card.Subtitle className="mb-4" style={{ textAlign: 'center' }}>
                  <h6>Available Now</h6>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  <ul className="pricing-list">
                    <li>Unlimited apps</li>
                    <li>Unlimited linked wallets</li>
                    <li>Analytics Dashboard</li>
                  </ul>
                  <hr />
                  Features are ongoing development and experimental.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="pricing-card">
              <Card body>
                <Card.Title>
                  <p>Standard Free</p>
                </Card.Title>
                <hr />
                <Card.Subtitle className="mb-4" style={{ textAlign: 'center' }}>
                  <h6>Coming Soon</h6>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  <ul className="pricing-list">
                    <li>Up to 3 apps</li>
                    <li>Up to 6 linked wallets</li>
                    <li>Basic Analytics</li>
                  </ul>
                  <hr />
                  Stable release.
                </Card.Subtitle>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="pricing-card">
              <Card body>
                <Card.Title>
                  <p>Pro</p>
                </Card.Title>
                <hr />
                <Card.Subtitle className="mb-4" style={{ textAlign: 'center' }}>
                  <h6>Coming Soon</h6>
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  <ul className="pricing-list">
                    <li>Up to 10 apps</li>
                    <li>Up to 20 linked wallets</li>
                    <li>Advanced Analytics</li>
                  </ul>
                  <hr />
                  Stable release.
                  <br />
                  Pricing announced soon.
                </Card.Subtitle>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <div id="beta" style={{ background: '#c4e2d2', marginTop: '120px' }}>
            <Row className="section-container advanced-section">
              <Col md={1} sm={1}></Col>
              <Col md={5} sm={5}>
                <div className="advanced-description">
                  <h2>Early Access Beta Preview</h2>
                  <p className="paragraph">
                    Be among the first to experience our beta preview and
                    experience a new way of creating and deploying smart
                    contracts. We welcome your valuable feedback as it can
                    significantly shape Block's future.{' '}
                  </p>
                </div>
                <div>
                  <Button
                    className={styles.buttonHighlight}
                    onClick={() => handleEnter()}
                  >
                    Try the Beta
                  </Button>
                </div>
              </Col>
              <Col md={5} sm={5}>
                <div className="illustration">
                  <img src="/assets/illustrations/37.svg" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  return {
    props: {},
  };
};

export default MainLanding;
