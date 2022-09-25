export default function ListItem({ title, list, flexRow }) {
    let style = {}
    flexRow && (style = {flexDirection: 'row', fontSize: '0.8em'})

    return (
        <div className="footer-main-item">
            {title && <h3>{title}</h3>}
            <ul style={style}>
                {list.map(item => <li key={item}><a key={item} href="#">{item}</a></li>)}
            </ul>
        </div>
    )
}