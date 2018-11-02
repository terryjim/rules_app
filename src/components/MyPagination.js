import React, { Component } from 'react'
import classnames from 'classnames'
import { Button } from 'reactstrap';

//
// import _ from './utils'

const defaultButton = props => (
    <button type="button" {...props} className="-btn">
        {props.children}
    </button>
)
//自定义react-table 分布栏（加总条数）
export default class MyPagination extends Component {
    constructor(props) {
        super()     
        this.getSafePage = this.getSafePage.bind(this)
        this.changePage = this.changePage.bind(this)
        this.applyPage = this.applyPage.bind(this)

        this.state = {
            page: props.page,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ page: nextProps.page })
    }

    getSafePage(page) {
        if (Number.isNaN(page)) {
            page = this.props.page
        }
        return Math.min(Math.max(page, 0), this.props.pages - 1)
    }

    changePage(page) {
        page = this.getSafePage(page)
        this.setState({ page })
        if (this.props.page !== page) {
            this.props.onPageChange(page)
        }
    }

    applyPage(e) {
        if (e) {
            e.preventDefault()
        }
        const page = this.state.page
        this.changePage(page === '' ? this.props.page : page)
    }

    render() {
        const {
            // Computed
            pages,
            // Props
            page,
            showPageSizeOptions,
            pageSizeOptions,
            pageSize,
            showPageJump,
            canPrevious,
            canNext,
            onPageSizeChange,
            className,
            PreviousComponent = defaultButton,
            NextComponent = defaultButton,
            total,//总数
            otherInfo,//其它信息
    } = this.props

        return (
            <div className={classnames(className, '-pagination')} style={{ 'alignItems': 'center', ...this.props.style }}>

                <div >
                    <Button disabled={!canPrevious} onClick={() => {
                        if (!canPrevious) return
                        this.changePage(0)
                    }}
                        size="sm" className="btn-twitter btn-brand icon mr-1 mb-1" ><i className="fa fa-step-backward" style={{ 'color': 'white' }}></i></Button>
                    <Button disabled={!canPrevious} onClick={() => {
                        if (!canPrevious) return
                        this.changePage(page - 1)
                    }}
                        size="sm" className="btn-twitter btn-brand icon mr-1 mb-1" ><i className="fa fa-play  fa-rotate-180" style={{ 'color': 'white' }}></i></Button>
                    <span className="-pageInfo">
                        第 {' '}
                        {showPageJump ? (
                            <div className="-pageJump">
                                <input
                                    type={this.state.page === '' ? 'text' : 'number'}
                                    onChange={e => {
                                        const val = e.target.value
                                        const page = val - 1
                                        if (val === '') {
                                            return this.setState({ page: val })
                                        }
                                        this.setState({ page: this.getSafePage(page) })
                                    }}
                                    value={this.state.page === '' ? '' : this.state.page + 1}
                                    onBlur={this.applyPage}
                                    onKeyPress={e => {
                                        if (e.which === 13 || e.keyCode === 13) {
                                            this.applyPage()
                                        }
                                    }}
                                />
                            </div>
                        ) : (
                                <span className="-currentPage">{page + 1}</span>
                            )}{' 页   '}
                        共<span className="-totalPages">{pages || 1}</span>页
                    </span>
                    {showPageSizeOptions && (
                        <span className="select-wrap -pageSizeOptions">每页显示{' '}
                            <select onChange={e => onPageSizeChange(Number(e.target.value))} value={pageSize}>
                                {pageSizeOptions.map((option, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <option key={i} value={option}>
                                        {`${option}`}
                                    </option>
                                ))}
                            </select>
                            {' 条   '}共{total}条记录
                        </span>
                    )}
                    <Button disabled={!canNext} onClick={() => {
                        if (!canNext) return
                        this.changePage(page + 1)
                    }}
                        size="sm" className="btn-twitter btn-brand icon mr-1 mb-1" ><i className="fa fa-play" style={{ 'color': 'white' }}></i></Button>
                    <Button disabled={!canNext} onClick={() => {
                        if (!canNext) return
                        this.changePage(pages || 1)
                    }}
                        size="sm" className="btn-twitter btn-brand icon mr-1 mb-1" ><i className="fa fa-step-forward" style={{ 'color': 'white' }}></i></Button>

                </div>
                {/* 
                <div className="-previous">
                    <PreviousComponent
                        onClick={() => {
                            if (!canPrevious) return
                            this.changePage(page - 1)
                        }}
                        disabled={!canPrevious}
                    >

                    </PreviousComponent>

                </div> */}
                 <div className="-next">
                    {otherInfo}
                </div>
               {/*  <div className="-center">
                    {otherInfo}
                </div>

                <div className="-next" style={{ 'text-align': 'right' }}>
                          <i className="fa fa-play" />
                    <NextComponent
                        onClick={() => {
                            if (!canNext) return
                            this.changePage(page + 1)
                        }}
                        disabled={!canNext}
                    >
                        {this.props.nextText}
                    </NextComponent>
                    <i className="fa fa-step-forward" />

                    共{total}条记录&nbsp;&nbsp;
                </div> */}
            </div >
        )
    }
}
