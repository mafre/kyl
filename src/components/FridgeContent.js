import React, { PropTypes } from 'react'
import FilteredEntries from '../components/FilteredEntries'

class FridgeContent extends React.Component
{
  render()
	{
    return (
			<div>
        <h3>Varor</h3>
        {this.props.categories.map(category =>
          <FilteredEntries key={category.id} category={category} entries={this.props.entries} setAmount={this.props.setAmount} deleteCategory={this.props.deleteCategory} deleteEntry={this.props.deleteEntry} />
        )}
      </div>
		);
  }
}

FridgeContent.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
  setAmount: React.PropTypes.func.isRequired,
  deleteCategory: React.PropTypes.func.isRequired,
  deleteEntry: React.PropTypes.func.isRequired
};

export default FridgeContent
