import React from 'react'
import { Form, FormGroup, Label, Input, Button, Col, Row, InputGroup, InputGroupButton } from 'reactstrap';

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

  handleSubmit = (event) =>
	{
		event.preventDefault()

		if (!this.state.label.trim())
		{
			return
		}
		
		this.props.createEntry(this.state.label, this.state.categories, parseInt(this.state.amount, 10));
		this.setState({ label: '', category: '', amount: 0, categories: [] });
  }

	filterPropsCategoryByLabel = (aCategory) =>
	{
		return aCategory.label === this.state.category;
	}
	createCategory = () =>
	{
		if(!this.state.category.trim())
		{
			return;
		}
		
		if(!this.props.categories.some(category => category.label === this.state.category))
		{
			this.props.createCategory(this.state.category);
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
    if (!re.test(event.key))
		{
      event.preventDefault();
    }
	}

	handleCategoryKeyPress = (event) =>
	{
		if (event.key === 'Enter')
		{
			event.preventDefault()
			this.createCategory()
    }
	}

	decreaseAmount = (amount) =>
	{
		if(this.state.amount > 0)
		{
			this.setState({amount: parseInt(this.state.amount, 10) - 1});
		}
	}

	increaseAmount = (amount) =>
	{
		this.setState({amount: parseInt(this.state.amount, 10) + 1});
	}

	handleCategorySelected = (aCategory) =>
	{
		var newCategories = this.state.categories;

		this.state.categories.some(id => aCategory.id === id) ?
			newCategories = newCategories.filter((aStateCategory) =>
			{
				return aCategory.id !== aStateCategory;
			})
			: newCategories = newCategories.concat(aCategory.id)
			
		this.setState({categories: newCategories});
	}

  render()
	{
		const { label, category, amount } = this.state;
		const categorySelectors = [];
		var isAdded = false;

		this.props.categories.forEach((category) => 
    {
			isAdded = this.state.categories.some(id => category.id === id);
      categorySelectors.push(
				<Row key={category.id}>
					<Col sm="3" xs="0"></Col>
					<Col sm="9" xs="12">
						<Label check>
							<Input
								type="checkbox"
								checked={isAdded}
								onChange={(e) => this.handleCategorySelected(category)}/>
							{' '}
							{category.label}
						</Label>
					</Col>
				</Row>);
    });
		
    return (
			<Form onSubmit={(e) => this.handleSubmit(e)}>
				<FormGroup row>
					<Label sm="3" xs="0" for="label">Namn</Label>
					<Col sm="9" xs="12">
						<Input type="text" name="label" id="label" value={label} onChange={(e) => this.handleLabelChange(e)} />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm="3" xs="0" for="amount">Mängd</Label>
					<Col sm="9" xs="12">
						<InputGroup>
							<Input type="text" name="amount" id="amount" value={amount} onChange={(e) => this.handleAmountChange(e)} onKeyPress={(e) => this.handleAmountKeyPress(e)} />
							<InputGroupButton type="button" onClick={(e) => this.decreaseAmount()}>-</InputGroupButton>
							<InputGroupButton type="button" onClick={(e) => this.increaseAmount()}>+</InputGroupButton>
						</InputGroup>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm="3" xs="0" for="label">Kategori</Label>
					<Col sm="9" xs="12">
						<InputGroup>
							<Input type="text" name="category" id="category" value={category} onChange={(e) => this.handleCategoryChange(e)} onKeyPress={(e) => this.handleCategoryKeyPress(e)} />
							<InputGroupButton type="button" onClick={(e) => this.createCategory()}>+</InputGroupButton>
						</InputGroup>
					</Col>
				</FormGroup>
				{categorySelectors}
				<div className="right">
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
