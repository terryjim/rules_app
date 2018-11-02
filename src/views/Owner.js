import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds, clearCList } from '../actions/common'
import { Badge,Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditBuildingForm from '../forms/EditBuildingForm'
import TopModal from '../components/TopModal'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'
class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
  }
  columns = [{
    id: 'index',
    Header: '序号',
    filterable: false,
    width: 60,
    Cell: props => (props.page * props.pageSize + props.viewIndex + 1),
    sortable: false
  }, {
    accessor: 'id',
    Header: 'id',
    show: false,
  }, {
    id: 'category',
    Header: '类别',
    accessor: d => d.category === 1 ? '业主' : '住户',
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : "0"}
      >
        <option value="1">业主</option>
        <option value="2">住户</option>
        <option value="0">全部</option>
      </select>
  }, {
    accessor: 'name',
    Header: '姓名',
  }, {
    accessor: 'phone',
    Header: '手机号',
  }, {
    accessor: 'buildingId',
    Header: '楼栋ID',
    show: false,
  }, {
    accessor: 'buildingName',
    Header: '所在楼栋',
  }, {
    id: 'location',
    Header: '房号',
    accessor: d => {
      try {
        let location = d.location[0]
        return location.unit + '-' + location.floor + '-' + location.room
      } catch (e) { return '' }
    },
  },
  {
    accessor: 'isDeleted',
    Header: '状态',
    width: 80,
    Cell: ({ value }) => (value ? <Badge className="mr-1" color="danger">已删除</Badge> :''),
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ''}
      >
        <option value={0}>正常</option>
        <option value={1}>已删除</option>
        <option value=''>全部</option>
      </select>,
  }



  ];

  render() {

    let vOwners = this.props.vOwners
    return (
      <div className="animated fadeIn">
        <ReactTable keyField='id' data={vOwners.content}
          pages={vOwners.totalPages} columns={this.columns} defaultPageSize={window.TParams.defaultPageSize} filterable
          total={vOwners.totalElements}
          //otherInfo="测试测试测试其它数据测试测试测试其它数据测试测试测试其它数据"         
          PaginationComponent={MyPagination}
          className="-striped -highlight"
          loading={this.state.loading}
          style={{
            height: document.body.clientHeight - 180
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
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          onFetchData={(state, instance) => {
            let whereSql = ' and category<3'
            state.filtered.forEach(
              v => {
                if (v.id === 'location') {
                  let location = v.value.split('-')
                  location=location.length === 1 ? { "unit": location[0] } : location.length === 2 ? { "unit": location[0], "floor": location[1] } : location.length === 3 ?  { "unit": location[0], "floor": location[1], "room": location[2] } : ''
                  whereSql += ' and json_contains(location,\'' + JSON.stringify(location) + '\')>0'
                } else if (v.id === 'category') {
                  if (v.value !== '0')
                    whereSql += ' and category=' + v.value
                }  else if (v.id === 'isDeleted') {                  
                    whereSql += ' and isDeleted=' + v.value
                } 
                else
                  whereSql += ' and ' + v.id + ' like \'%' + v.value + '%\''
              }
            )
            state.sorted.forEach(
              (v, index) => {
                if (v.id === 'name')
                  whereSql += ' order by byGBK(' + v.id + ')' + (v.desc ? " desc" : " asc")
                else if (v.id === 'location')
                  whereSql += ` order by JSON_EXTRACT(location,'$[0].unit') ${v.desc ? " desc" : " asc"},
                   JSON_EXTRACT(location,'$[0].floor') ${v.desc ? " desc" : " asc"},
                   JSON_EXTRACT(location,'$[0].room') ${v.desc ? " desc" : " asc"}`
                else
                  whereSql += ' order by  ' + v.id + (v.desc ? " desc" : " asc")
              }
            )
            this.props.dispatch(getList({ whereSql, page: state.page, size: state.pageSize }, 'vInhabitant'))
          }}
        />
      </div>
    )
  }
}
//获取building记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let vOwners = state.cList
  return { vOwners }
}
Owner = connect(
  mapStateToProps
)(Owner)
export default Owner;
