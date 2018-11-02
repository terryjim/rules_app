import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray,formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'

import { InputField, InlineField,FieldValidate } from '../components/Field'
import { getBuildingsByDepartment } from '../actions/building'

const simpleField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
)

const validate = values => {
 /*  const errors = {}
  
  if (!values.buildingId) {
    errors.buildingId = '楼栋号不能为空'
  }
  return errors */
}

let EditHotlineForm = props => {
  const { dispatch, error, handleSubmit,  readOnly = false,pristine, reset, submitting, closeForm, initialValues} = props;

  return (
    <div className="animated fadeIn">
      <form onSubmit={handleSubmit} >
        <Field name="id" component="input" type="hidden" label="id" />       
        <Field
          name="name"
          component={InputField}
          type="text"
          label="楼栋名称"
          readOnly={true}
        />        
   
        <Field
          name="hotline"
          component={InputField}
          placeholder="客服电话"         
          label="客服电话"
          validate={[FieldValidate.phone]}
         /*  validate={[FieldValidate.required,FieldValidate.phone]} */
          readOnly={readOnly}
        />

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
  );
}





// Decorate the form component
EditHotlineForm = reduxForm({
  form: 'hotline', // a unique name for this form
  //validate,                // redux-form同步验证 
})(EditHotlineForm);
//const selector = formValueSelector('hotline')
const mapStateToProps = (state, ownProps) => {
 
  if (state.cForm.data != undefined && state.cForm.data != null)
    return { initialValues: { ...state.cForm.data }}
  else
    return { initialValues: {}}
}

EditHotlineForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditHotlineForm)

export default EditHotlineForm;



