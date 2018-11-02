import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds } from '../actions/common'
import { markCompleted } from '../actions/ticket'
import { Badge, Alert, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditOwnerCardForm from '../forms/EditOwnerCardForm'
import TopModal from '../components/TopModal'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'
const CheckboxTable = checkboxHOC(ReactTable);
class OwnerCard extends Component {
  componentWillMount() {
    //每次打开时清除页面修改痕迹
    this.props.dispatch(clearEditedIds())
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
    //确认删除记录操作    
    if (nextProps.confirmDel) {
      this.props.dispatch(delList(this.state.selection, 'card'))
    }   
    if (nextProps.closeModal)    //保存成功后关闭表单窗口
      this.setState({ showEditCard: false })
  }

  constructor(props) {
    super(props);
    this.state = {
      showEditCard: false,//显示修改表单
      showDanger: false,   //显示错误信息
      selection: [],
      edit: false,//是否为编辑状态
      selectAll: false,
      loading: true
    }
  }
 

  toggleSelection = (key, shift, row) => {
    /* 
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  };

  toggleAll = () => {
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach(item => {
        selection.push(item._original.id);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = key => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  };

  //切换编辑窗口状态（开、闭）
  toggleShowEditCard = () => {
    this.setState({
      showEditCard: !this.state.showEditCard,
    });
  }
  //切换查看窗口状态（开、闭）
  /*   toggleShowCard = () => {
      this.setState({
        showCard: !this.state.showCard,
      });
    } */
  //切换错误窗口状态（开、闭）  
  toggleShowDanger = () => {
    this.setState({
      showDanger: !this.state.showDanger,
    });
  }

  submit = (values) => {
    let values2 = Object.assign({}, values)    //不要修改原values对象以防止提交出错时修改了原表单数据

    let location = values2.location.split('-')
    location = [].concat({ unit: location[0], floor: location[1], room: location[2] })
    values2.location = location
    this.props.dispatch(saveForm(values2, 'vOwnerCard'))
  }
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
    accessor: 'buildingId',
    Header: 'buildingId',
    show: false,

  }, {
    Header: '',
    sortable: false,
    width: 60, resizable: false,
    filterable: false,
    Cell: (props) => (<div>
      <a className="fa fa-pencil" style={{ fontSize: 15, color: '#00adff', alignItems: 'top' }}
        onClick={
          (e) => {
            e.stopPropagation()
            this.setState({ selection: [props.row.id] })
            this.props.dispatch(fillForm(props.row))　　/* 获取当前行信息填充到编辑表单 */
            this.setState({ showEditCard: true, edit: true })
          }
        }>
      </a>
      &nbsp;
     <a className="fa fa-remove" style={{ fontSize: 15, color: '#FF5722', alignItems: 'top' }}
        onClick={
          e => {
            e.stopPropagation()
            this.setState({ selection: [props.row.id] })
            this.props.dispatch(showConfirm('是否删除选中记录？', 'card', 'del'))
          }
        }>
      </a>
    </div>)
  }, {
    accessor: 'title',
    Header: '卡名称',

    //accessor: d => (d.processState === 0 ? <Badge className="mr-1" color="danger">未处理</Badge> : <Badge className="mr-1" color="success">已处理</Badge>)
  }, {
    accessor: 'code',
    Header: '卡号',

  }, {
    accessor: 'buildingName',
    Header: '所属楼栋',

    //accessor: d => (d.processState === 0 ? <Badge className="mr-1" color="danger">未处理</Badge> : <Badge className="mr-1" color="success">已处理</Badge>)
  }, {
    id: 'location',
    Header: '房号',
    accessor: d => {
      try {
        let location = d.location[0]
        return `${location.unit}-${location.floor}-${location.room}`
      } catch (e) { return '' }
    },

  }, {
    accessor: 'name',
    Header: '业主',
    //accessor: d => (d.processState === 0 ? <Badge className="mr-1" color="danger">未处理</Badge> : <Badge className="mr-1" color="success">已处理</Badge>)
  }, {
    accessor: 'phone',
    Header: '电话',
    //accessor: d => (d.processState === 0 ? <Badge className="mr-1" color="danger">未处理</Badge> : <Badge className="mr-1" color="success">已处理</Badge>)
  }, {
    accessor: 'startTime',
    Header: '授权开始时间',
    Filter: ({ filter, onChange }) =>
      <Input type="date" onChange={event => onChange(event.target.value)} value={filter ? filter.value : ''} />
  }, {
    accessor: 'endTime',
    Header: '授权结束时间',
    Filter: ({ filter, onChange }) =>
      <Input type="date" onChange={event => onChange(event.target.value)} value={filter ? filter.value : ''} />

  },  /*{
    //accessor: 'enabled',
    id:'enabled',
    Header: '状态',
    width: 80,
    accessor: d => (d.enabled ? ( <Badge color="primary">启用中</Badge>) : ( <Badge color="danger">已禁用</Badge>))
  },*/
  ];

  render() {
    const { toggleSelection, toggleAll, isSelected } = this
    const { selectAll } = this.state
    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
    }
    const cards = this.props.cards
    return (
      <div className="animated fadeIn border-primary" style={{ marginTop: '-15px' }}>
        <div style={{ marginBottom: '8px' }}>
          <Button color="success" size="sm"
            onClick={() => {
              this.props.dispatch(fillForm(null))
              this.setState({ showEditCard: true, edit: true })
            }
            }>
            <i className="fa fa-file-o"></i>&nbsp;新增
        </Button>
          {' '}
          <Button color="danger"
            size="sm"
            onClick={() => {
              if (this.state.selection.length < 1)
                alert('请选择要删除的记录！')
              else
                this.props.dispatch(showConfirm('是否删除选中的' + this.state.selection.length + '条记录？', 'card', 'del'));
            }}>
            <i className="fa fa-remove" ></i>&nbsp;删除
          </Button>
        </div>
        <CheckboxTable ref={r => (this.checkboxTable = r)}
          keyField='id'
          className="-striped -highlight"
          data={cards.content}
          columns={this.columns}
          pages={cards.totalPages}
          total={cards.totalElements}
          //otherInfo="测试测试测试其它数据测试测试测试其它数据测试测试测试其它数据"
          defaultPageSize={window.TParams.defaultPageSize} filterable
          PaginationComponent={MyPagination}
          loading={this.state.loading}
          style={{
            height: document.body.clientHeight - 210 // This will force the table body to overflow and scroll, since there is not enough room
            , backgroundColor: '#FFFFFF'
          }}

          getTheadProps={() => {
            return {
              style: {
                height: '40px', boxShadow: '0px 1px 3px rgba(34, 25, 25, 0.5)',
              }
            };
          }}
          /*   getTheadTrProps={() => {
              return {
                style: {
                  height: '40px', backgroundColor:'red', marginBottom: '5px'
                }
              };
            }} */
          getTheadThProps={() => {
            return {
              style: {
                marginTop: '5px'
              }
            };
          }}
          getTdProps={(state, rowInfo, column) => {
            /*  if (column.id === 'index')
               return {
                 style: {
                   backgroundColor: '#4DBD74', textAlign: "center"
                 }
               };
             else */
            return {
              style: {
                textAlign: "center"
              }
            };
          }}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          onFetchData={(state, instance) => {
            let whereSql = ' and isManage=0'
            state.filtered.forEach(
              v => {
                if (v.id === 'location') {
                  let location = v.value.split('-')
                  location=location.length === 1 ?  { "unit": location[0] } : location.length === 2 ?  { "unit": location[0], "floor": location[1] } : location.length === 3 ?  { "unit": location[0], "floor": location[1], "room": location[2] } : ''
                  whereSql += ' and json_contains(location,\'' + JSON.stringify(location) + '\')>0'
                }
                else if (v.id === 'startTime')
                  whereSql += ' and startTime>=\'' + v.value + '\''
                else if (v.id === 'endTime')
                  whereSql += ' and endTime<=\'' + v.value + '\''
                else
                  whereSql += ' and ' + v.id + ' like \'%' + v.value + '%\''
              }
            )            
            state.sorted.forEach(
              (v, index) => {
                if (v.id === 'title' || v.id === 'name')
                  whereSql += ' order by byGBK(' + v.id + ')' + (v.desc ? " desc" : " asc")
                else
                  whereSql += ' order by  ' + v.id + (v.desc ? " desc" : " asc")
              }
            )
            this.props.dispatch(getList({ whereSql, page: state.page, size: state.pageSize }, 'vOwnerCard'))
          }}
          getTrProps={
            (state, rowInfo, column, instance) => {
              let style = {}
              if (rowInfo != undefined && this.state.selection.includes(rowInfo.row.id)) {
                style.background = '#4DBD74'
                style.color = '#FFFFFF'
              }
              else
                if ((this.props.editedIds != undefined) && rowInfo != undefined && this.props.editedIds.includes(rowInfo.row.id)) {
                  style.background = '#F86C6B'
                  style.color = '#FFFFFF'
                } else
                  style = {}
              return {
                style, onDoubleClick: (e, handleOriginal) => {
                  this.props.dispatch(fillForm(rowInfo.row));
                  this.setState({ showEditCard: true, edit: false })
                },
                onClick: (e, handleOriginal) => {
                  if (e.ctrlKey) {
                    if (this.state.selection.includes(rowInfo.row.id))
                      this.setState({ selection: this.state.selection.filter(x => x !== rowInfo.row.id) })
                    else
                      this.setState({ selection: [rowInfo.row.id, ...this.state.selection] })
                  } else {
                    if (this.state.selection.includes(rowInfo.row.id))
                      this.setState({ selection: [] })
                    else
                      this.setState({ selection: [rowInfo.row.id] })
                  }

                }
              }
            }
          }
          {...checkboxProps}
        />

        <TopModal style={{ "maxWidth": "750px" }} isOpen={this.state.showEditCard} toggle={() => this.toggleShowEditCard()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditCard()}>门禁卡管理</ModalHeader>
          <ModalBody>
            <EditOwnerCardForm readOnly={!this.state.edit} onSubmit={this.submit} closeForm={this.toggleShowEditCard} />
          </ModalBody>
        </TopModal>

      </div>
    )
  }
}
//获取ticket记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let cards = state.cList
  let success = state.success
  let editedIds = state.cList != undefined ? state.cList.editedIds : []
  let confirmDel = state.confirm.module === 'card' && state.confirm.operate === 'del' ? state.confirm.confirm : false
  return { closeModal: success.show, cards, editedIds, confirmDel }
}
OwnerCard = connect(
  mapStateToProps
)(OwnerCard)
export default OwnerCard

