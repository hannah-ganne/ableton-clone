export default function TextBloc({ children }) {
    return (
        <div className="text-bloc">
            <div className="text-container">
                {children}
            </div>
        </div>
    )
}