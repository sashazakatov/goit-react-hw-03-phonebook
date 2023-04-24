import { Component } from "react";
import PropTypes from "prop-types";
import css from './ContactList.module.css'

class ContactList extends Component{
        static propTypes = {
            onDelete: PropTypes.func.isRequired,
            filteredArray: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            }))
        }
    render(){
        const {onDelete, filteredArray} = this.props;
        return(
            <ul className={css.list}>
            {
                
                filteredArray.map(({id, name, number}) => 
                <li className={css.item} key={id}>
                    <p>{name}: {number}</p>
                    <button type="button" onClick={()=>{onDelete(id)}}>Delete</button>
                </li>)
            }
            </ul>
        )
    }
}

export default ContactList;