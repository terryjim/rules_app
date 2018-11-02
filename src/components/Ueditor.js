import React from 'react';
export default class Ueditor extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id?this.props.id:null,
      ueditor :null,
    }
  }
  componentDidMount(){
    let UE = window.UE;
    let {id} = this.state;
    if(id){
      try {
        /*加载之前先执行删除操作，否则如果存在页面切换，
        再切回带编辑器页面重新加载时不刷新无法渲染出编辑器*/
        UE.delEditor(id);
      }catch (e) {}
      let  ueditor = UE.getEditor(id, {
        autoHeightEnabled: true,
        autoFloatEnabled: true
      });
      this.setState({ueditor });
    }
  }
  render(){
    let {id} = this.state;
    return (
      <div>
        <textarea id={id} />
      </div>
    );
  }
}