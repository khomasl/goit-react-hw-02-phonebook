import './App.css'
import { Component } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addNewContact = (contact) =>
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }))

  render() {
    //console.log('state:', this.state.title, this.state.desc)
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </div>
    )
  }
}

export default App
