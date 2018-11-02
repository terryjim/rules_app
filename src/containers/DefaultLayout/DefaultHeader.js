import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink,Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import {chgPwd,getUserInfo} from '../../actions/auth'
const propTypes = { 
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  componentWillMount(){
    if(this.props.user==null)
      this.props.dispatch(getUserInfo())
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: '智生活' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: '智生活' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <div style={{fontSize: 20,color:'#8bc34a'}}>&nbsp;&nbsp;&nbsp;&nbsp;规则设定平台</div>
       {/*  <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="管理员" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
            {/*   <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider /> */}
              <DropdownItem ><NavLink href={'/#/chgPwd'} className="nav-link" ><i className="fa fa-shield"></i> 修改密码</NavLink></DropdownItem>
              <DropdownItem><NavLink href={'/#/login'} className="nav-link" ><i className="fa fa-lock"></i> 注销</NavLink></DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

//获取Department记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let user = state.user
return {user}
}


DefaultHeader = connect(
  mapStateToProps
)(DefaultHeader)
export default DefaultHeader;

