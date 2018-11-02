import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds } from '../actions/common'
import { Badge, Alert, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditHotlineForm from '../forms/EditHotlineForm'
import TopModal from '../components/TopModal'
import { setHotline, getHotlines } from '../actions/building'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'
import BuildingWidget from '../components/BuildingWidget'
const CheckboxTable = checkboxHOC(ReactTable);
class Hotline extends Component {
  componentWillMount() {
    //每次打开时清除页面修改痕迹
    this.props.dispatch(clearEditedIds())
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
    if (nextProps.closeModal)    //保存成功后关闭表单窗口
      this.setState({ showEditHotline: false })
  }
  constructor(props) {
    super(props);
    this.state = {
      showEditHotline: false,//显示修改表单
      showDanger: false,   //显示错误信息
      /*    showHotline: false,   */
      loading: true,
      edit: false,//是否为编辑状态

    };
  }

  componentDidMount() {
    this.props.dispatch(getHotlines({ whereSql: '', page: 0, size: 999 }))
  }
  //切换编辑窗口状态（开、闭）
  toggleShowEditHotline = () => {
    this.setState({
      showEditHotline: !this.state.showEditHotline,
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
    this.props.dispatch(setHotline(values))
  }
  editHotline = (h) => {
    this.props.dispatch(fillForm(h))　　/* 获取当前行信息填充到编辑表单 */
    this.setState({ showEditHotline: true, edit: true })
  }
  columns = [{
    accessor: 'id',
    Header: 'id',
    show: false,

  }, {
    Header: '',
    sortable: false,
    width: 60,
    filterable: false,
    Cell: (c) => (<div>
      <a className="fa fa-edit" style={{ fontSize: 20, color: '#00adff', alignItems: 'top' }}
        onClick={
          (e) => {
            e.stopPropagation()
            this.props.dispatch(fillForm(c.row))　　/* 获取当前行信息填充到编辑表单 */
            this.setState({ showEditHotline: true, edit: true })
          }
        }>
      </a>

    </div>),
    //Footer: 'dddddddddddddd'
  }, {
    accessor: 'name',
    Header: '楼栋名称',
    width: 500,
  }, {
    accessor: 'hotline',
    Header: '管家客服'
  },
  ];

  render() {
    const hotlines = this.props.hotlines
    const checkboxProps = {
      selectType: "checkbox",
    }

    return (
      <div className="animated fadeIn">
        <Row>
          {hotlines.content === undefined ? '' : hotlines.content.map(h => (
            <Col xs="12" sm="6" lg="3">
              <BuildingWidget
                key={h.id}
                title={h.name}
                mainText={h.hotline}
                color={h.hotline === undefined || h.hotline === null||h.hotline==='' ? "danger" : "primary"}
                variant="0"
                action={()=>this.editHotline(h)}
              />
            </Col>
          ))}
        </Row>

        <TopModal isOpen={this.state.showEditHotline} toggle={() => this.toggleShowEditHotline()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditHotline()}>客服电话</ModalHeader>
          <ModalBody>
            <EditHotlineForm readOnly={!this.state.edit} onSubmit={this.submit} closeForm={this.toggleShowEditHotline} />
          </ModalBody>
        </TopModal>

      </div>
    )
  }
}
//获取hotline记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let hotlines = state.cList
  let success = state.success
  let editedIds = state.cList != undefined ? state.cList.editedIds : []
  return { closeModal: success.show, hotlines, editedIds }
}
Hotline = connect(
  mapStateToProps
)(Hotline)
export default Hotline

