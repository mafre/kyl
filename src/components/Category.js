import React from 'react'
import { Button, Row } from 'reactstrap';

class Category extends React.Component 
{
  render() 
  {
    return (
      <Row>
        <div className="category-button">
          {this.props.label}
        </div>
        <Button className="btn btn-link no-padding" onClick={this.props.deleteCategory}>
          remove
        </Button>
      </Row>
    );
  }
}

Category.propTypes =
{
  label: React.PropTypes.string,
  deleteCategory: React.PropTypes.func
} 

module.exports = Category;