import React from "react";
import enquire from "enquire.js";
import { withRouter } from "react-router-dom";
import { scrollScreen } from "rc-scroll-anim";

import Content0 from "../components/Home/Content0";
import Content1 from "../components/Home/Content1";
import Content2 from "../components/Home/Content2";
import Content3 from "../components/Home/Content3";
import Footer from "../components/Home/Footer";

import "../components/Home/home_style.less";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false
    };
  }

  componentDidMount() {
    this.enquireScreen(isMode => {
      this.setState({ isMode });
    });
  }

  enquireScreen = cb => {
    /* eslint-disable no-unused-expressions */
    enquire.register(
      "only screen and (min-width: 320px) and (max-width: 767px)",
      {
        match: () => {
          cb && cb(true);
        },
        unmatch: () => {
          cb && cb();
        }
      }
    );
    /* eslint-enable no-unused-expressions */
  };

  render() {
    const children = [
      <Content0
        id="content_0_0"
        key="content_0_0"
        isMode={this.state.isMode}
      />,
      <Content1
        id="content_2_0"
        key="content_2_0"
        isMode={this.state.isMode}
      />,
      <Content2
        id="content_3_0"
        key="content_3_0"
        isMode={this.state.isMode}
      />,
      <Content3
        id="content_4_0"
        key="content_4_0"
        isMode={this.state.isMode}
      />,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode} />
    ];
    return <div className="templates-wrapper">{children}</div>;
  }
}

export default withRouter(Home);
