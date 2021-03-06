
var React = require('react'),
    List  = require('./list'),
    Input = require('./input'),

    items = require('./items')


module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <h1>To-do manager</h1>
        <Input value={this.props.editedItem} />
        <List items={this.props.items} edited={this.props.editedItem} />
      </div>
    )
  }

})
