import React, { PropTypes } from "react";
import { Button, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import camellia from "../../assets/images/camellia.svg";

class Content extends React.Component {
  static defaultProps = {
    className: "banner0"
  };
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack replay playScale={[0.3, 0.1]} {...props}>
        <QueueAnim
          type={["bottom", "top"]}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span className="title" key="title" id={`${props.id}-title`}>
            <img width="60%" src={camellia} />
          </span>
          <h1 key="content" id={`${props.id}-content`}>
            A graphical journey to Camellia
          </h1>
        </QueueAnim>
        <TweenOne
          animation={{ y: "-=20", yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

export default Content;
