import React from 'react'
import { Button, ListGroupItem } from 'reactstrap';

class Category extends React.Component 
{
  render() 
  {
    return (
      <ListGroupItem color="info">
        <div className="category-button">
          {this.props.label}
        </div>
        <Button className="btn btn-secondary btn-sm align-right" onClick={this.props.deleteCategory}>
          remove
        </Button>
      </ListGroupItem>
    );
  }
}

Category.propTypes =
{
  label: React.PropTypes.string,
  deleteCategory: React.PropTypes.func
} 

module.exports = Category;