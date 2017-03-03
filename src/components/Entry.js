import React, { PropTypes } from 'react'
import { Button, ButtonGroup, ListGroupItem } from 'reactstrap';

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
      <ListGroupItem>
        {this.props.entry.label}
        <div className="align-right">
          {this.props.entry.amount}
          <ButtonGroup className="left-margin">
            <Button className="btn btn-secondary btn-sm" type="button" onClick={(e) => this.decreaseAmount()}>
              -
            </Button>
            <Button className="btn btn-secondary btn-sm" type="button" onClick={(e) => this.increaseAmount()}>
              +
            </Button>
          </ButtonGroup>
        </div>
      </ListGroupItem>
    );
  }
}

Entry.propTypes =
{
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired,
  setAmount: React.PropTypes.func.isRequired,
  deleteEntry: React.PropTypes.func.isRequired
} 

module.exports = Entry;