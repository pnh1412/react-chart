import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Select, InputNumber, Button, Card, Typography, Tabs } from 'antd';
import Tables from './components/Tables';
const { Header, Content, Footer } = Layout;
const { Paragraph } = Typography;
const { TabPane } = Tabs;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const Chart: React.FC = () => {
  const [panes, setPanes] = useState([
    { title: 'Tab 1', content: 'Tab 1', key: '1' },
  ]);
  const [activeKey, setActiveKey] = useState('1');
  const [newTabIndex, setNewTabIndex] = useState(2);

  const addNewTab = () => {
    const newKey = String(newTabIndex);
    const newPane = {
      title: `Tab ${newTabIndex}`,
      content: `Content of Tab ${newTabIndex}`,
      key: newKey,
    };
    setPanes([...panes, newPane]);
    setActiveKey(newKey);
    setNewTabIndex(newTabIndex + 1);
  };

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const onEdit = (targetKey: React.Key, action: 'add' | 'remove') => {
    if (action === 'add') {
      addNewTab();
    } else if (action === 'remove') {
      const newPanes = panes.filter(pane => pane.key !== targetKey);
      setPanes(newPanes);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'none'
        }}
      >
        <div className="demo-logo">IBM Chart Editor </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Project</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Row gutter={24}>
            {/* Cột đầu tiên */}
            <Col span={6}>
              <div style={{ textAlign: 'center' }}>
                <h2>Control Centre</h2>
                <Row gutter={16}>
                  <Col span={6}>
                    <div>
                      <p style={{textAlign: 'left'}}>Type:</p>
                      <Select style={{ width: '100%' }}>
                        <Select.Option value="simple">Simple</Select.Option>
                        <Select.Option value="hard">Hard</Select.Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <p style={{textAlign: 'left'}}>Day:</p>
                      <InputNumber placeholder="Enter day" min={0} max={31} step={1} style={{ width: '100%' }} />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <p style={{textAlign: 'left'}}>Time:</p>
                      <InputNumber placeholder="Enter time" min={0} max={24} step={1} style={{ width: '100%' }} />
                    </div>
                  </Col>
                  <Col span={6}>
                    <div>
                      <p style={{textAlign: 'left'}}>Minute:</p>
                      <InputNumber placeholder="Enter minute" min={0} max={59} step={1} style={{ width: '100%' }} />
                    </div>
                  </Col>
                </Row>
                <Col span={24} style={{ marginTop: '16px', paddingLeft: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button type="primary" style={{ marginRight: '8px',}}>
                      Apply
                    </Button>
                    <Button>Reset</Button>
                  </div>
                </Col>  
              </div>
            </Col>

            <Col span={12}>
            <Tabs
      activeKey={activeKey}
      type="editable-card"
      onChange={onChange}
      onEdit={onEdit}
      tabBarExtraContent={<Button onClick={addNewTab}>+</Button>}
    >
      {panes.map(pane => (
        <TabPane tab={pane.title} key={pane.key}>
          <Paragraph>{pane.content}</Paragraph>
        </TabPane>
      ))}
    </Tabs>
            </Col>

            <Col span={6}>
              <div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Chart;
