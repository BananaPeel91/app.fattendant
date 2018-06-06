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

			<button class="btn btn-primary app-btn">Apply</button>

			<hr>
		</div>
	</div>
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

				<button class="btn btn-primary app-btn">View Applicant</button>
				<hr>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default {

		data() {

			return {

				job:{
					operator: {},
					aircraft: {},
					routes: [],
					applicants: []
					
				},
				

				
				

		

			}
		},
		mounted() {

			
				this.$http.get('http://api.fattendant.local/api/jobs/' +this.$route.params.id)
                .then(response => {
                	
                    this.job = response.body;
                    console.log(response)
                
                });
                
		}
	}

</script>