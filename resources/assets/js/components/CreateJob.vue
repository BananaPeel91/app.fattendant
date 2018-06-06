<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>Create a New Job</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			
				
					<div class="form-group">
						<label class="control-label"><b>Operator</b> </label>
						<select v-model="job.operator_id" class="form-control">
						<option value="">Select Operator</option>
						<option v-for="operator in operators" :value="operator.id">{{ operator.name }}</option>
						</select>
					</div>

					<div class="form-group">
						<label class="control-label"><b>Aircraft</b> </label>
						<select v-model="job.aircraft_id" class="form-control">
						<option value="">Select Aircraft</option>
						<option v-for="aircraft in aircrafts" :value="aircraft.id">{{ aircraft.model }}</option>
						</select>
					</div>

					<div class="form-group">
						<label class="control-label"><b>Rate</b></label>
						<input v-model="job.rate" type="text" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Start Date</b></label>
						<input v-model="job.start_date" type="date" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Close Date</b></label>
						<input v-model="job.close_date" type="date" class="form-control">
					</div>

					<h2>Routes</h2>

					<div v-for="(route, index) in job.routes">

						<h3>Leg {{ index +1 }}</h3>

						<div class="form-group">
							<label class="control-label"><b>Departure Date</b></label>
							<input  v-model="route.departure_date" type="date" class="form-control">

						</div>

						<div class="form-group">
							<label class="control-label"><b>Departure Time</b></label>
							<input  v-model="route.departure_time" type="time" class="form-control">
						</div>

						<div class="form-group">
							<label class="control-label"><b>Departure Airport</b> </label>
							<select  v-model="route.departure_airport_id" class="form-control">
							<option value="">Select Airport</option>
							<option v-for="airport in airports" :value="airport.id">{{ airport.name }} ({{ airport.code }})</option>
							</select>
						</div>

						<div class="form-group">
							<label class="control-label"><b>Arrival Airport</b> </label>
							<select  v-model="route.arrival_airport_id" class="form-control">
							<option value="">Select Airport</option>
							<option v-for="airport in airports" :value="airport.id">{{ airport.name }} ({{ airport.code }})</option>
							</select>
						</div>

						<button class="btn btn-danger" @click.prevent="deleteRoute(index)">Delete This Leg</button>
						<hr>
					</div>			
		</div>
	</div>
	<div class="row">
		<div class="col">
					<button class="btn btn-success" @click.prevent="addRoute">Add Another Leg</button>
					<hr>
					<button class="btn btn-primary app-btn" @click.prevent="createJob">Submit</button>

		</div>
	</div>

</div>
</template>
<script>
	export default {

		data() {
			return {
				operators: [],
				aircrafts: [],
				airports: [],


				
				job:{
					operator_id: '',
					aircraft_id: '',
					rate: '',
					start_date: '',
					close_date: '',
					

				
				
				routes:[
					{departure_date: '', 
					departure_time: '',
					departure_airport_id: '',
					arrival_airport_id: '',
				}
				]
				},

				newJob: {
					id:'',
				}
			}
		},

		mounted() {
			this.$http.get('http://api.fattendant.local/api/operators')
                .then(response => {
                    this.operators = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });

                this.$http.get('http://api.fattendant.local/api/aircrafts')
                .then(response => {
                    this.aircrafts = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });

                this.$http.get('http://api.fattendant.local/api/airports')
                .then(response => {
                    this.airports = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                
                });
		},

		methods: {

			createJob() {

				this.$http.post('http://api.fattendant.local/api/jobs/create', this.job)
				.then(response => {
					this.newJob.id = response.body;
					alert('job added');
					console.log(response)
					this.$router.push({ name: 'ShowJob', params: {id: this.newJob.id } })
				}, error => {
					console.log(error)
				
				});
			},
		 	
			
			addRoute() {
				this.job.routes.push({
					departure_date: '',
					departure_time: '',
					departure_airport_id: '',
					arrival_airport_id: ''
				})
			},

			deleteRoute(index) {
				this.job.routes.splice(index, 1);
			}
		}
	}

</script>