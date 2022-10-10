/**
 * enumerasi penamaan REDUCER
 * name dan value harus UPPER_CASE
 * format nama reducer [MODULE_NAME]_[REDUCER_NAME]
 * terpisah berdasarkan modul reducers.js menggunakan double slash
 * @var {object}
 */
const REDUCER_TYPES = {
	// root
	ROOT_STATE_RESET: 'ROOT_STATE_RESET',

	// auth
	AUTH_LOGIN: 'AUTH_LOGIN',
	AUTH_REGISTER: 'AUTH_REGISTER',
	AUTH_REGISTER_LOADING: 'AUTH_REGISTER_LOADING',
	AUTH_FORGOT: 'AUTH_FORGOT',
	AUTH_FORGOT_LOADING: 'AUTH_FORGOT_LOADING',
	AUTH_RESET: 'AUTH_RESET',
	AUTH_RESET_LOADING: 'AUTH_RESET_LOADING',
	AUTH_LOGOUT: 'AUTH_LOGOUT',
	AUTH_LOGOUT_LOADING: 'AUTH_LOGOUT_LOADING',
	AUTH_VERIFY_EMAIL: 'AUTH_VERIFY_EMAIL',
	AUTH_VERIFY_EMAIL_LOADING: 'AUTH_VERIFY_EMAIL_LOADING',
	AUTH_RESEND_VERIFICATION_LOADING: 'AUTH_RESEND_VERIFICATION_LOADING',

	// user profile
	PROFILE_INFO: 'PROFILE_INFO',
	PROFILE_INFO_LOADING: 'PROFILE_INFO_LOADING',
	PROFILE_VERIFY: 'PROFILE_VERIFY',
	PROFILE_VERIFY_LOADING: 'PROFILE_VERIFY_LOADING',
	PROFILE_REQUEST_OTP: 'PROFILE_REQUEST_OTP',
	PROFILE_REQUEST_OTP_LOADING: 'PROFILE_REQUEST_OTP_LOADING',
	PROFILE_RESEND_OTP: 'PROFILE_RESEND_OTP',
	PROFILE_RESEND_OTP_LOADING: 'PROFILE_RESEND_OTP_LOADING',
	PROFILE_CHANGE_USERNAME: 'PROFILE_CHANGE_USERNAME',
	PROFILE_CHANGE_USERNAME_LOADING: 'PROFILE_CHANGE_USERNAME_LOADING',
	PROFILE_CHANGE_REFERRAL: 'PROFILE_CHANGE_REFERRAL',
	PROFILE_CHANGE_REFERRAL_LOADING: 'PROFILE_CHANGE_REFERRAL_LOADING',
	PROFILE_CHANGE_PICTURE_LOADING: 'PROFILE_CHANGE_PICTURE_LOADING',
}

export default REDUCER_TYPES