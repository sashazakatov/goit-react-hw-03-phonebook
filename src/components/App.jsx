import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from './ContactList'
class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }
  deleteContact = (id) =>{
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  }
  isContactExists = (value) => {
    return this.state.contacts.find(({name}) => name.toLowerCase() === value.toLowerCase());
  }
  hendelSubmit = (e) =>{
    e.preventDefault();
    const {name, number} = e.target;
    if(this.isContactExists(name.value)){
      alert(`${name.value} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({contacts: [...prevState.contacts, {id:nanoid(), name: name.value, number: number.value}]}))
  }
  setFilter = (e) =>{
    this.setState({filter: e.target.value})
  }
  hendelFilter = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()))
  }
  render(){
    const filteredArray = this.hendelFilter()
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.hendelSubmit}/>
      <h1>Contacts</h1>
      <Filter filter={this.state.filter} onFilter={this.setFilter} />
      <ContactList filteredArray={filteredArray} onDelete={this.deleteContact}/>
      </div>
    );
  }
};
export default App