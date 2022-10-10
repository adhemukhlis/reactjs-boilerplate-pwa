/**
 * enumerasi penamaan ACTION
 * name dan value harus UPPER_CASE
 * terpisah berdasarkan modul actions.js menggunakan double slash
 * @var {object}
 */
const ACTION_TYPES = {
	// root
	// reset redux state
	ROOT_STATE_RESET: 'ROOT_STATE_RESET',

	// auth
	POST_AUTH_LOGIN: 'POST_AUTH_LOGIN',
	POST_AUTH_REGISTER: 'POST_AUTH_REGISTER',
	POST_AUTH_FORGOT: 'POST_AUTH_FORGOT',
	POST_AUTH_RESET: 'POST_AUTH_RESET',
	POST_AUTH_LOGOUT: 'POST_AUTH_LOGOUT',
	POST_AUTH_RESEND_VERIFICATION: 'POST_AUTH_RESEND_VERIFICATION',

	// profile
	FETCH_PROFILE_INFO: 'FETCH_PROFILE_INFO',
	POST_PROFILE_VERIFY: 'POST_PROFILE_VERIFY',
	POST_PROFILE_REQUEST_OTP: 'POST_PROFILE_REQUEST_OTP',
	FETCH_PROFILE_RESEND_OTP: 'FETCH_PROFILE_RESEND_OTP',
	POST_CHANGE_USERNAME: 'POST_CHANGE_USERNAME',
	POST_PROFILE_CHANGE_PICTURE: 'POST_PROFILE_CHANGE_PICTURE',
}

export default ACTION_TYPES