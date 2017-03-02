import React from 'react'
import { Button } from 'reactstrap';

class Category extends React.Component 
{
  render() 
  {
    return (
      <li>
        <Button className="category-button" onClick={this.props.deleteCategory}>
          x
        </Button>
        {this.props.label}
      </li>
    );
  }
}

Category.propTypes =
{
  label: React.PropTypes.string,
  deleteCategory: React.PropTypes.func
} 

module.exports = Category;