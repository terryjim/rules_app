import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {confirm,closeConfirm } from '../actions/common'
import TopModal from './TopModal'
let ConfirmModal = ({ dispatch, show, msg,module,operate }) => (
  <TopModal isOpen={show} toggle={() => dispatch(closeConfirm())}
                  className={'modal-danger '}> 
                  <ModalHeader toggle={() => dispatch(closeConfirm())}>确认信息</ModalHeader>
                  <ModalBody>
                  <div dangerouslySetInnerHTML={{ __html: msg }} />{/* 您是否确定要删除选中的记录？ */}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={() => dispatch(confirm(module,operate))}>确定</Button>{' '}
                    <Button color="secondary" onClick={() => dispatch(closeConfirm())}>取消</Button>
                  </ModalFooter>
                </TopModal>  
)
const mapStateToProps = (state) => {
  let confirm = state.confirm
  let show = confirm.show
  let msg=confirm.msg
  let module=confirm.module  
  let operate=confirm.operate
  return { show,msg,module,operate}
}

ConfirmModal = connect(
  mapStateToProps
)(ConfirmModal)

export default ConfirmModal