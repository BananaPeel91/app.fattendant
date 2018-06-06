import Jobs from './components/Jobs.vue';
import Operators from './components/Operators.vue';
import ShowOperator from './components/ShowOperator.vue';
import Attendants from './components/Attendants.vue';
import ShowAttendant from './components/ShowAttendant.vue';
import ShowJob from './components/ShowJob.vue';
import CreateJob from './components/CreateJob.vue';


export const routes = [
	{path: '/jobs', component: Jobs},
	{path: '/jobs/view/:id', name: 'ShowJob', component: ShowJob},
	{path: '/operators', component: Operators},
	{path: '/operators/view/:id', name: 'ShowOperator', component: ShowOperator},
	{path: '/attendants', component: Attendants},
	{path: '/attendants/view/:id', name: 'ShowAttendant', component: ShowAttendant},
	{path: '/jobs/create', component: CreateJob}
];