import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray,formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import { InputField, InlineField,FieldValidate } from '../components/Field'


let EditMsgPhoneForm = props => {
  const { dispatch, error, handleSubmit,  readOnly = false,pristine, reset, submitting, closeForm, initialValues} = props;

  return (
    <div className="animated fadeIn">
      <form onSubmit={handleSubmit} >
        <Field name="id" component="input" type="hidden" label="id" />  
   
        <Field
          name="msgPhone"
          component={InputField}
          placeholder="手机号码"         
          label="消息接收号码"
          validate={[FieldValidate.mobile]}
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
EditMsgPhoneForm = reduxForm({
  form: 'MsgPhone', // a unique name for this form
  //validate,                // redux-form同步验证 
})(EditMsgPhoneForm);
//const selector = formValueSelector('hotline')
const mapStateToProps = (state, ownProps) => {
 
  if (state.cForm.data != undefined && state.cForm.data != null)
    return { initialValues: { ...state.cForm.data }}
  else
    return { initialValues: {}}
}

EditMsgPhoneForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditMsgPhoneForm)

export default EditMsgPhoneForm;



