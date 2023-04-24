import { Component } from 'react'
import PropTypes from "prop-types";
import css from './ContactForm.module.css'

class ContactForm extends Component{
    static propType = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        name: '',
        number: '',
    }
    hendelChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    reset = ()=>{
        this.setState({name: '', number: ''});
    }
    render(){
        const {name, number} = this.state;
        return(
            <form  
                className={css.form}
                onSubmit={e=>{
                    this.props.onSubmit(e);
                    this.reset();
                }}>
            <label className={css.lable}>
            Name
            <input
                className={css.input}
                type="text"
                name="name"
                onChange={this.hendelChange}
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            <label className={css.lable}>
            Numder
            <input
                className={css.input}
                type="tel"
                name="number"
                onChange={this.hendelChange}
                value={number}
                maxLength="35"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </label>
            <button className={css.button} type="submit">Add contact</button>
            </form>
        )
    }
}
export default ContactForm;