
import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray, formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import { InputField, InlineField } from '../components/Field'
import { getBuildingsByDepartment } from '../actions/building'
import Ueditor from '../components/Ueditor';

const simpleField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
)

const validate = values => { 
  const errors = {}
  if (!values.title) {
    errors.name = '标题不能为空'
  }
  if (!values.content) {
    errors.domain = '副标题不能为空'
  }
 
 
  return errors
}
let handleChange = (content) => {
  this.setState({
    content: content
  })
}
class EditNoticeForm extends Component {
  
 /*  constructor(props) {
    super(props)
    this.state = {
      contentId: 0,
      contentFormat: 'html',
      initialContent: ``,
      htmlContent: ''
    }
    this.editorInstance = null
  }
*/
  componentDidMount(){
    let UE = window.UE;
    let editor=UE.getEditor('myeditor', {
      autoHeightEnabled: true,
      autoFloatEnabled: true,     
    });
    var me = this;
   
    editor.ready( function( ueditor ) {
        var value = me.props.initialValues.description?me.props.initialValues.description:'<p></p>' 
        editor.setContent(value) 
    }); 
  } 

  render() {
    let { dispatch, error,  readOnly = false,handleSubmit, pristine, reset, submitting, closeForm, initialValues } = this.props;
 

    return (
      <div className="animated fadeIn">
      <form onSubmit={handleSubmit} >   
      <Field name="id" component="input" type="hidden" label="id" />       
        <Field
          name="title"
          component={InputField}
          type="text"
          label="标题"
          readOnly={readOnly}
        />        
   
        <Field
          name="content"
          component={InputField}                
          label="副标题"
          readOnly={readOnly}
        />   
          <Ueditor id={'myeditor'}/> 
          <Row className="align-items-center">
          <Col col='9' />
          <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <Button block color="primary" type="submit" disabled={ submitting}>提交</Button>
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
 
  if (state.cForm.data != undefined && state.cForm.data != null&&state.cForm.data._original!=null)
    return { initialValues: { ...state.cForm.data._original }}
  else
    return { initialValues: {}}
}

EditNoticeForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditNoticeForm)
export default EditNoticeForm;



