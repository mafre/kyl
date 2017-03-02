import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import CreateEntry from '../components/CreateEntry'
import FridgeContent from '../components/FridgeContent'
import { Container, Row, Col } from 'reactstrap';

const App = ({categories, entries, actions}) => (
  <div className="App">
    <div className="App-header">
      <h2>Kylen</h2>
    </div>
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
          <div className="App-section">
            <CreateEntry categories={categories} createEntry={actions.createEntry} createCategory={actions.createCategory} />
          </div>
          <div className="App-section">
            <FridgeContent entries={entries} categories={categories} setAmount={actions.setAmount} deleteCategory={actions.deleteCategory} deleteEntry={actions.deleteEntry} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)
 
const mapStateToProps = state => ({
  entries: state.entries,
  categories: state.categories
}) 

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

App.propTypes =
{
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
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
