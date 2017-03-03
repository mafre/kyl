import React, { PropTypes } from 'react'
import Entry from '../components/Entry'
import Category from '../components/Category'
import { ListGroup } from 'reactstrap';

class FilteredEntries extends React.Component 
{
  render() 
  {
    var filteredEntries = [];
    var category = "";

    this.props.entries.forEach((entry) => 
    {
      if(entry.categories.some(category => category === this.props.category.id))
      {
        filteredEntries.push(
            <Entry key={entry.id} entry={entry} setAmount={this.props.setAmount} deleteEntry={this.props.deleteEntry} />)
      }
    });

    if(filteredEntries.length > 0)
    {
      category = <Category
          key={this.props.category.id}
          label={this.props.category.label}
          deleteCategory={() => this.props.deleteCategory(this.props.category.id)} />;
    }

    return (
      <ListGroup>
        {category}
        {filteredEntries}
        <br/>
      </ListGroup>
    );
  }
}

FilteredEntries.propTypes =
{
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired,
  setAmount: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired
} 

module.exports = FilteredEntries;