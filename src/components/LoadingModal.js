import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { closeError } from '../actions/common'
import TopModal from './TopModal'
let LoadingModal = ({ dispatch, show, msg }) => (
  <TopModal className={'modal-primary '} isOpen={show}>
    <ModalBody>
      <img src={process.env.PUBLIC_URL + '/img/loading.gif'} /><br />
      <div dangerouslySetInnerHTML={{ __html: msg == undefined ? '数据提交中...' : msg }} />
    </ModalBody>
  </TopModal>
)
const mapStateToProps = (state) => {
  let loading = state.loading
  let show = loading.show
  return { show }
}

LoadingModal = connect(
  mapStateToProps
)(LoadingModal)

export default LoadingModal