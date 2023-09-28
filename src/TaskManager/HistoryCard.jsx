

const HistoryCard = ({ title, id}) => {
    return (
        <div id={id} className="bg-white p-2 rounded mb-4">
            Task with title as {title} is added .
        </div>
    )
}

export default HistoryCard