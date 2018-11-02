import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray, getFormValues, formValues, formValueSelector } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import {uploadCards} from '../actions/owner'
import { getBuildingsByDepartment } from '../actions/building'
import RoomWidget from '../components/RoomWidget'

import { InputField, SelectField, InlineField, } from '../components/Field'
const UploadFile = ({ input: {value: omitValue, ...inputProps }, meta: omitMeta, ...props }) => (
  <input type='file' {...inputProps} {...props} />
);
const  validate = values => {
  const errors = {}
  console.log('---------------------------------')
  console.log(values)
  if (!values.buildingId) {   
    errors.buildingId = '楼栋不能为空'
  }
  if (!values.cardFile) {
    errors.cardFile = '请上传文件'
  }
  return errors
}

class ImportCards extends Component {
  componentWillMount() {
  }
  componentWillReceiveProps(nextProps) {
    //确认删除记录操作    
    /* if (nextProps.confirmDel) {
      this.props.dispatch(delList(this.state.selection, 'project'))
    } */
  }
  constructor(props) {
    super(props)
    if(props.buildingList===undefined||props.buildingList.length===0)
    this.props.dispatch(getBuildingsByDepartment())
  }
  onFormSubmit = (values) => {    
    let formData=new FormData()   
    formData.append('buildingId',this.props.buildingList[values.buildingId].id)
    formData.append('projectId',''+this.props.buildingList[values.buildingId].projectId)  
    formData.append('file',values.cardFile[0])   
    this.props.dispatch(uploadCards(formData))   
    //this.props.dispatch(saveForm(values, 'project'))
    
  }
  render() {
    const { values, dispatch, error, pristine, reset, submitting, closeForm, buildingList,handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)} >
        <Container><FormGroup row>
          <Label sm={3} for="buildingId">楼栋号</Label>
          <Col sm={9}>
            <Field name="buildingId" component="select"  >
              <option value="">请选择楼栋</option>
              {buildingList != undefined ?
                buildingList.map((build,index) => (
                  <option value={index} key={index}>
                    {build.name}
                  </option>
                )) : ''}
            </Field>
          </Col>
        </FormGroup></Container>
        <Field 
          name="buildingId"
          component={InputField}
          type="hidden"
          label=""      
        />
    
    <Field 
          name="cardFile"
          component={UploadFile}
          accept=".xlsx"         
        />
         <Field 
          name="cardFile"
          component={InputField}
          type="hidden"
          label=""      
        />
    {/* 
         <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file">上传文件</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file" name="file" />
                    </Col>
                  </FormGroup> */}
                  {error && <strong>{error}</strong>}
        <Row className="align-items-center">
          <Col col='10'>&nbsp;</Col>
          <Col col="2" >
            <Button block color="primary"  type="submit" disabled={submitting} >提交</Button>
          </Col>
        </Row>
        <hr/>
        <p><i className="h5"> 注意：导入门禁卡数据不会删除原有记录，但会覆盖原有记录，请谨慎操作！</i></p>
        <p><a href="/template/card.xlsx">下载模板文件</a></p>
      </form>

    );
  }
}




// Decorate the form component
ImportCards = reduxForm({
  form: 'importCards', // a unique name for this form
  validate,                // redux-form同步验证 
})(ImportCards);
/* const selector = formValueSelector('building') */
const mapStateToProps = (state) => {
  let buildingList = state.buildingList
 
  return { buildingList }
}

ImportCards = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(ImportCards)
export default ImportCards;
