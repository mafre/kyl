import React, { PropTypes } from 'react'
import Entry from '../components/Entry'
import Category from '../components/Category'

class FilteredEntries extends React.Component 
{
  render() 
  {
    var filteredEntries = [];
    var category = "";

    this.props.entries.forEach((entry) => 
    {
      if(entry.categories.some(category => category.id === this.props.category.id))
      {
        filteredEntries.push(
          <div key={entry.id}>
            <Entry entry={entry} setAmount={this.props.setAmount} deleteEntry={this.props.deleteEntry} />
          </div>);
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
      <div>
        {category}
        <ul className="no-bullet no-padding">
          {filteredEntries}
        </ul>
      </div>
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
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired).isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired,
  setAmount: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired
} 

module.exports = FilteredEntries;