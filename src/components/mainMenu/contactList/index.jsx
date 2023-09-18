import style from "./styles.module.css"

export default function ContactList({hashTable}) {
    
    return (
        <div className={style.wraper}>
            {hashTable.map((contact) => {
                return (
                    <h3 className={style.name}>{contact.name}</h3>
                )
            })}
        </div>
    )
}