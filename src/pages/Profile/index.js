import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import AUTH_ACTIONS from '@/src/store/modules/Auth/actions'
import ACTION_TYPES from '@/src/store/types/action-types'
import URLS from '@/src/enums/urls'

const Profile = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authLogout = () => {
		dispatch(AUTH_ACTIONS[ACTION_TYPES.POST_AUTH_LOGOUT]()).then(() => {
			navigate(URLS.LOGIN)
		})
	}
	return (
		<div style={styles.container}>
			<h1>Profile</h1>
			<div>
				menu | <Link to={URLS.SETTINGS}>Settings</Link>
			</div>
			<button onClick={authLogout}>logout</button>
		</div>
	)
}

const styles = {
	container: { display: 'flex', gap: 10, flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }
}

export default Profile
