import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import BuildingsAllotTable from '../components/BuildingsAllotTable.js'
import { InputField, FieldValidate, InlineField, InlineSelectField } from '../components/Field'




const simpleField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
)
const checkField = ({ readOnly, input, label, value, meta: { touched, error } }) => (
  <FormGroup row>
    {/* <Label for="checkbox2" sm={2}>Checkbox</Label>*/}
    <Col sm={{ size: 10 }}>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          {label}
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
)

const validate = values => {
  console.log(values)
  const errors = {}
  if (!values.title) {
    errors.name = '卡名称不能为空'
  }
  if (!values.code) {
    errors.name = '卡号不能为空'
  }
  if (!values.endTime) {
    errors.name = '授权结束时间不能为空'
  }
  return errors
}

let EditCardManagedForm = props => {
  const { readOnly = false, dispatch, error, handleSubmit, pristine, reset, submitting, closeForm, initialValues, pid } = props;
  let getBuildings = (values) => {
    if (values != undefined && values != null) {
      dispatch(change('EditCardManagedForm', 'location', values.buildings))
    } else {
      dispatch(change('EditCardManagedForm', 'location', []))
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <Field name="id" component="input" type="hidden" label="id" />

      <Field readOnly={readOnly}
        name="title"
        component={InputField}
        type="text"
        label="卡名称"
      />
      <Field readOnly={readOnly}
        name="code"
        component={InputField}
        type="text"
        label="卡号"
        validate={[FieldValidate.required,FieldValidate.card]}
      /> <Field readOnly={readOnly}
        name="isManage"
        component={InputField}
        type="hidden"
        label="管理卡"
      />
      <Field readOnly={readOnly}
        name="startTime"
        component={InputField}
        type="date"
        label="授权开始时间"
      />
      <Field readOnly={readOnly}
        name="endTime"
        component={InputField}
        type="date"
        label="授权结束时间"
      />
      <BuildingsAllotTable name="allotBuildings" pid={pid} handleTableValues={getBuildings} allotBuildings={initialValues.buildings} />
      <Field
        name="location"
        component={InputField}
        type="hidden"
        label="分配楼栋"
      />


      {error && <strong>{error}</strong>}


      <Row className="align-items-center">
        <Col col='9' />
        <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button block color="primary" hidden={readOnly} type="submit" disabled={submitting}>提交</Button>
        </Col>      
        <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button block color="danger" onClick={closeForm}>关闭</Button>
        </Col>
      </Row>

    </form>
  );
}





// Decorate the form component
EditCardManagedForm = reduxForm({
  form: 'EditCardManagedForm', // a unique name for this form
  validate,                // redux-form同步验证 
})(EditCardManagedForm);
const mapStateToProps = (state) => {

  console.log(state.cForm.data)
  let buildings = []
  if (state.cForm.data != undefined && state.cForm.data != null && state.cForm.data._original != undefined && state.cForm.data._original != null) {
    buildings = state.cForm.data._original.location
  }
  /* 
    if (state.cForm.data != undefined && state.cForm.data != null) {
      initEnabled = '' + state.cForm.data.enabled
      if (state.cForm.data._original != undefined && state.cForm.data._original != null) {
        if(state.cForm.data._original.property!=undefined)
        property = state.cForm.data._original.property.id
        if(state.cForm.data._original.project!=undefined)
        project = state.cForm.data._original.project.id
      }
      if (initEnabled == undefined || initEnabled == null)
        initEnabled = '0'
    } */

  return { initialValues: { ...state.cForm.data, buildings, isManage: 1 } }
}

EditCardManagedForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditCardManagedForm)

export default EditCardManagedForm;

