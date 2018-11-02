import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input, Progress } from 'reactstrap';
import TopModal from '../components/TopModal'
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { connect } from 'react-redux'
import { getInhabitantsByRoom } from '../actions/inhabitant'
import EditOwnerForm from '../forms/EditOwnerForm'
import { bindRoom } from '../actions/owner'
const propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  /*  children: PropTypes.node, */
  className: PropTypes.string,
  cssModule: PropTypes.object,
  invert: PropTypes.bool,
};

const defaultProps = {
  header: '87.500',
  icon: 'fa fa-cogs',
  color: 'info',
  value: '25',
  /*  children: 'Visitors', */
  invert: false,
};
class RoomWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditOwner: false,//显示修改表单
    }
  }
  componentDidMount() {
    let inhabitantList = this.props.inhabitantList
    let { buildingId, unit, floor, room, projectId } = this.props
    if (inhabitantList === undefined || inhabitantList.length === 0 || inhabitantList.findIndex(value => {
      return value.buildingId === buildingId && value.location.unit === unit && value.location.floor === floor && value.location.room === room
    }) < 0) {
      this.props.dispatch(getInhabitantsByRoom({ buildingId, unit, floor, room }))
    }
  }
  componentWillReceiveProps(nextProps) {
    let inhabitantList = this.props.inhabitantList
    let { buildingId, unit, floor, room, projectId } = nextProps
    if (inhabitantList === undefined || inhabitantList.length === 0 || inhabitantList.findIndex(value => {
      return value.buildingId === buildingId && value.location.unit === unit && value.location.floor === floor && value.location.room === room
    }) < 0) {
      this.props.dispatch(getInhabitantsByRoom({ buildingId, unit, floor, room }))
    }
  }
  //切换编辑窗口状态（开、闭）
  toggleShowEditOwner = () => {
    this.setState({
      showEditOwner: !this.state.showEditOwner,
    });
  }
  //提交业主信息表单
  submit = (values) => {
    let ret = { ...values }
    ret.buildingId = this.props.buildingId
    ret.projectId = this.props.projectId
    ret.unit = this.props.unit
    ret.floor = this.props.floor
    ret.room = this.props.room
    if (this.props.owner != undefined)
      ret.id = this.props.owner.id
    this.props.dispatch(bindRoom(ret))
    this.setState({ showEditOwner: false })
  }
  render() {
    const { inhabitants, owner, buildingId, unit, floor, room, className, cssModule, header, icon, color, value, children, invert, inhabitantList, ...attributes } = this.props;
    const progress = { style: '', color: color, value: value };
    const card = { style: '', bgColor: '', icon: icon };

    if (invert) {
      progress.style = 'progress-white';
      progress.color = '';
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames('progress-xs mt-3 mb-0', progress.style);

    return (
      <div className="animated fadeIn">
        <Card onClick={() => this.setState({ showEditOwner: true })} color={inhabitants === undefined || inhabitants.length === 0 ? 'danger' : 'info'} className={classes} {...attributes}>
          <CardBody>
            <Row >
              <Col xs="6" sm="8">
                <div className="h3 mb-0">{owner === undefined ? '' : owner.userName}</div>
              </Col><Col xs="6" sm="4">
                <div className="h1 text-muted text-right mb-2"> <i className={card.icon} ></i>
                </div></Col>
            </Row>{/* <Row>
          <div className="h3 text-muted text-right mb-2" onClick={() => this.setState({ showEditOwner: true })}>{owner === undefined ? '' : owner.userName}               
             
            <i className={card.icon}></i>
          </div></Row> */}
            <div className="h3 mb-0">{header}</div>
            {/*  <div onClick={() => this.setState({ showEditOwner: true })}>{owner === undefined ? '' : owner.userName}               
              </div> */}
            <small className="text-muted text-uppercase font-weight-bold">{inhabitants === undefined || inhabitants.length === 0 ? '未绑定' : '绑定' + inhabitants.length + '人'}</small>
            <Progress className={progress.style} color={progress.color} value={inhabitants === undefined ? 0 : inhabitants.length * 10} />
          </CardBody>
        </Card>
        <TopModal style={{ "max-width": "350px" }} isOpen={this.state.showEditOwner} toggle={() => this.toggleShowEditOwner()}
          className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={() => this.toggleShowEditOwner()}>户主信息</ModalHeader>
          <ModalBody>
            <EditOwnerForm onSubmit={this.submit} closeForm={this.toggleShowEditOwner} header={header} id={owner === undefined ? '' : owner.id} name={owner === undefined ? '' : owner.userName} phone={owner === undefined ? '' : owner.phone} />
          </ModalBody>
        </TopModal>
      </div>
    );
  }
}

RoomWidget.propTypes = propTypes;
RoomWidget.defaultProps = defaultProps;
const mapStateToProps = (state, ownProps) => {
  let inhabitantList = state.inhabitantList
  let inhabitants
  let owner
  let { buildingId, unit, floor, room } = ownProps
  if (inhabitantList !== undefined && inhabitantList.length > 0) {
    let findInhabitants = inhabitantList[inhabitantList.findIndex(value => {
      return value.buildingId === buildingId && value.location.unit === unit && value.location.floor === floor && value.location.room === room
    })]
    if (findInhabitants !== undefined) {
      inhabitants = findInhabitants.inhabitants
      if (inhabitants !== undefined) {
        let ownerIndex = inhabitants.findIndex(value => value.category === 1)
        if (ownerIndex >= 0) {
          owner = {}
          owner.id = inhabitants[ownerIndex].ownerId
          owner.userName = inhabitants[ownerIndex].name
          owner.phone = inhabitants[ownerIndex].phone
        }
      }
    }
  }
  return { inhabitantList, inhabitants, owner }
}
RoomWidget = connect(
  mapStateToProps
)(RoomWidget)
export default RoomWidget;