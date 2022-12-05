import React, { Component } from "react";

import { connect } from "react-redux";

import { getCurrentUserPermissions } from "@redux/API";
import { openNotificationWithIcon } from "../components/help";
import TreeCard from './RelationShip/index'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      permissions: [],
      psS: {},
      ps: {},
      up: {}
    };
  }

  async componentDidMount() {
    let permissions = await getCurrentUserPermissions(this.props.token);
    if (!permissions) {
      openNotificationWithIcon("error", "permissions error");
      return;
    }
    const UM_permissions = permissions.filter((e) => {
      return e.moduleName === "User_Management";
    });
    console.log(UM_permissions, 'UM_permissions')
    const UMR = UM_permissions.reverse();
    for (let v in UMR) {
      if (UMR[v].readable) {
        this.setState({
          selected: 0
        })
        break;
      }
    }

    this.setState({
      permissions: UM_permissions,
      psS: this.adaptPermission(UM_permissions, 'Permission_Sets') || {},
      ps: this.adaptPermission(UM_permissions, 'Permissions') || {},
      up: this.adaptPermission(UM_permissions, 'Users') || {},
      ug: this.adaptPermission(UM_permissions, 'UserGroup') || {},
      newUserRequest: this.adaptPermission(UM_permissions, "New_User_Request") || {},
    });
  }

  testPermission = (pageName) => {
    const index = this.state.permissions.findIndex((e) => {
      return e.pageName === pageName;
    });
    return (index > -1 && this.state.permissions[index].readable)
  };
  displayControl = (pageName) => {
    const { selected } = this.state;
    const hasPermission = this.testPermission(pageName);
    return (selectedIndex) => {
      return selected === selectedIndex && hasPermission
    }
  }
  adaptPermission = (permissions, pageName) => {
    return permissions.find((e) => {
      return e.pageName === pageName;
    });
  };

  handleTabClick = (e) => {
    this.setState({
      selected: e,
    });
  };

  render() {
    return (
         <div id="out-header">
            <TreeCard />
          </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(null, mapDispatchToProps)(Main);
