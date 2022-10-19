import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import reportWebVitals from './reportWebVitals'

import EntryPoint from '@/src/EntryPoint'

import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
		<EntryPoint />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register({
	onUpdate: registration => {
		alert('New version available!  Ready to update?');
		window
			.location
			.reload();
		if (registration && registration.waiting) {
			registration
				.waiting
				.postMessage({type: 'SKIP_WAITING'});
			registration
				.waiting
				.addEventListener('statechange', e => {
					if (e.target.state === 'activated') {
						window
							.location
							.reload()
					}
				})
		}
	}
});

