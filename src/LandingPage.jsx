import React from 'react';
import { 
  Layout, 
  Button, 
  Typography, 
  Row, 
  Col, 
  Card, 
  Space, 
  Avatar,
  Divider,
  Tag,
  Statistic,
  Badge
} from 'antd';
import {
  RocketOutlined,
  StarOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  TeamOutlined,
  DashboardOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { Brain, Zap, Shield, Users, BarChart3, Sparkles } from 'lucide-react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const LandingPage = () => {
  const features = [
    {
      icon: <Brain size={32} color="#1890ff" />,
      title: "Advanced AI Processing",
      description: "Leverage cutting-edge artificial intelligence to automate complex tasks and boost productivity."
    },
    {
      icon: <Zap size={32} color="#52c41a" />,
      title: "Lightning Fast",
      description: "Process data and generate insights in seconds, not hours. Experience the speed of modern AI."
    },
    {
      icon: <Shield size={32} color="#722ed1" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption to keep your data safe and compliant."
    },
    {
      icon: <Users size={32} color="#eb2f96" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team. Share insights and collaborate in real-time."
    },
    {
      icon: <BarChart3 size={32} color="#fa8c16" />,
      title: "Smart Analytics",
      description: "Get detailed analytics and insights to make data-driven decisions for your business."
    },
    {
      icon: <Sparkles size={32} color="#13c2c2" />,
      title: "Intelligent Automation",
      description: "Automate repetitive tasks and focus on what matters most with smart AI workflows."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      features: ["Up to 100 AI requests/month", "Basic analytics", "Email support", "Core AI features"],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: ["Up to 5,000 AI requests/month", "Advanced analytics", "Priority support", "All AI features", "Team collaboration", "API access"],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited AI requests", "Custom integrations", "Dedicated support", "White-label options", "Advanced security", "SLA guarantee"],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { title: "10M+", value: "AI Requests Processed" },
    { title: "50K+", value: "Happy Customers" },
    { title: "99.9%", value: "Uptime Guarantee" },
    { title: "24/7", value: "Support Available" }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ 
        background: '#fff', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '0 5%',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        top: 0
      }}>
        <Row justify="space-between" align="middle" style={{ height: '64px' }}>
          <Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Brain size={32} color="#1890ff" style={{ marginRight: '12px' }} />
              <Title level={3} style={{ margin: 0, color: '#1890ff', fontWeight: 'bold' }}>
                HUINYA
              </Title>
            </div>
          </Col>
          <Col>
            <Space size="large">
              <Button type="text">Features</Button>
              <Button type="text">Pricing</Button>
              <Button type="text">About</Button>
              <Button>Sign In</Button>
              <Button type="primary" size="large">
                Get Started
              </Button>
            </Space>
          </Col>
        </Row>
      </Header>

      <Content style={{ marginTop: '64px' }}>
        {/* Hero Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '120px 5% 80px',
          textAlign: 'center',
          color: 'white'
        }}>
          <Row justify="center">
            <Col xs={24} md={20} lg={16}>
              <Badge.Ribbon text="AI Powered" color="#52c41a">
                <Title level={1} style={{ 
                  color: 'white', 
                  fontSize: '3.5rem', 
                  fontWeight: 'bold',
                  marginBottom: '24px',
                  lineHeight: 1.2
                }}>
                  The Future of AI-Powered
                  <br />
                  <Text style={{ color: '#f0f0f0' }}>Productivity</Text>
                </Title>
              </Badge.Ribbon>
              
              <Paragraph style={{ 
                fontSize: '1.25rem', 
                color: '#f0f0f0', 
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                Transform your workflow with HUINYA's advanced AI technology. 
                Automate tasks, generate insights, and boost productivity like never before.
              </Paragraph>
              
              <Space size="large">
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<RocketOutlined />}
                  style={{ height: '50px', fontSize: '16px', padding: '0 40px' }}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="large" 
                  ghost
                  style={{ height: '50px', fontSize: '16px', padding: '0 40px' }}
                >
                  Watch Demo
                </Button>
              </Space>
            </Col>
          </Row>
        </div>

        {/* Stats Section */}
        <div style={{ padding: '60px 5%', background: '#fafafa' }}>
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} md={6} key={index}>
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} style={{ color: '#1890ff', margin: 0 }}>
                    {stat.title}
                  </Title>
                  <Text style={{ fontSize: '16px', color: '#666' }}>
                    {stat.value}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Features Section */}
        <div style={{ padding: '100px 5%' }}>
          <Row justify="center" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={16} style={{ textAlign: 'center' }}>
              <Title level={2} style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                Powerful Features for Modern Teams
              </Title>
              <Paragraph style={{ fontSize: '1.125rem', color: '#666' }}>
                Discover how HUINYA's AI-powered features can revolutionize your workflow
                and help you achieve more in less time.
              </Paragraph>
            </Col>
          </Row>
          
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card 
                  hoverable
                  style={{ 
                    height: '100%', 
                    borderRadius: '12px',
                    border: '1px solid #f0f0f0'
                  }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <div style={{ marginBottom: '20px' }}>
                    {feature.icon}
                  </div>
                  <Title level={4} style={{ marginBottom: '16px' }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ color: '#666', marginBottom: 0 }}>
                    {feature.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Pricing Section */}
        <div style={{ padding: '100px 5%', background: '#fafafa' }}>
          <Row justify="center" style={{ marginBottom: '80px' }}>
            <Col xs={24} md={16} style={{ textAlign: 'center' }}>
              <Title level={2} style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                Simple, Transparent Pricing
              </Title>
              <Paragraph style={{ fontSize: '1.125rem', color: '#666' }}>
                Choose the perfect plan for your needs. Start free and scale as you grow.
              </Paragraph>
            </Col>
          </Row>
          
          <Row gutter={[32, 32]} justify="center">
            {pricingPlans.map((plan, index) => (
              <Col xs={24} md={8} key={index}>
                <Badge.Ribbon 
                  text="Most Popular" 
                  color="#1890ff"
                  style={{ display: plan.popular ? 'block' : 'none' }}
                >
                  <Card
                    style={{ 
                      height: '100%', 
                      borderRadius: '12px',
                      border: plan.popular ? '2px solid #1890ff' : '1px solid #f0f0f0',
                      transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
                    }}
                    bodyStyle={{ padding: '40px 32px' }}
                  >
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                      <Title level={4} style={{ marginBottom: '8px' }}>
                        {plan.name}
                      </Title>
                      <div style={{ marginBottom: '16px' }}>
                        <Text style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1890ff' }}>
                          {plan.price}
                        </Text>
                        <Text style={{ fontSize: '1rem', color: '#666' }}>
                          {plan.period}
                        </Text>
                      </div>
                      <Button 
                        type={plan.popular ? "primary" : "default"} 
                        size="large" 
                        block
                        style={{ height: '48px', fontSize: '16px' }}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                    
                    <div>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          marginBottom: '12px' 
                        }}>
                          <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '12px' }} />
                          <Text>{feature}</Text>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1890ff 0%, #722ed1 100%)',
          padding: '80px 5%',
          textAlign: 'center',
          color: 'white'
        }}>
          <Row justify="center">
            <Col xs={24} md={16}>
              <Title level={2} style={{ 
                color: 'white', 
                fontSize: '2.5rem', 
                marginBottom: '24px' 
              }}>
                Ready to Transform Your Workflow?
              </Title>
              <Paragraph style={{ 
                fontSize: '1.25rem', 
                color: '#f0f0f0', 
                marginBottom: '40px' 
              }}>
                Join thousands of teams already using HUINYA to boost their productivity
                and achieve better results with AI.
              </Paragraph>
              <Space size="large">
                <Button 
                  type="primary" 
                  size="large"
                  ghost
                  icon={<ArrowRightOutlined />}
                  style={{ height: '50px', fontSize: '16px', padding: '0 40px' }}
                >
                  Start Your Free Trial
                </Button>
                <Button 
                  size="large"
                  style={{ 
                    height: '50px', 
                    fontSize: '16px', 
                    padding: '0 40px',
                    background: 'white',
                    color: '#1890ff',
                    border: 'none'
                  }}
                >
                  Contact Sales
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ background: '#001529', color: 'white', padding: '60px 5% 30px' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Brain size={32} color="#1890ff" style={{ marginRight: '12px' }} />
              <Title level={3} style={{ margin: 0, color: 'white' }}>
                HUINYA
              </Title>
            </div>
            <Paragraph style={{ color: '#ccc' }}>
              Empowering teams with advanced AI technology to achieve more and work smarter.
            </Paragraph>
          </Col>
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Product
            </Title>
            <div style={{ color: '#ccc' }}>
              <div style={{ marginBottom: '8px' }}>Features</div>
              <div style={{ marginBottom: '8px' }}>Pricing</div>
              <div style={{ marginBottom: '8px' }}>API</div>
              <div style={{ marginBottom: '8px' }}>Documentation</div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Company
            </Title>
            <div style={{ color: '#ccc' }}>
              <div style={{ marginBottom: '8px' }}>About</div>
              <div style={{ marginBottom: '8px' }}>Blog</div>
              <div style={{ marginBottom: '8px' }}>Careers</div>
              <div style={{ marginBottom: '8px' }}>Contact</div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Support
            </Title>
            <div style={{ color: '#ccc' }}>
              <div style={{ marginBottom: '8px' }}>Help Center</div>
              <div style={{ marginBottom: '8px' }}>Community</div>
              <div style={{ marginBottom: '8px' }}>Status</div>
              <div style={{ marginBottom: '8px' }}>Security</div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
              Legal
            </Title>
            <div style={{ color: '#ccc' }}>
              <div style={{ marginBottom: '8px' }}>Privacy</div>
              <div style={{ marginBottom: '8px' }}>Terms</div>
              <div style={{ marginBottom: '8px' }}>Cookies</div>
              <div style={{ marginBottom: '8px' }}>GDPR</div>
            </div>
          </Col>
        </Row>
        <Divider style={{ borderColor: '#333', margin: '40px 0 20px' }} />
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: '#ccc' }}>
              © 2024 HUINYA. All rights reserved.
            </Text>
          </Col>
          <Col>
            <Space>
              <Text style={{ color: '#ccc' }}>Follow us:</Text>
              <Button type="text" style={{ color: '#ccc' }}>Twitter</Button>
              <Button type="text" style={{ color: '#ccc' }}>LinkedIn</Button>
              <Button type="text" style={{ color: '#ccc' }}>GitHub</Button>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default LandingPage; 