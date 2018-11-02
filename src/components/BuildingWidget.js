import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter,Button } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

/* const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}; */

/* const defaultProps = {
  header: '87889888',
  mainText: '',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#',
}; */

class BuildingWidget extends Component {
  render() {
    const { title,mainText,action, className, cssModule, header,  icon, color, footer, link, children, variant, ...attributes } = this.props;

    // demo purposes only
    const padding = (variant === '0' ? { card: 'p-3', icon: 'p-3', lead: 'mt-2' } : (variant === '1' ? {
      card: 'p-0', icon: 'p-4', lead: 'pt-3',
    } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' }));

    const card = { style: 'clearfix', color: color, icon: icon, classes: '' };
    card.classes = mapToCssModules(classNames(className, card.style, padding.card), cssModule);

    const lead = { style: 'h5 mb-0', color: color, classes: '' };
    lead.classes = classNames(lead.style, 'text-' + card.color);

  /*   const blockIcon = t => {
      const classes = classNames('bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
      return (<i className={classes}>{t}</i>);
    } */


    return (
      <Card>
        <CardBody className={card.classes} {...attributes}>
        <div className="card-header-actions">
                  <Button color="link" className="card-header-action" onClick={action}><i className="fa fa-pencil"></i></Button>
                 {/*  <Button color="link" className="card-header-action btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></Button>
                  <Button color="link" className="card-header-action btn-close"><i className="icon-close"></i></Button>
                */} </div>
        <i className={classNames('bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left')}>{title}</i>
          <div className={classNames('h5 mb-0','text-' + card.color, padding.icon, 'font-2xl mr-3 float-right')}>{mainText}</div>
          {/*  <div className="text-muted text-uppercase font-weight-bold font-xs">{mainText}</div> */}
        </CardBody>

      </Card>
    );
  }
}

/* BuildingWidget.propTypes = propTypes;
BuildingWidget.defaultProps = defaultProps; */

export default BuildingWidget;