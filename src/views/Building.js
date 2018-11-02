import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds } from '../actions/common'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditBuildingForm from '../forms/EditBuildingForm'
import TopModal from '../components/TopModal'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'

const CheckboxTable = checkboxHOC(ReactTable);

class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditBuilding: false,//显示修改表单
      showDanger: false,   //显示错误信息
      edit: false,//是否为编辑状态
      selectAll: false,
      loading: true
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
  }

  //切换编辑窗口状态（开、闭）
  toggleShowEditBuilding = () => {
    this.setState({
      showEditBuilding: !this.state.showEditBuilding,
    });
  }
  //切换错误窗口状态（开、闭）  
  toggleShowDanger = () => {
    this.setState({
      showDanger: !this.state.showDanger,
    });
  }
  /*   submit = (values) => {
      console.log(values)
  
      this.props.dispatch(saveForm(values, 'building'))
      this.setState({ showEditBuilding: false })
    } */
  columns = [{
    accessor: 'id',
    Header: 'id',
    show: false,
  }, {
    id: 'index',
    Header: '序号',
    filterable: false,
    width: 60,
    Cell: props => (props.page * props.pageSize + props.viewIndex + 1),
    sortable: false
  }, {
    accessor: 'projectName',
    Header: '楼盘名称', show: false,
  }, {
    accessor: 'projectId',
    Header: '楼盘ID',
    show: false,
  }, {
    accessor: 'name',
    Header: '楼栋名称',
    width: 300
  }, {
    accessor: 'category',
    Cell: ({ value }) => value == 1 ? '社区' : value == 2 ? '商办' : value == 3 ? '社区与商办' : '',
    Header: '楼栋类型',
    width: 160,
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ''}
      >
        <option value={1}>社区</option>
        <option value={2}>商办</option>
        <option value={3}>社区与商办</option>
        <option value={''}>不限</option>
      </select>,
  }, {
    id: 'units',
    accessor: d => {
      if (d.structure != undefined)
        return d.structure.length
    },
    Header: '单元数', width: 120
  }, {
    id: 'floors',
    accessor: d => {
      if (d.structure != undefined && d.structure[0] != undefined && d.structure[0].floors != undefined)
        return d.structure[0].floors.length
    }, Header: '楼层数', width: 120
  }, {
    accessor: 'remark',
    Header: '备注',
  }
  ];

  render() {

    let buildings = this.props.buildings
    return (
      <div className="animated fadeIn">
        <ReactTable keyField='id' data={buildings.content}
          pages={buildings.totalPages} columns={this.columns} defaultPageSize={window.TParams.defaultPageSize} filterable
          className="-striped -highlight"
          /* onPageChange={(pageIndex) => this.props.dispatch(getBuilding({page:pageIndex,size:10}))}  */
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          total={buildings.totalElements}
          PaginationComponent={MyPagination}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          loading={this.state.loading}
          style={{
            height: document.body.clientHeight - 180 // This will force the table body to overflow and scroll, since there is not enough room
            , backgroundColor: '#FFFFFF'
          }}
          getTheadProps={() => {
            return {
              style: {
                height: '40px', boxShadow: '0px 1px 3px rgba(34, 25, 25, 0.5)',
              }
            };
          }}
          getTheadThProps={() => {
            return {
              style: {
                marginTop: '5px'
              }
            };
          }}
          getTdProps={(state, rowInfo, column) => {
            return {
              style: {
                textAlign: "center"
              }
            };
          }}
          onFetchData={(state, instance) => {
            let whereSql = ''
            state.filtered.forEach(
              v => {
                if (v.id === 'units')
                  whereSql += ' and  json_length(structure)=' + v.value
                else if (v.id === 'floors')
                  whereSql += " and  json_length(JSON_EXTRACT(structure,'$[0].floors'))=" + v.value
                else
                  whereSql += ' and ' + v.id + ' like \'%' + v.value + '%\''
              }
            )

            this.props.dispatch(getList({ whereSql, page: state.page, size: state.pageSize }, 'building'))
          }}
          getTrProps={
            (state, rowInfo, column, instance) => {
              let style = {}
              if ((this.props.editedIds != undefined) && rowInfo != undefined && this.props.editedIds.includes(rowInfo.row.id)) {
                style.background = '#c8e6c9';
              }

              return {
                style, onDoubleClick: (e, handleOriginal) => {

                  this.props.dispatch(fillForm(rowInfo.row));
                  this.setState({ showEditBuilding: true, edit: false })
                },
                onClick: (e, handleOriginal) => {
                  //
                }
              }
            }
          }

        />
        {/*  <div className="row">

          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> 管理员设置
              </div>
              <div className="card-block"> */}

        <TopModal style={{ "maxWidth": "950px" }} isOpen={this.state.showEditBuilding} toggle={() => this.toggleShowEditBuilding()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditBuilding()}>住户分配信息</ModalHeader>
          <ModalBody>
            <EditBuildingForm readOnly={!this.state.edit} onSubmit={this.submit} closeForm={this.toggleShowEditBuilding} />
          </ModalBody>
        </TopModal>
        {/*  <TopModal isOpen={this.state.showBuilding} toggle={() => this.toggleShowBuilding()}
                  className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={() => this.toggleShowBuilding()}>查看记录</ModalHeader>
                  <ModalBody>
                    <EditBuildingForm readOnly={true} />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleShowBuilding}>关闭</Button>
                  </ModalFooter>
                </TopModal> */}
        {/* </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}
//获取building记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let buildings = state.cList

  let editedIds = state.editedIds

  return { buildings, editedIds }
}


Building = connect(
  mapStateToProps
)(Building)
export default Building;
