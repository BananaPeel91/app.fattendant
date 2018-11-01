<template>
<div>
	<div class="row">
		<div class="col header-row">
			<h1>Job id: {{ job.id }}</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<p><b>Operator:</b> {{ job.operator.name }}</p>
			<p><b>Aircraft Model:</b> {{ job.aircraft.model }}</p>

			<div v-for="route in job.routes">
        		<b>Routing:</b> {{ route.departure_airport[0].name }} - {{ route.arrival_airport[0].name }}
        		<b>Departure:</b> {{ route.departure_date }} - {{ route.departure_time }}</br>
        	
        	</div>
			
			<p><b>Rate:</b> £{{ job.rate }}</p>
			<button 
				v-if="fullDetails.user_type == 1 && applied == false" 
				class="btn btn-primary app-btn" @click.prevent="apply"
			>Apply</button>

			<hr>
		</div>
	</div>
	<div v-if="fullDetails.user_type == 2">

	<div class="row">
		<div class="col">
			<h2>Applicants</h2>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div v-for="applicant in job.applicants">
				<p><b>Name: </b>{{ applicant.name }}</p>
				<p><b>Email: </b>{{ applicant.email }}</p>
				<router-link :to="{ name: 'ShowAttendant', params: {id: applicant.id} }">
					<button class="btn btn-primary app-btn">View Applicant</button>
				</router-link>
				<hr>
			</div>
		</div>
	</div>
	</div>
</div>
</template>

<script>
	export default {

		data() {

			return {
					user: [],
					fullDetails: '',
				job:{
					operator: {},
					aircraft: {},
					routes: [],
					applicants: []	
				},

				newApplicant: {
					userId: '',
					jobId: '',
				},

				applied: false,
			}
		},
		mounted() {

			this.fullDetails = JSON.parse(localStorage.getItem('fullDetails'));
			console.log(this.fullDetails)
			this.$http.get('http://api.fattendant.local/api/jobs/' +this.$route.params.id)
            .then(response => {
                this.job = response.body
				this.checkApplied()	
            })
			.catch( error => {
				console.log(error)
			})   
						
		},

		methods: {

			apply() {
				axios.post(
					'http://api.fattendant.local/api/jobs/apply',
				 	{
						jobId: this.job.id,
						userId: this.fullDetails.id
					}, 
					{
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('authToken')
					}
				})
				.then( response => {
					alert(response.data.message)
					this.getApplicants()
					console.log('woop');
				})
				.catch( error => {
					console.log(error)
				})
			},

			getApplicants() {
				axios.post('http://api.fattendant.local/api/jobs/getApplicants', this.job, {
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('authToken')
					}
				})
				.then( response => {
					console.log(response)
					this.job.applicants = response.data
					this.checkApplied()
				})
				.catch( error => {
					console.log(error)
				})
			},

			checkApplied() {
				var vm = this
				this.job.applicants.forEach(function(currentValue) {
					console.log(currentValue.id);
					console.log(vm.fullDetails.id);
                	if (currentValue.id == vm.fullDetails.id) {
                		vm.applied = true;
                		console.log(vm.applied);
                	}
                })
			}
		}
	}

</script>