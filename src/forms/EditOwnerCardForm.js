import React, { Component } from 'react';
import { Field, reduxForm, change, FieldArray } from 'redux-form';
import { Container, ListGroup, CardFooter, Label, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { showError } from '../actions/common'
import { InputField, FieldValidate, InlineField, InlineSelectField } from '../components/Field'
import { getBuildingsByDepartment } from '../actions/building'

const validate = values => {
  const errors = {}
  if (values.endTime < values.startTime) {
    errors.endTime = '授权结束时间不得小于开始时间'
  }
  return errors
}
let EditOwnerCardForm = ({
  readOnly = false, error, dispatch, handleSubmit, pristine, reset, submitting, closeForm, initialValues, buildingList }) => {
  if (buildingList === undefined || buildingList.length === 0) {
    dispatch(getBuildingsByDepartment())
  }
  return (
    <Form onSubmit={handleSubmit} ><Container style={{ 'textAlign': 'right' }}>
      <Field name="id" component="input" type="hidden" label="id" />
      <FormGroup row>
        <Col md="6">
          <Field name="buildingId"    validate={[FieldValidate.required]}
            label="楼栋号"
            component={InlineSelectField} 
            options={[<option value="" key={-1}>请选择楼栋</option>].concat(
              buildingList != undefined ?
                buildingList.map((build, index) => (
                  <option value={build.id} key={index}>
                    {build.name}
                  </option>
                )) : [])}
            mdLabel={4}
          >
          </Field>
          <Field
            name="buildingId"
            component={InputField}
            type="hidden"
            label=""
            validate={[FieldValidate.required]}
          />
        </Col>
        <Col md="6">
          <Field
            name="location"
            component={InlineField}
            type="text"
            placeholder="单元号-楼层号-房号"
            validate={[FieldValidate.required, FieldValidate.room]}
            label="房间号"
            mdLabel={4}
            mdContent={8}
          />
        </Col>
      </FormGroup>



      <FormGroup row>
        <Col md="6">
          <Field readOnly={readOnly}
            name="title"
            component={InlineField}
            type="text"
            label="卡名称"
            validate={[FieldValidate.required]}
            mdLabel={4}
            mdContent={8}
          />
        </Col>
        <Col md="6">
          <Field readOnly={readOnly}
            name="code"
            component={InlineField}
            type="text"
            label="卡号"
            validate={[FieldValidate.required,FieldValidate.card]}
            mdLabel={4}
            mdContent={8}
          />
        </Col> </FormGroup>
      <FormGroup row>
        <Col md="6">
          <Field readOnly={readOnly}
            name="startTime"
            component={InlineField}
            type="date"
            label="授权开始时间"
            validate={[FieldValidate.required]}
            mdLabel={4}
            mdContent={8}
          />
        </Col><Col md="6">
          <Field readOnly={readOnly}
            name="endTime"
            component={InlineField}
            type="date"
            label="授权结束时间"
            validate={[FieldValidate.required]}
            mdLabel={4}
            mdContent={8}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="6">
          <Field readOnly={readOnly}
            name="name"
            component={InlineField}
            type="text"
            readOnly={true}
            label="业主姓名"
            mdLabel={4}
            mdContent={8}
          />
        </Col>
        <Col md="6">
          <Field readOnly={readOnly}
            name="phone"
            component={InlineField}
            type="text"
            readOnly={true}
            label="业主电话"
            mdLabel={4}
            mdContent={8}
          />
        </Col>
      </FormGroup>


      <Row className="align-items-center">
        <Col col='9' />
        <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button block color="primary" hidden={readOnly} type="submit" disabled={submitting}>提交</Button>
        </Col>
        <Col col="1" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button block color="danger" onClick={closeForm}>关闭</Button>
        </Col>
      </Row>
    </Container>
    </Form>
  );
}





// Decorate the form component
EditOwnerCardForm = reduxForm({
  form: 'EditOwnerCardForm', // a unique name for this form
  validate,                // redux-form同步验证 
})(EditOwnerCardForm);
const mapStateToProps = (state) => {
  let buildingList = state.buildingList
  let title = '户主卡'
  if (state.cForm.data !== undefined && state.cForm.data !== null && state.cForm.data.title !== '')
    title = state.cForm.data.title

  let date = new Date()
  let startTime = date.Format('yyyy-MM-dd')
  //let startTime = '2019-01-01'
  if (state.cForm.data !== undefined && state.cForm.data !== null && state.cForm.data.startTime !== undefined && state.cForm.data.startTime !== '')
    startTime = state.cForm.data.startTime
  let endTime = ('2019-12-31')
  if (state.cForm.data !== undefined && state.cForm.data !== null && state.cForm.data.endTime !== undefined && state.cForm.data.endTime !== '')
    endTime = state.cForm.data.endTime
  let location = ''
  if (state.cForm.data !== undefined && state.cForm.data !== null && state.cForm.data.location !== undefined)
    location = JSON.stringify(state.cForm.data.location)
  return { initialValues: { ...state.cForm.data, title, isManage: 1, startTime, endTime }, buildingList }
}
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "h+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

EditOwnerCardForm = connect(
  mapStateToProps
  // { load: loadAccount } // bind account loading action creator
)(EditOwnerCardForm)

export default EditOwnerCardForm;

