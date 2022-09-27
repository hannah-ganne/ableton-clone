export default function NavList({ list }) {
    return (
                <nav>
                    <ul>
                {list.map(item => <li key={item}><a key={item} href="#">{item}</a></li>)}  
                    </ul>
                </nav>
    )
}