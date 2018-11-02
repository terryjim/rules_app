import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { login,loginOut } from '../../../actions/auth'
import { Redirect, Route, Switch } from 'react-router-dom';
import SuccessModal from '../../../components/SuccessModal'
import ErrModal from '../../../components/ErrModal'
import ConfirmModal from '../../../components/ConfirmModal'
import LoadingModal from '../../../components/LoadingModal'
class Login extends Component {
  componentWillMount(){
    window.sessionStorage.accessToken=''
    this.props.onLoginOut()
  }
  componentDidUpdate() {   
    if (this.props.token != null && this.props.token != '') {    
      this.props.history.replace('/')
    }
  }
  render() {
   /*  if ( window.sessionStorage.accessToken != undefined && window.sessionStorage.accessToken != '') {
      return <Redirect push to="/" />
    } else */
    return (
      <div className="app flex-row align-items-center">      
         <ErrModal/><SuccessModal/><ConfirmModal/><LoadingModal/>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody onKeyUp={(e) => {
                    e.keyCode === 13 && this.btnLogin.click()
                  }}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <input type="text" className="form-control" placeholder="用户名" ref={userName => this.userName = userName}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <input type="password" className="form-control" placeholder="口令" ref={password => this.password = password} />
                    </InputGroup>
                    <Row>
                    <Col xs="1"/>
                      <Col xs="5">
                        <button color="primary" className="btn btn-primary px-4" ref={btnLogin => this.btnLogin = btnLogin} onClick={() => {
                          if (this.userName.value == '') {
                            alert('请输入用户名')
                            return null
                          }
                          if (this.password.value == '') {
                            alert('请输入密码')
                            return null
                          }
                          this.props.onLogin({ userName: this.userName.value, password: this.password.value })
                        }}>登录</button>
                      </Col>
                      <Col xs="5" className="text-right">
                      <button type="button" className="btn btn-danger px-4" onClick={() => { this.userName.value = ''; this.password.value = '' }}>取消</button>
                      </Col>
                      <Col xs="1"/>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                    <p><img src={process.env.PUBLIC_URL + '/logo.svg'} style={{ width: 50 + '%',height:50 + '%' }} /></p>
                      
                      <h1/><h1/>
                      <h2>智生活规则设定平台</h2>
                      {/* <Button color="primary" className="mt-3" active>Register Now!</Button> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  if (state.user == null)
    return { token: null }
  else
    return { token: state.user.token }
}
const mapDispatchToProps = {  
  onLogin: login,
  onLoginOut:loginOut
}
Login = (connect(
  mapStateToProps,mapDispatchToProps
)(Login)) 
export default Login;
