import React from 'react';
import { HeadMap } from '../../connect/users';
import Foot from './views/foot';

class Layout extends React.Component {

    render() {
        return (
            <div className="wrapper">
              <HeadMap/>
                {this.props.children}
              <Foot/>
            </div>
        )
    }
}
export default Layout;
