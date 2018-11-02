import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray, formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'

import { InputField, InlineField } from '../components/field'
import { getBuildingsByDepartment } from '../actions/building'
/* import Editor from 'react-umeditor' */
import Ueditor from '../components/Ueditor';
const simpleField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
)

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = '企业名称不能为空'
  }
  if (!values.owner && !values.domain) {
    errors.domain = '企业空间名称不能为空'
  }
  if (!values.location) {
    errors.location = '房间号不能为空'
  }
  if (!values.owner && !values.manager) {
    errors.manager = '管理员不能为空'
  }
  if (!values.phone) {
    errors.phone = '手机号码不能为空'
  }
  if (!values.buildingId) {
    errors.buildingId = '楼栋号不能为空'
  }
  return errors
}
let handleChange = (content) => {
  this.setState({
    content: content
  })
}
class EditNoticeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
  }

  render() {
    const { dispatch, error, handleSubmit, readOnly = false, pristine, reset, submitting, closeForm, initialValues } = this.props;
    return (
      <div className="animated fadeIn">
        <form onSubmit={handleSubmit} >
        <Field name="id" component="input" type="text" label="id" />       
        <Field
          name="Title"
          component={InputField}
          type="text"
          label="标题"
          readOnly={readOnly}
        />        
   
        <Field
          name="Content"
          component={InputField}                
          label="副标题"
          readOnly={readOnly}
        />
          <Ueditor id="Description" height="800" ref="ueditor" />
          {error && <strong>{error}</strong>}


<Row className="align-items-center">
  <Col col='9' />
  <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
    <Button block color="primary" type="submit" disabled={pristine || submitting}>提交</Button>
  </Col>
  {/*  <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
        <Button block color="success" hidden={readOnly} disabled={pristine || submitting} onClick={reset}>重置</Button>
      </Col>     */}
  <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
    <Button block color="danger" onClick={closeForm}>关闭</Button>
  </Col>
</Row>
        </form>
      </div>
    )
  }
}


// Decorate the form component
EditNoticeForm = reduxForm({
  form: 'notice', // a unique name for this form
  validate,                // redux-form同步验证 
})(EditNoticeForm);
//const selector = formValueSelector('hotline')
const mapStateToProps = (state, ownProps) => {
  if (state.cForm.data != undefined && state.cForm.data != null)
    return { initialValues: { ...state.cForm.data } }
  else
    return { initialValues: {} }
}
EditNoticeForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditNoticeForm)
export default EditNoticeForm;



