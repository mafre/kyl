import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';

class Entry extends React.Component 
{
  increaseAmount = () =>
	{
		this.props.setAmount(this.props.entry.id, this.props.entry.amount + 1);
  }

  decreaseAmount = () =>
	{
    if(this.props.entry.amount === 1)
    {
      this.props.deleteEntry(this.props.entry.id);
    }
    else
    {
      this.props.setAmount(this.props.entry.id, this.props.entry.amount - 1);
    }
  }

  render() 
  {
    return (
      <li>
        <Button type="button" onClick={(e) => this.decreaseAmount()}>
          -
        </Button>
        <Button type="button" onClick={(e) => this.increaseAmount()}>
          +
        </Button>
        {'   '}
        {this.props.entry.label}
        {'   '}
        {this.props.entry.amount}
      </li>
    );
  }
}

Entry.propTypes =
{
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired,
  setAmount: React.PropTypes.func.isRequired,
  deleteEntry: React.PropTypes.func.isRequired
} 

module.exports = Entry;