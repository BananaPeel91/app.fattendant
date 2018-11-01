import Jobs from './components/Jobs.vue';
import Operators from './components/Operators.vue';
import ShowOperator from './components/ShowOperator.vue';
import Attendants from './components/Attendants.vue';
import ShowAttendant from './components/ShowAttendant.vue';
import ShowJob from './components/ShowJob.vue';
import CreateJob from './components/CreateJob.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import UserDetails from './components/UserDetails.vue';
import OperatorProfile from './components/OperatorProfile.vue';

const guard = (to, from, next) => {
	// axios.post('http://api.fattendant.local/api/auth/check', false, {
	// 	headers: {
	// 		'Authorization': 'Bearer ' + localStorage.getItem('authToken')
	// 	}
	// })
	// .then(response => {
	// 	next()
	// }, error => {
	// 	if (error.response.status === 401) {
	// 		name = to.name.replace(/([A-Z])/g, ' $1').trim();
	// 		alert('You must be logged in to view ' + name)
	// 		next({ path: '/login' })
	// 	}		
	// })

	if (localStorage.getItem('permissions')) {
		alert('permissions')
		next()
	} else {
		alert('no permissions')
		next({ path: '/login' })
	}
}

const permission = (to, from, next) => {

	if (localStorage.getItem('permissions') && localStorage.getItem('permissions').includes(to.name)) {
		console.log('you have permission');
		next();
	} else {
		alert('you do not have permission to view this')
		next({ path: '/login'})
	}

}

const signedIn =  (to, from, next) => {
	axios.post('http://api.fattendant.local/api/auth/check', false, {
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem('authToken')
		}
	})
	.then(response => {
		alert('You are already logged in.')
		location.href = '/'
	}, error => {
		next()	
	})
}

export const routes = [
	{path: '/jobs', component: Jobs},
	{path: '/jobs/view/:id', name: 'ShowJob', component: ShowJob},
	{path: '/operators', component: Operators},
	{path: '/operators/view/:id', name: 'ShowOperator', component: ShowOperator},
	{path: '/attendants', component: Attendants},
	{path: '/attendants/view/:id', name: 'ShowAttendant', props: true, component: ShowAttendant},
	{path: '/jobs/create', name: 'CreateJob', component: CreateJob, beforeEnter: permission},
	{path: '/signup', name: 'SignUp', component: SignUp},
	{path: '/login', name: 'Login', component: Login, beforeEnter: signedIn},
	{path: '/logout', name: 'Logout', component: Logout, beforeEnter: guard},
	{path: '/userDetails', name: 'UserDetails', component: UserDetails, beforeEnter: guard},
	{path: '/operatorProfile', name: 'OperatorProfile', component: OperatorProfile},
];