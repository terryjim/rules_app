import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds } from '../actions/common'
import {loginOut} from "../actions/auth"
import { Badge, Alert, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditMsgPhoneForm from '../forms/EditMsgPhoneForm'
import TopModal from '../components/TopModal'
import { setMsgPhone, getMsgPhone } from '../actions/department'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'
import BuildingWidget from '../components/BuildingWidget'
const CheckboxTable = checkboxHOC(ReactTable);
class MsgPhone extends Component {
  componentWillMount() {
    //每次打开时清除页面修改痕迹
    this.props.dispatch(clearEditedIds())
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
    if (nextProps.closeModal)    //保存成功后关闭表单窗口
      this.setState({ showEditMsgPhone: false })
     
  }
  constructor(props) {
    super(props);
    this.state = {
      showEditMsgPhone: false,//显示修改表单
      showDanger: false,   //显示错误信息
      /*    showHotline: false,   */
      loading: true,
      edit: false,//是否为编辑状态

    };
  }

  componentDidMount() {
    this.props.dispatch(getMsgPhone())
  }
  //切换编辑窗口状态（开、闭）
  toggleShowEditMsgPhone = () => {
    this.setState({
      showEditMsgPhone: !this.state.showEditMsgPhone,
    });
  }
  //切换查看窗口状态（开、闭）
  /*   toggleShowHotline = () => {
      this.setState({
        showHotline: !this.state.showHotline,
      });
    } */
  //切换错误窗口状态（开、闭）  
  toggleShowDanger = () => {
    this.setState({
      showDanger: !this.state.showDanger,
    });
  }
  submit = (values) => {
    this.props.dispatch(setMsgPhone(values.msgPhone))
  }
  editMsgPhone = (h) => {
    this.props.dispatch(fillForm(h))　　/* 获取当前行信息填充到编辑表单 */
    this.setState({ showEditMsgPhone: true, edit: true })
  }
  

  render() {
    const msgPhones = this.props.msgPhones
   

    return (
      <div className="animated fadeIn">
        <Row>
          {msgPhones.content === undefined ? '' : msgPhones.content.map(h => (
            <Col xs="12" sm="6" lg="3">
              <BuildingWidget
                key={h.id}
                title='电话'
                mainText={h.msgPhone}
                color={h.msgPhone === undefined || h.msgPhone === null||h.msgPhone==='' ? "danger" : "primary"}
                variant="0"
                action={()=>this.editMsgPhone(h)}
              />
            </Col>
          ))}
        </Row>

        <TopModal isOpen={this.state.showEditMsgPhone} toggle={() => this.toggleShowEditMsgPhone()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditMsgPhone()}>短信接收电话</ModalHeader>
          <ModalBody>
            <EditMsgPhoneForm readOnly={!this.state.edit} onSubmit={this.submit} closeForm={this.toggleShowEditMsgPhone} />
          </ModalBody>
        </TopModal>

      </div>
    )
  }
}
//获取hotline记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let msgPhones = state.cList
  let success = state.success
  let editedIds = state.cList != undefined ? state.cList.editedIds : []
  return { closeModal: success.show, msgPhones, editedIds }
}
MsgPhone = connect(
  mapStateToProps
)(MsgPhone)
export default MsgPhone

