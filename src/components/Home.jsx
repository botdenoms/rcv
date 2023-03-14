import ElectionCard from './ElectionCard'

export default function Home() {
  return (
    <div className="home">
        <div className="tabs">
            <div className="tab active">
                Live
            </div>
            <div className="tab">
                Upcoming
            </div>
            <div className="tab">
                Previous
            </div>
        </div>
        <div className="content">
            <ElectionCard/>
        </div>
    </div>
  )
}
