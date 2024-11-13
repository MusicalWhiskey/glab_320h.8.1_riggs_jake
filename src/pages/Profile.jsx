import { useParams } from 'react-router-dom'

export default function Profile(props) {
    const params = useParams()
    const UID = params.id
    return (
        <>
            <h1>Profile</h1>
            <h2>Welcome, God King {UID}</h2>
        </>
    )
}