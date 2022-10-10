import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AUTH_ACTIONS from '@/src/store/modules/Auth/actions'
import ACTION_TYPES from '@/src/store/types/action-types'
import URLS from '@/src/enums/urls'

const Settings = () => {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
			<h1>Settings</h1>
   <ul>
    <li>this Page is Protected / need Authentication!</li>
    <li>user access this Page after logged-in</li>
   </ul>
		</div>
	)
}

export default Settings
