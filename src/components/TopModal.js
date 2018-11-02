import { Modal} from 'reactstrap';
//始终在最上面窗口（点击模态窗口外时不关闭窗口）
//原Modal点击窗口外时会关闭窗口
class TopModal extends Modal{
    constructor(props) {
        super(props);
        // ES6 类中函数必须手动绑定
        this.handleBackdropClick = this.handleBackdropClick.bind(this);
    }

   handleBackdropClick(e) {
      return
    }
}
export default TopModal
