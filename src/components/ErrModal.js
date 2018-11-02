import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { closeError } from '../actions/common'
import TopModal from './TopModal'
let ErrModal = ({ dispatch, show, msg }) => (
  <TopModal className={'modal-danger '} isOpen={show} toggle={() => dispatch(closeError())}
    /* className={'modal-primary ' + this.props.className} */>
    <ModalHeader toggle={() => dispatch(closeError())}>错误</ModalHeader>
    <ModalBody>
      <div dangerouslySetInnerHTML={{ __html: msg }} />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => dispatch(closeError())}>关闭</Button>{' '}
      {/*  <Button color="secondary" onClick={this.toggleShowEditUser}>Cancel</Button> */}
    </ModalFooter>
  </TopModal>
)
const mapStateToProps = (state) => {
  let err = state.err
  let show = err.show
  let msg = err.msg
  return { show, msg }
}

ErrModal = connect(
  mapStateToProps
)(ErrModal)

export default ErrModal