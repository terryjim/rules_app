import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { closeSuccess } from '../actions/common'
import TopModal from './TopModal'
let SuccessModal = ({ dispatch, show, msg }) => (
  <TopModal className={'modal-success '} isOpen={show} toggle={() => dispatch(closeSuccess())}
    /* className={'modal-primary ' + this.props.className} */>
    <ModalHeader toggle={() => dispatch(closeSuccess())}>操作成功</ModalHeader>
    <ModalBody>
      <div dangerouslySetInnerHTML={{ __html: msg }} />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => dispatch(closeSuccess())}>关闭</Button>{' '}
      {/*  <Button color="secondary" onClick={this.toggleShowEditUser}>Cancel</Button> */}
    </ModalFooter>
  </TopModal>
)
const mapStateToProps = (state) => {
  let success = state.success
  let show = success.show
  let msg = success.msg
  return { show, msg }
}

SuccessModal = connect(
  mapStateToProps
)(SuccessModal)

export default SuccessModal