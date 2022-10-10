import apiClient from './client'
import MockAdapter from 'axios-mock-adapter'
import API_URLS from '@/src/enums/api-urls'

var mock = new MockAdapter(apiClient, {
	onNoMatch: 'passthrough',
	delayResponse: 1000
})

mock.onGet('/test').reply(200, {
	listOfObj: [
		{
			str: ''
		}
	]
})

mock.onPost(API_URLS.AUTH_LOGIN).reply(200, {
	message: 'user authenticated!',
	statusCode: 200,
	data: {
		token: 'token-dummy-test'
	}
})

mock.onPost(API_URLS.AUTH_LOGOUT).reply(200, {
	message: 'user session revoke success!',
	statusCode: 404
})
