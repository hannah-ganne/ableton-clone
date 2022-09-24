export default function TextBloc({ children }) {
    return (
        <section className="text-bloc">
            <div className="text-container">
                {children}
            </div>
        </section>
    )
}