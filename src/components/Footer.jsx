import ListItem from "./ListItem"

export default function Footer() {
    return (
        <footer>
            <h1>Ableton</h1>
            <ListItem list={['Register Live or Push', 'About Ableton', 'Jobs']} />
            <ListItem title="Education" list={['Offers for students and teachers', 'Ableton for the Classroom', 'Ableton for Colleges and Universities']} />
            <ListItem title="Community" list={['Find Ableton User Groups', 'Find Certified Training', 'Become a Certified Trainer']} />
            <ListItem title="Distributors" list={['Find Distributors', 'Try Push in-store']} />
        </footer>
    )
}