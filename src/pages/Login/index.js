import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AUTH_ACTIONS from '@/src/store/modules/Auth/actions'
import ACTION_TYPES from '@/src/store/types/action-types'
import URLS from '@/src/enums/urls'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const authLogin = () => {
		dispatch(AUTH_ACTIONS[ACTION_TYPES.POST_AUTH_LOGIN]({ username: 'test', password: 'test' })).then(() => {
			navigate(URLS.PROFILE)
		})
	}
	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
			<h1>LOGIN</h1>
			<button onClick={authLogin}>login</button>
		</div>
	)
}

export default Login
