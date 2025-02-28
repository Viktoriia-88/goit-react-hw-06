import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from './ContactList.module.css'

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const visibleContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={s.contactList}>
            {visibleContacts.length > 0 ? (
                visibleContacts.map((contact) => (
                    <li className={s.contactItem} key={contact.id}>
                        <Contact
                            contact={contact}
                        />
                    </li>
                ))
            ) : (
                <p className={s.noFound}>Contact not found</p>
            )}
        </ul>
    );
}