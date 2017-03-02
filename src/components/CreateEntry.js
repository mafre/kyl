import React from 'react'
import { Form, FormGroup, Label, Input, Button, Col, InputGroup, InputGroupButton } from 'reactstrap';
import Category from './Category'

class CreateEntry extends React.Component
{
  constructor(props)
	{
		super(props);

		this.state =
		{
			label: "",
			category: "",
			amount: 0,
			categories: []
		};
  }

	mapCategories = (stateCategory) =>
	{
		const filteredCategories = this.props.categories.filter(function(propCategory)
		{
			return stateCategory === propCategory.label;
		});

		return filteredCategories[0];
	}

  handleSubmit = (e) =>
	{
		e.preventDefault()

		if (!this.state.label.trim())
		{
			return
		}
		
		const categories = this.state.categories.map(this.mapCategories);

		this.props.createEntry(this.state.label, categories, parseInt(this.state.amount, 10));
		this.setState({ label: '', category: '', amount: 0, categories: [] });
  }

	createCategory = (aCategory) =>
	{
		if(!aCategory.trim())
		{
			return;
		}
		
		var findPropsCategory = this.props.categories.filter(function(category)
		{
			return category.label === aCategory;
		});

		if(findPropsCategory.length === 0)
		{
			this.props.createCategory(aCategory);
		}

		var findStateCategory = this.state.categories.filter(function(category)
		{
			return category === aCategory;
		});

		if(findStateCategory.length === 0)
		{
			this.setState({categories: this.state.categories.concat(aCategory)});
		}
	}

	deleteCategory = (category) =>
	{
		this.setState({categories: this.state.categories.filter(aCategory => aCategory !== category)});
	}

	handleLabelChange = (event) =>
	{
		this.setState({label: event.target.value});
  }

	handleCategoryChange = (event) =>
	{
		this.setState({category: event.target.value});
	}

	handleAmountChange = (event) =>
	{
		const target = event.target;
		this.setState({ amount: target.value });
	}

	handleAmountKeyPress = (event) =>
	{
		const re = /[0-9]+/g;
    if (!re.test(event.key)) {
      event.preventDefault();
    }
	}

  render()
	{
		const { label, category, amount, categories } = this.state;
		
    return (
			<Form onSubmit={(e) => this.handleSubmit(e)}>
				<FormGroup row>
					<Label sm={3} for="label">Namn</Label>
					<Col sm={9}>
						<Input type="text" name="label" id="label" value={label} onChange={(e) => this.handleLabelChange(e)} />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={3} for="amount">Mängd</Label>
					<Col sm={9}>
						<Input type="text" name="amount" id="amount" value={amount} onChange={(e) => this.handleAmountChange(e)} onKeyPress={(e) => this.handleAmountKeyPress(e)} />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={3} for="label">Kategori</Label>
					<Col sm={9}>
						<InputGroup>
							<Input type="text" name="category" id="category" value={category} onChange={(e) => this.handleCategoryChange(e)}/>
							<InputGroupButton type="button" onClick={(e) => this.createCategory(category)}>+</InputGroupButton>
						</InputGroup>
					</Col>
				</FormGroup>
				<ul className="no-bullet">
					{categories.map((category, index) =>
						<Category
							key={index}
							label={category}
							deleteCategory={(e) => this.deleteCategory(category)} />
					)}
				</ul>
				<div className="right">
					<br/>
					<Button>OK</Button>
				</div>
			</Form>
		);
  }
}

CreateEntry.propTypes = {
	categories: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
	createEntry: React.PropTypes.func.isRequired,
	createCategory: React.PropTypes.func.isRequired
};

export default CreateEntry
