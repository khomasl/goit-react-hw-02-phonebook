import './App.css'
import { Component } from 'react'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList'
import { Filter } from './components/Filter/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  isContact = (name) =>
    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    )

  addNewContact = (contact) => {
    const { name, number } = contact
    if (name === '' || number === '') return

    return !this.isContact(name)
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }))
      : alert(`${name} is already in contact`)
  }

  newFilter = (filter) => this.setState({ filter })

  filteredContactsByName = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  }
  idContact = (name) => this.state.contacts.indexOf(this.isContact(name))

  deleteContact = (name) => {
    const id = this.idContact(name)
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts.slice(0, id),
        ...prevState.contacts.slice(id + 1),
      ],
    }))
  }

  render() {
    const {
      addNewContact,
      newFilter,
      filteredContactsByName,
      deleteContact,
    } = this

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />

        <h2>Contacts</h2>
        <Filter newFilter={newFilter} />
        <ContactList
          contacts={filteredContactsByName()}
          deleteContact={deleteContact}
        />
      </div>
    )
  }
}

export default App
