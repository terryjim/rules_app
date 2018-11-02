import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactTable from "react-table";
import "react-table/react-table.css";
import checkboxHOC from "react-table/lib/hoc/selectTable";

import { getBuildingsByDepartment } from '../actions/building';
const CheckboxTable = checkboxHOC(ReactTable);

//分配楼栋表格
class BuildingsAllotTable extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(getBuildingsByDepartment(props.pid))
    this.state = {
      unit: props.unit,
      data: props.data,
      selection: [],
      selectAll: false,
      //[{name:1,rooms:[01,02,03]}]}]
    };
    /*  this.renderEditable = this.renderEditable.bind(this);*/
    //    props.handleTableValues({ unit: props.unit, floors: this.state.data })
  }
  componentDidMount() {
    //this.props.handleTableValues({ unit: this.props.unit, floors: this.state.data })
    let buildings = this.props.allotBuildings  
    if (buildings != undefined&&buildings!='') {
      buildings = buildings.split(',')
      let allotBuildings = buildings.map(x => x.id)
      this.setState({ selection: buildings })
    }
  }
  componentDidUpdate() {
    this.props.handleTableValues({ buildings: this.state.selection })
  }
  componentWillReceiveProps(nextProps) {
    // this.setState({ data: nextProps.data })

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

  /* submit = (values) => {
     console.log(values)
 
     this.props.dispatch(saveForm(values, 'project'))
     this.setState({ showEditProject: false })
   }*/
  columns = [{
    accessor: 'id',
    Header: 'id',
    show: false,

  }, {
    accessor: 'name',
    Header: '分配楼栋',

  }
  ];

  render() {
    const { toggleSelection, toggleAll, isSelected } = this;
    const { selectAll } = this.state;
    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: "checkbox",
    };
    let buildingList = this.props.buildingList

    return (
      <div className="animated fadeIn">

        <CheckboxTable ref={r => (this.checkboxTable = r)} keyField='id' data={buildingList}
          showPagination={false}
          columns={this.columns}
          className="-striped -highlight"
          resizable={false}
          minRows={3}
          defaultPageSize={999}
          noDataText='无数据'
          getTrProps={
            (state, rowInfo, column, instance) => {
              let style = {}
              if ((this.props.editedIds != undefined) && rowInfo != undefined && this.props.editedIds.includes(rowInfo.row.id)) {
                style.background = '#c8e6c9';
              }
              if (rowInfo != undefined && this.state.selection.includes(rowInfo.row.id)) {
                style.background = '#62c2de';
              }
              return {
                style,
                onClick: (e, handleOriginal) => {
                  if (e.ctrlKey) {
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

      </div>
    )
  }
}
//获取project记录集及修改记录ＩＤ数组
const mapStateToProps = (state) => {
  let buildingList = state.buildingList
  console.log(buildingList)

  return { buildingList }
}


BuildingsAllotTable = connect(
  mapStateToProps
)(BuildingsAllotTable)



export default BuildingsAllotTable