export default function ListItem({title, list}) {
    return (
        <>
            {title && <h3>{title}</h3>}
            <ul>
                {list.map(item => <li key={item}><a key={item} href="#">{item}</a></li>)}
            </ul>
        </>
    )
}