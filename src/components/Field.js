import React from 'react';
import {
  Col, FormGroup, FormFeedback, Input, Label
} from 'reactstrap';
/* export const InputField = ({ readOnly, input, label, placeholder, type, meta: { touched, error } }) => (
  <Col xs="12">
    <FormGroup>
      <Label hidden={type === 'hidden' ? true : false || label == undefined || label == null} htmlFor="{label}">{label}</Label>
      <Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={placeholder === undefined ? label : placeholder} {...input} readOnly={readOnly} />
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  </Col> 
) */
/* export const InlineField = ({ readOnly, input, label, type, meta: { touched, error } }) => (
  <Container><FormGroup row>
    <Label sm={2} hidden={type === 'hidden' ? true : false || label == undefined || label == null} htmlFor="{label}">{label}</Label>
    <Col sm={10}><Input type={type} invalid={touched && error ? true : false} valid={touched && !error ? true : false} id="name" placeholder={label} {...input} readOnly={readOnly} />
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </Col>
  </FormGroup>

  </Container>
) */
export const InlineField = ({ mdLabel = 2, mdContent = 12 - mdLabel, name, readOnly, input, label, placeholder = label, type,rows=2, meta: { touched, error } }) => (
  <FormGroup row>
    <Col md={mdLabel}>
      <Label
        hidden={type === 'hidden' ? true : false || label === undefined || label === null}
        htmlFor="{label}"
        style={{ marginTop: '8px' }}
      >
        {label}
      </Label>
    </Col>
    <Col xs="12" md={mdContent} >
      <Input type={type}
        invalid={touched && error ? true : false}
        valid={touched && !error ? true : false}
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...input}
        readOnly={readOnly} />
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </Col>
  </FormGroup>
)


export const InlineSelectField = ({ mdLabel = 2, mdContent = 12 - mdLabel, name, readOnly, input, type, label, placeholder = label, options, meta: { touched, error } }) => (
  <FormGroup row>
    <Col md={mdLabel}>
      <Label hidden={type === 'hidden' ? true : false || label === undefined || label === null}
        htmlFor="{label}" style={{ marginTop: '8px' }}>
        {label}
      </Label>
    </Col>
    <Col xs="12" md={mdContent} >
      <Input type="select"
        invalid={touched && error ? true : false}
        valid={touched && !error ? true : false}

        {...input}
        readOnly={readOnly}>
        {
          options
        }
      </Input>
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </Col>
  </FormGroup>
)



export const SelectField = ({ readOnly, input, type, label, options, meta: { touched, error } }) => (
  <Col xs="12">
    <FormGroup>
      <Label hidden={type === 'hidden' ? true : false || label === undefined || label === null} htmlFor="{label}">{label}</Label>
      <Input type="select" invalid={touched && error ? true : false} valid={touched && !error ? true : false} placeholder={label} {...input} readOnly={readOnly}>
        {
          options.map(option => (<option >{option.text}</option>))
        }
      </Input>
      {touched && error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  </Col>
  /*  <Label htmlFor="inputIsInvalid">Input is invalid</Label>
   <Input type="text" invalid id="inputIsInvalid" />
   <FormFeedback>Houston, we have a problem...</FormFeedback> */
)
//////////////////////////////////////////////
export const InputField = ({ readOnly = false, xs = 12, input, label, placeholder = label, type, meta: { touched, error, warning } }) => (
  <Col xs={xs}>
    <FormGroup>
      <Label hidden={type === 'hidden' ? true : false || label === undefined || label === null} htmlFor="{label}">{label}</Label>
      <Input {...input} type={type}
        invalid={touched && error ? true : false}
        valid={touched && !error ? true : false}
        placeholder={placeholder === undefined ? label : placeholder}
        readOnly={readOnly} />
      {type !== 'hidden' && touched &&
        ((error && <FormFeedback>{error}</FormFeedback>) ||
          (warning && <FormFeedback>{warning}</FormFeedback>))}
    </FormGroup>
  </Col>
)
export class FieldValidate {
  static required = value => (value || typeof value === 'number' ? undefined : '此字段不允许为空')
  static email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'email格式不对'
    : undefined)
  static maxLength = max => value =>
    value && value.length > max ? `字符数最多不得超过 ${max} ` : undefined
  static minLength = min => value =>
    value && value.length < min ? `字符数最少不得低于 ${min} ` : undefined
  static minLength6 = FieldValidate.minLength(6)
  static mobile = value => (value && !/^((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8})$/i.test(value)
    ? '手机号码格式不对'
    : undefined)
  //固定电话  
  static telephone = value => (value && !/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/i.test(value)
    ? '电话号码格式不对,请输入正确的座机号若带区号或分机号请以 - 分隔(如027-87558888-1234)'
    : undefined)
  //手机+固定电话
  static phone = value => (value && !/^(((0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)|((13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])+\d{8}))$/i.test(value)
    ? '电话号码格式不对,请输入正确的座机号或手机号，座机号若带区号或分机号请以 - 分隔(如027-87558888-1234)'
    : undefined)
  //房号格式 1-1-1
  static room = value => (value && !/^\w+\-\w+\-\w+$/i.test(value)
    ? '房号格式不对'
    : undefined)
  //多间房号格式 1-1-1,1-1-2,2-1-1
  static rooms = value => (value && !/^\w+\-\w+\-\w+(,\w+\-\w+\-\w+)*$/i.test(value)
    ? '房号格式不对'
    : undefined)
      //门禁卡格式8位16进制
  static card = value => (value && !/^([0-9a-fA-F]){8}$/i.test(value)
  ? '门禁卡格式不对'
  : undefined)
}