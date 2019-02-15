import React from 'react';
import createPolicy from 'password-sheriff';
import util from 'util';

export default class PasswordStrength extends React.Component {

  render() {
    const { password, policy, messages } = this.props;
    const analysis = createPolicy(policy).missing(password);
    // TODO: add a component for fadeIn / fadeOut animations?
    const className = "auth0-lock-password-strength animated "
      + (!analysis.verified ? "fadeIn" : "fadeOut");

    const prepareMessage = items => {
      items && items.forEach(o => {
        if (messages[o.code]) {
          o.message = messages[o.code];
        }

        o.message = util.format(o.message, ...(o.format || []));

        if (o.items) {
          prepareMessage(o.items);
        }
      });
    };

    prepareMessage(analysis.rules);

    return <div className={className}><List items={analysis.rules} /></div>;
  }

}

PasswordStrength.propTypes = {
  messages: React.PropTypes.object.isRequired,
  password: React.PropTypes.string.isRequired,
  policy: React.PropTypes.oneOf([
    "none",
    "low",
    "fair",
    "good",
    "excellent"
  ]).isRequired
};

PasswordStrength.defaultProps = {
  messages: {}
};

class List extends React.Component {

  render() {
    const { items } = this.props;

    return items && items.length
      ? <ul>{items.map((x, i) => <Item {...x} key={i} />)}</ul>
      : null;
  }

}

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

class Item extends React.Component {

  render() {
    const { items, message, verified } = this.props;
    const className = verified ? "auth0-lock-checked" : "";

    return (
      <li className={className}>
        <span>{message}</span>
        <List items={items} />
      </li>
    );
  }

}

Item.propTypes = {
  items: React.PropTypes.array,
  message: React.PropTypes.string.isRequired,
  verified: React.PropTypes.bool.isRequired
};
