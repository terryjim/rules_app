import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray, formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'

import { InputField, InlineField } from '../components/Field'

const simpleField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
)



let EditTicketForm = props => {
  const { dispatch, error, handleSubmit, readOnly = false, pristine, reset, submitting, closeForm, initialValues } = props;
  let images = initialValues.images
  let imgs= (images === undefined ? '' : images.map(item => {           
       return(         
       <img src={item} width="100%"/>
     )}))
     
 
  return (
    <div className="animated fadeIn">    
    
      <form onSubmit={handleSubmit} >
        <Field name="id" component="input" type="hidden" label="id" />
       
        <Field
          name="createdAt"
          component={InputField}
          type="text"
          label="提交时间"
          readOnly={true}
        />
        <Field
          name="contact"
          component={InputField}
          type="text"
          label="业主"
          readOnly={true}
        />
        <Field
          name="phoneNr"
          component={InputField}
          type="text"
          label="联系电话"
          readOnly={true}
        />
        <Field
          name="location"
          component={InputField}
          type="text"
          label="地址"
          readOnly={true}
        />
        <Field
          name="content"
          component={InputField}
          label="事由"
          type="textarea"        
          readOnly={true}
        />
       <div>{imgs}</div>
        <Row className="align-items-center">
          <Col col='9' />
          <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <Button block color="primary" type="submit" disabled={ submitting}>标记完成</Button>
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
EditTicketForm = reduxForm({
  form: 'ticket', // a unique name for this form
            // redux-form同步验证 
})(EditTicketForm);
//const selector = formValueSelector('ticket')
const mapStateToProps = (state, ownProps) => {

  if (state.cForm.data != undefined && state.cForm.data != null)
    return { initialValues: { ...state.cForm.data } }
  else
    return { initialValues: {} }
}

EditTicketForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditTicketForm)

export default EditTicketForm;



