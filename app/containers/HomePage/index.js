/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Layout, Button, Row, Col, List, Icon } from 'antd';
import messages from './messages';
import logo from '../../images/logo.svg';
import './index.css';

const { Header, Content, Footer } = Layout;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const defaultSelected = ['Products'];
    const authenticated = true;

    return (
      <Layout className="layout">
        <Header className="header-light">
          <Row type="flex" justify="space-between">
            <Col span={15}>
              <img className="logo" src={logo} alt="logo" />
            </Col>
            <Col span={4} offset={4}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={defaultSelected}
                style={{ lineHeight: '64px' }}
                id="nav"
                key="nav"
              >
                <Menu.Item key="products">
                  <FormattedMessage {...messages.headerNavEntryProducts} />
                </Menu.Item>
                <Menu.Item key="documentation">
                  <FormattedMessage {...messages.headerNavEntryDocumentation} />
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={1}>
              <Button
                type={authenticated ? 'primary' : 'default'}
                shape="circle"
                icon={authenticated ? 'logout' : 'login'}
              />
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <div
              className="banner"
              style={{ background: '#fff', padding: 100, minHeight: 280 }}
            >
              <h1 style={{ textAlign: 'center' }}>
                <FormattedMessage {...messages.contentKeyMessage} />
              </h1>
              <div
                className="urgent-call-to-action"
                style={{ textAlign: 'center', padding: '45px' }}
              >
                <Button type="primary" icon="double-right" size="large" ghost>
                  <FormattedMessage {...messages.contentActionButton} />
                </Button>
              </div>
            </div>
          </Row>
          <Row gutter={16} style={{ padding: '0 30px' }}>
            <h1 style={{ padding: '45px' }}>
              <FormattedMessage {...messages.contentPoductsHeading} />
            </h1>
            <Col span={12}>
              <List
                header={
                  <div>
                    <h2>
                      <Icon type="api" />{' '}
                      <FormattedMessage
                        {...messages.poductsSubHeadingServices}
                      />
                    </h2>
                  </div>
                }
                bordered
                dataSource={this.props.services}
                renderItem={item => <List.Item>{item.name}</List.Item>}
                style={{ background: '#fff' }}
              />
            </Col>
            <Col span={12}>
              <List
                header={
                  <div>
                    <h2>
                      <Icon type="block" />{' '}
                      <FormattedMessage
                        {...messages.poductsSubHeadingPlatform}
                      />
                    </h2>
                  </div>
                }
                bordered
                dataSource={this.props.platform}
                renderItem={item => <List.Item>{item.name}</List.Item>}
                style={{ background: '#fff' }}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Zealous © 2018</Footer>
      </Layout>
    );
  }
}
