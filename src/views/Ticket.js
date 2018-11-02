import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showConfirm, closeConfirm, getList, saveForm, fillForm, delList } from '../actions/common'
import { clearEditedIds } from '../actions/common'
import { markCompleted } from '../actions/ticket'
import { Badge, Alert, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import EditTicketForm from '../forms/EditTicketForm'
import TopModal from '../components/TopModal'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";
import 'react-table/react-table.css'
import MyPagination from '../components/MyPagination'
const CheckboxTable = checkboxHOC(ReactTable);
class Ticket extends Component {
  componentWillMount() {
    //每次打开时清除页面修改痕迹
    this.props.dispatch(clearEditedIds())
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false })
    //确认删除记录操作    
    if (nextProps.confirmDel) {
      this.props.dispatch(delList(this.state.selection, 'ticket'))
    }
    //标记完成操作    
    if (nextProps.confirmFinish) {
      this.props.dispatch(markCompleted(this.state.selection))
    }
    if (nextProps.closeModal)    //保存成功后关闭表单窗口
      this.setState({ showEditTicket: false })
  }
  constructor(props) {
    super(props);
    this.state = {
      showEditTicket: false,//显示修改表单
      showDanger: false,   //显示错误信息
      selection: [],
      edit: false,//是否为编辑状态
      selectAll: false,
      loading: true
    };
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
  toggleShowEditTicket = () => {
    this.setState({
      showEditTicket: !this.state.showEditTicket,
    });
  }
  //切换查看窗口状态（开、闭）
  /*   toggleShowTicket = () => {
      this.setState({
        showTicket: !this.state.showTicket,
      });
    } */
  //切换错误窗口状态（开、闭）  
  toggleShowDanger = () => {
    this.setState({
      showDanger: !this.state.showDanger,
    });
  }
  submit = (values) => {
    this.props.dispatch(markCompleted([values.id]))
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
    Cell: (props) => (<div>
      <a className="fa fa-check" style={{ fontSize: 15, color: '#00adff', alignItems: 'top' }}
        onClick={
          (e) => {
            e.stopPropagation()
            this.setState({ selection: [props.row.id] })
            this.props.dispatch(showConfirm('是否已处理完成选中的记录？', 'ticket', 'finish'))
          }
        }>
      </a>
      &nbsp;
      <a className="fa fa-remove" style={{ fontSize: 15, color: '#FF5722', alignItems: 'top' }}
        onClick={
          e => {
            e.stopPropagation()
            this.setState({ selection: [props.row.id] })
            this.props.dispatch(showConfirm('是否删除选中记录？', 'ticket', 'del'))
          }
        }>
      </a>
    </div>)
  }, {
    accessor: 'processState',
    Header: '状态',
    width: 80,
    Cell: ({ value }) => (value === 0 ? <Badge className="mr-1" color="danger">未处理</Badge> : <Badge className="mr-1" color="success">已处理</Badge>),
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        value={filter ? filter.value : ''}
      >
        <option value={0}>未处理</option>
        <option value={1}>已处理</option>
        <option value=''>全部</option>
      </select>,
  }, {
    id: 'ticketEvent',
    Header: '类型',
    width: 80,
    accessor: d => (d.ticketEvent === undefined ? '' : d.ticketEvent.eventName)
  }, {
    accessor: 'contact',
    Header: '业主',
    width: 80,
  }, {
    accessor: 'phoneNr',
    Header: '联系电话',
    width: 120,
  }, {
    id: 'location',
    Header: '地址',
    width: 240,
    accessor: d => (d.location === undefined ? '' : d.location.projectName)

  }, {
    accessor: 'createdAt',
    Header: '提交时间', width: 160,
    Filter: ({ filter, onChange }) =>
    <Input type="date" onChange={event => onChange(event.target.value)} value={filter ? filter.value : ''} />

  }, {
    accessor: 'content',
    Header: '事由'
  }, {
    accessor: 'images',
    Header: '附件',
    show: false
  }
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
    const tickets = this.props.tickets
    return (
      <div className="animated fadeIn">
        <div style={{ marginBottom: '8px' }}>
          <Button color="primary" size="sm" onClick={() => {
            if (this.state.selection.length < 1)
              alert('请选择要标记完成的记录！')
            else
              this.props.dispatch(showConfirm('是否已处理完成选中的' + this.state.selection.length + '条记录？', 'ticket', 'finish'))
          }}><i className="fa fa-check" ></i>标记完成</Button>{' '}
          <Button color="danger"
            size="sm"
            onClick={() => {
              if (this.state.selection.length < 1)
                alert('请选择要删除的记录！')
              else
                this.props.dispatch(showConfirm('是否删除选中的' + this.state.selection.length + '条记录？', 'ticket', 'del'));
            }}>
            <i className="fa fa-remove" ></i>&nbsp;&nbsp;删&nbsp;&nbsp;除&nbsp;
          </Button>
        </div>
        <CheckboxTable ref={r => (this.checkboxTable = r)} keyField='id' data={tickets.content}
          pages={tickets.totalPages} columns={this.columns}
          defaultPageSize={window.TParams.defaultPageSize}
          filterable
          className="-striped -highlight"
          total={tickets.totalElements}
          PaginationComponent={MyPagination}
          loading={this.state.loading}
          /* onPageChange={(pageIndex) => this.props.dispatch(getTicket({page:pageIndex,size:10}))}  */
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          style={{
            height: document.body.clientHeight - 220 // This will force the table body to overflow and scroll, since there is not enough room
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
            let whereSql = []
            state.filtered.forEach(
              v => {
                whereSql.push({ 'name': v.id, 'value': v.value })
              }
            )
            let sort = []
            state.sorted.forEach(
              (v, index) => {
                sort.push({ 'name': v.id, 'desc': v.desc })
              }
            )

            this.props.dispatch(getList({ whereSql, page: state.page, size: state.pageSize, sort }, 'ticket'))

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
                  this.setState({ showEditTicket: true, edit: false })
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

        <TopModal isOpen={this.state.showEditTicket} toggle={() => this.toggleShowEditTicket()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditTicket()}>物业报修</ModalHeader>
          <ModalBody>
            <EditTicketForm readOnly={!this.state.edit} onSubmit={this.submit} closeForm={this.toggleShowEditTicket} />
          </ModalBody>
        </TopModal>

      </div>
    )
  }
}
//获取ticket记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let tickets = state.cList
  let success = state.success
  let editedIds = state.editedIds
  let confirmDel = state.confirm.module === 'ticket' && state.confirm.operate === 'del' ? state.confirm.confirm : false
  let confirmFinish = state.confirm.module === 'ticket' && state.confirm.operate === 'finish' ? state.confirm.confirm : false

  return { closeModal: success.show, tickets, editedIds, confirmDel, confirmFinish }


}
Ticket = connect(
  mapStateToProps
)(Ticket)
export default Ticket

