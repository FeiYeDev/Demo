import React, { Component } from "react";
import Main from "../Entry";
import { connect } from "react-redux";
import { Connection } from "jsforce";
import authActions from "@redux/Auth/actions";
import customConfigActions from '@redux/CustomConfig/actions'
import { jsforceResponse } from "@/config/httpService";
import { RequestAuthMeta } from "@redux/API";
import enUSIntl from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import notification from "antd/es/notification";
import { store } from "../redux/store";

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: [],
      token: null,
    };
  }

  async componentDidMount() { }
    // this.setState({
    //   loading: true,
    // });
    // setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //   });
    // }, 200);
    // if (process.env.NODE_ENV === "development") {
    //   let connection;
    //   connection = new Connection({
    //     accessToken: process.env.REACT_APP_TOKEN,
    //     instanceUrl: process.env.REACT_APP_INSTANCE,
    //     proxyUrl: process.env.REACT_APP_PROXY_INSTANCE,
    //   });
    //   let contactid = "0038c00002hZIMmAAO"; //0038c00002lQWFcAAO
    //   this.props.userContactId(contactid);
    //   let user = "0038c00002hZIMmAAO";
    //   this.props.setUser(user);
    //   this.props.setUsersGroupConfig({
        // primaryColor: 'red', // 全局主色 设置此属性 buttonColor可以不设置 统一设置
        // buttonColor: 'red', // 按钮颜色
        // buttonRadius: '14px', // 按钮圆角
        // fontFamily: 'Poppins, sans-serif', //字体
        // cardIcon: `<i class="fab fa-500px"></i>`
      // });
      // ConfigProvider.config({
      //   theme: {
      //     primaryColor: 'red',
      //   },
      // });
      // let instance_url = process.env.REACT_APP_INSTANCE;
      // // this.props.authRequest(connection, 'MRBDirect', instance_url, contactid, user);
      // this.props.SetConnection(connection);
      // let result = await RequestAuthMeta(connection, null, contactid, user);

      // result = jsforceResponse(result, "", false, true);
      // this.props.AuthMetaSuccess({ result, instance_url });

      // this.setState({
      //   token: result.result,
      // });
      // result = await fetchPermission(user);
      // result = jsforceResponse(result, '', false, true);
      // this.props.setPermissions(result)
 //   }
    // window.addEventListener("message", this.readMessage);
 // }

  // componentWillUnmount() {
  //   window.removeEventListener("message", this.readMessage);
  // }

  // readMessage = async (e) => {
  //   if (e.data.session && e.isTrusted && !e.data.type) {
  //     let token = e.data.session;
  //     let entity = e.data.entityId;
  //     let instance_url = e.data.instance_url;
  //     let config =  e.data.config;
  //     let connection;
  //     connection = new Connection({
  //       accessToken: token,
  //     });
  //     let internalContactId = e.data.internalContactId;

  //     let contactid = e.data.userContactId;
  //     this.props.userContactId(contactid);
  //     let user = e.data.userId;

  //     let user_result = [];

  //     if (contactid) {
  //       user_result = contactid;
  //     } else if (internalContactId) {
  //       user_result = internalContactId;
  //     } else {
  //       return notification["error"]({
  //         message: "Error",
  //         description: "Missing UserId or ContactId",
  //       });
  //     }
  //     this.props.setUser(user);
  //     this.props.setUsersGroupConfig(config);
  //     // this.props.authRequest(connection, entity, instance_url, contactid, user);

  //     // let result = RequestAuthMeta(connection,entity, contactid,  user);
  //     this.props.SetConnection(connection);
  //     let result = await RequestAuthMeta(
  //       connection,
  //       entity,
  //       user_result,
  //       user_result
  //     );
  //     result = jsforceResponse(result, "", false, true);
  //     this.props.AuthMetaSuccess({ result, instance_url });

  //     this.setState({
  //       token: result.result,
  //     });

  //     // let result = await fetchPermission(user);
  //     // result = jsforceResponse(result, '', false, true);
  //     // this.props.setPermissions(result)
  //   }
  // };

  render() {
    console.log(store.getState(),'store.getState()');
    return (
      <>
        <ConfigProvider locale={enUSIntl}>
          {store.getState().Auth.meta ? <Main token={store.getState().Auth.meta} /> : ""}
        </ConfigProvider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    userContactId: (record) => dispatch(authActions.UserContactId(record)),
    authRequest: (con, entitle, instance_url, contactid, userid) =>
      dispatch(
        authActions.AuthRequest(con, entitle, instance_url, contactid, userid)
      ),
    setUser: (Record) => dispatch(authActions.SelectedCurrentUser(Record)),
    setPermissions: (record) => dispatch(authActions.Permissions(record)),
    AuthMetaSuccess: (record) => dispatch(authActions.AuthMetaSuccess(record)),
    SetConnection: (con) => dispatch(authActions.SetConnection(con)),
    setUsersGroupConfig: (record) => dispatch(customConfigActions.setUsersGroupConfig(record)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
