import React, { Component } from 'react';
import { Dimensions } from 'react-native';
// import { connect } from 'react-redux';
import { Badge } from 'react-native-elements';
// import { getNotificationUnread } from '../redux/screenActions/notificationPage/action';
import * as Utils from '../style/Utils';

class Mybadge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ''
        };

    }
    
    // componentWillMount() {
    //     this.props.getNotificationUnread()
    // }


    // render() {
    //     if(this.props.unread == 0 || this.props.unread == ''){
    //         return (null)
    //     } else{
    //         return (<Badge textStyle={Platform.OS === 'android' ? ({fontSize: Utils.fixedFontSize(10), marginLeft: Utils.wp(3), marginBottom: Utils.wp(5), marginRight: Utils.wp(3), marginTop: Utils.wp(5) }) : ({fontSize: Dimensions.get('window').height >= 1366 ? Utils.fixedFontSize(9) : null})} value={this.props.unread > 100 ? "99+" : this.props.unread } status="error" />)
    //     }
    // }
}


// const mapStateToProps = ({ notificationAuth }) => {
//     const { unread } = notificationAuth;
//     return { unread };
// };

// export default connect(mapStateToProps, { getNotificationUnread })(Mybadge);
export default(Mybadge);
