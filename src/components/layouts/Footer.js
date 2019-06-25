import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LogoFooter from '../../imgs/layout/menu-logo.png'
import LogoFooterActive from '../../imgs/layout/menu_logo-active.png'
import Search from '../../imgs/layout/search.png'
import Create from '../../imgs/layout/trip.png'
import CreateActive from '../../imgs/layout/trip_active.png'
import Message from '../../imgs/layout/message.png'
import Activity from '../../imgs/layout/activity.png'
import ActivityActive from '../../imgs/layout/activity_active.png'


class Footer extends Component {
  
    state = {
      logo: LogoFooter,
      create: Create,
      activity: Activity,
    }

    notActive = () => {

      this.setState({ 
        logo: LogoFooter,
        create: Create,
        activity: Activity
       });
    
    }

    activeLogo(e) {

      this.setState({
        logo: LogoFooterActive,
        create: Create,
        activity: Activity
      });
  
      e.stopPropagation();
  
    }

    activeCreate(e) {

      this.setState({
        logo: LogoFooter,
        create: CreateActive,
        activity: Activity
      });
  
      e.stopPropagation();
  
    }

    activeActivity(e) {

      this.setState({
        logo: LogoFooter,
        create: Create,
        activity: ActivityActive
      });
  
      e.stopPropagation();

    }

  render() {

    let { logo, create, activity } = this.state;

    return (
      <div onClick={this.notActive} className="navbar background align-items-center justify-content-center text-center white shadow mt-auto">
        <div className="container p-0">
          <div className="col" onClick={(e) => this.activeLogo(e)}>
            {/* <Link to="/"> */}
            <img className="icons-36"  src={logo} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            {/* <Link to="/"> */}
            <img className="icons-24" src={Search} alt="" />
            {/* </Link> */}
          </div>
          <div className="col" onClick={(e) => this.activeCreate(e)}>
            {/* <Link to="/"> */}
            <img className="icons-24"  src={create} alt="" />
            {/* </Link> */}
          </div>
          <div className="col">
            <Link to="/message">
            <img className="icons-24" src={Message} alt="" />
            </Link>
          </div>
          <div className="col" onClick={(e) => this.activeActivity(e)}>
            <Link to="/atividade">
            <img className="icons-24"  src={activity} alt="" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

//TODO propTypes

export default Footer
