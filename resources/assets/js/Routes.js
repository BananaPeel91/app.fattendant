import Jobs from './components/Jobs.vue';
import Operators from './components/Operators.vue';
import Attendants from './components/Attendants.vue';
import ShowJob from './components/ShowJob.vue';

export const routes = [
	{path: '/jobs', component: Jobs},
	{path: '/jobs/:id', name: 'ShowJob', component: ShowJob},
	{path: '/operators', component: Operators},
	{path: '/attendants', component: Attendants}
];