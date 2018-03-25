import React from "react";
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import floriscope from "../../assets/images/floriscope.svg";

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    className: "footer1"
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content
      .split(/\n/)
      .filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (
          <li className={isImg ? "icon" : ""} key={ii}>
            <a href={links[ii]} target="_blank">
              {isImg ? <img src={cItem} width="100%" /> : cItem}
            </a>
          </li>
        );
      });
    return (
      <li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>{content}</ul>
      </li>
    );
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = {
      img: floriscope,
      content: "Powered and hosted by Floriscope"
    };
    const dataSource = [
      {
        title: "Plante & Cité",
        content: "Main Site\nTwitter\nVimeo\n",
        contentLink: "https://www.plante-et-cite.fr\n#\n#\n#"
      },
      {
        title: "Floriscope",
        content: "Main Site\nBlog\nFAQ",
        contentLink:
          "https://www.floriscope.io\nhttp://blog.floriscope.io\nhttp://aide.floriscope.io"
      },
      {
        title: "Developper",
        content: "Open Source",
        contentLink: "https://github.com/floriscope-demos"
      },
      {
        title: "Follow Us",
        content:
          "https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\n",
        contentLink: "https://github.com/floriscope\n"
      }
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);
    return (
      <OverPack {...props} playScale={isMode ? 0.5 : 0.2}>
        <QueueAnim
          type="bottom"
          component="ul"
          key="ul"
          leaveReverse
          id={`${props.id}-ul`}
        >
          <li key="logo" id={`${props.id}-logo`}>
            <p className="logo">
              <img src={logoContent.img} width="50%" />
            </p>
            <p>{logoContent.content}</p>
          </li>
          {liChildrenToRender}
        </QueueAnim>
        <TweenOne
          animation={{ y: "+=30", opacity: 0, type: "from" }}
          key="copyright"
          className="copyright"
          id={`${props.id}-content`}
        >
          <span>
            Mentions légales © 2018 Floriscope. Made with 💖 by
            <a href="https://github.com/gaetan-pc"> Gaëtan</a>. Données ouvertes
          </span>
        </TweenOne>
      </OverPack>
    );
  }
}

export default Footer;
