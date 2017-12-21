
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autoBind from 'react-autobind'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Menu, Select, Dropdown } from 'semantic-ui-react'

import userAction, { userConst } from '../../../working-sample/user/action/userAction'
import  menuAction from '../action/menuAction'


class MenuContainer extends Component {

  constructor(props) {
    //
    super(props)
    autoBind(this)
  }


  // @Override
  componentDidMount() {
    //
    const userId = 'admin'
    const { params } = this.props

    this.props.userAction.findAllUsers()
    this.props.userAction.findUser(userId)

    if (params && params.menuName) {
      this.props.menuAction.selectMenu(params.menuName)
    }
  }

  // @Override
  componentWillReceiveProps(nextProps) {
    //
    if (this.props.params.menuName !== nextProps.params.menuName) {
      this.props.menuAction.selectMenu(nextProps.params.menuName)
    }
  }



  onChangeUser(e, { value }) {
    this.props.userAction.findUser(value)
  }

  routeToHome() {
    this.props.router.push('/')
  }


  render() {
    //
    const { menuItems, activeItem, users, user } = this.props

    if (!user) {
      return null
    }

    return (
      <Menu>
        <Menu.Item color="blue" icon="home" onClick={this.routeToHome}/>
        { menuItems.map((menuItem, index) => {
          if (user.roles.includes(menuItem.role)) {
            return (
              <Menu.Item
                key={index}
                name={menuItem.name}
                active={activeItem === menuItem.name}
                onClick={()=>this.props.router.push(menuItem.link)}
              >
                {menuItem.text}
              </Menu.Item>
            )
          }
        })}

        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown
              placeholder="User role"
              options={users.map((user) => ({ key: user.id, value: user.id, text: user.name }))}
              defaultValue='admin'

              onChange={this.onChangeUser}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


const mapStateToProps = ({ menuState, userState }) => {
  return {
    activeItem: menuState.activeItem,
    menuItems: menuState.items,
    users: userState.users,
    user: userState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuAction: bindActionCreators(menuAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)
