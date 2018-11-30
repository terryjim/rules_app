import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray, formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import { InputField, InlineField, required, FieldValidate,InlineSelectField } from '../components/Field'

const validate = values => {

}

let EditShoppingForm = props => {
  const { readOnly = false, header, dispatch, error, handleSubmit, pristine, reset, submitting, closeForm, initialValues, buildingList } = props;


  return (
    <Form onSubmit={handleSubmit} ><Container style={{ 'textAlign': 'right' }}>
      <Field name="id" component="input" type="hidden" label="id" />
      <FormGroup row>
        <Col md="6">
          <Field readOnly={readOnly}
            name="name"
            component={InlineField}
            type="text"
            label="规则名称"
            mdLabel={4}
            validate={[FieldValidate.required]}
          />
        </Col>
        <Col md="6">
          <Field readOnly={readOnly}
            name="enabled"
            component={InlineSelectField}
            options={[<option value={true} key={true}>启用</option>, <option value={false} key={false}>未启用</option>]}
            label="启用状态"
            mdLabel={4}
            
          />
        </Col>
      </FormGroup>
      <Field readOnly={readOnly}
        name="memo"
        component={InlineField}
        type="textarea"
        height='130px'
        label="备注"
      />
      <Field readOnly={readOnly}
        name="rule"
        component={InlineField}
        type="textarea"
        rows="20"
        label="规则"
      />
      <Field readOnly={readOnly}
        name="category"
        component={InlineField}
        type="hidden"
        label="类别"
        mdLabel={4}
        validate={[FieldValidate.required]}
      />



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
    </Container>
    </Form>

  );
}





// Decorate the form component
EditShoppingForm = reduxForm({
  form: 'shopping', // a unique name for this form
  //validate,                // redux-form同步验证 
})(EditShoppingForm);
//const selector = formValueSelector('shopping')
const mapStateToProps = (state, ownProps) => {

  if (state.cForm.data != undefined && state.cForm.data != null)
    return { initialValues: { ...state.cForm.data } }
  else
    return { initialValues: { category: 2,enabled:true } }
}

EditShoppingForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditShoppingForm)

export default EditShoppingForm;



