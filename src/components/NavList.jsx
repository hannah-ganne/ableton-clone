export default function NavList({ list }) {
    return (
                <nav>
                    <ul>
                {list.map(item => <li><a href="#">{item}</a></li>)}  
                    </ul>
                </nav>
    )
}