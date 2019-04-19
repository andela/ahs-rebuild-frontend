import React, { Component, Fragment } from 'react';
import { data as MenuItems } from './SideMenuItems';
import arrowIcon from '../../assets/images/arrow.svg';
import './SideBar.scss';


class SideBar extends Component {
    state = {
        activeMenuItem: '',
        activeSubMenuItem: '',
    }

    handleExpand = e => {
        e.preventDefault();
        this.setState({ activeMenuItem: e.target.id});
    }

    handleContentExpand = e => {
        e.preventDefault();
        this.setState({ activeSubMenuItem: e.target.id});
    }

    renderSubContents = (content, active) => {
        const { activeSubMenuItem } = this.state;
        return(
            <div className={`sidebar-content-menu-subcontent${active}`}>
                {content.map(item =>{
                    const active = activeSubMenuItem === item.title ? '-active' : '';
                    return(
                        <div key={item.id} className="subcontent-item">
                        <div className="subcontent-item-text">
                            <div className="subcontent-item-text-icon">
                                <img id={`subitem-icon${active}`} src={arrowIcon} alt="" />
                            </div>
                            <div role="button" id={item.title} onClick={this.handleContentExpand} className={`submenu-text${active}`}>
                                {item.title}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>);
    }

    renderContentMenuItem = (item) => {
        const { activeMenuItem } = this.state;
        const activeItem = item.title === activeMenuItem ? '-active' : '';
        return(
            <div key={item.id} className={`sidebar-content-menu${activeItem}`}>
                <div className="sidebar-content-menu-text">
                    <div className="sidebar-content-menu-icon">
                        <img id={`item-icon${activeItem}`} src={arrowIcon} alt="" />
                    </div>
                    <div role="button" id={item.title} onClick={this.handleExpand} className="menu-text">{item.title}</div>
                </div>
                {this.renderSubContents(item.content, activeItem)}

            </div>
        )
    }
    render(){
        return(
            <Fragment>
             <div className="sidebar-history">
                history goes here
             </div>
            <div className="sidebar-content">
                {MenuItems.map(item => this.renderContentMenuItem(item))}
            </div>
            </Fragment>
        )
    }
}

export default SideBar;