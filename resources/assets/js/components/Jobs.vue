<template>
<div>
	<div class="row">
		<div class="col">
			<h2>Filter Jobs</h2>
			<form>
			<div class="form-group">
				<label class="control-label"><b>Choose Aircraft Model</b> </label>
				<select v-model="filters.aircraftId" class="form-control">
					<option  value="0">Select Aircraft</option>
					<option v-for="aircraft in aircrafts" :value="aircraft.id">{{ aircraft.model }}</option>
				</select>
			</div>


			<div class="form-group">
				<label class="control-label"><b>Choose Operator</b> </label>
				<select v-model="filters.operatorId" class="form-control">
					<option value="0">Select Operator</option>
					<option v-for="operator in operators" :value="operator.id">{{ operator.name }}</option>
				</select>

			</div>


			<div class="form-group">

			</div>

			<button @click.prevent="search" class="btn btn-primary">Search</button>
			<button @click.prevent="resetFilters" class="btn btn-primary">Reset Filters</button>
			<hr>
			</form>
		</div>
	</div>
	<div class="row" v-for="job in jobs">

    	<div class="col">

        <h2><router-link :to="{ name: 'ShowJob', params: {id: job.id } }"><b>Job ID:</b> {{ job.id }}</router-link></h2>
        <p><b>Routing:</b> Luton (EGGW) to Norwich (EGSH)</p>
        <p><b>Operator:</b> {{ job.operator.name }}</p>
        <p><b>Aircraft:</b> {{ job.aircraft.model }}</p>
        	<div v-for="job_route in job.job_routes">
        	<p v-for="route in routes" v-if="route.id == job_route.route_id">
        	<b>Departure:</b> {{ route.departure_date }} - {{ route.departure_time }}</br>
        	<b>Route:</b> {{ route.departure_airport[0].name }} to {{ route.arrival_airport[0].name}}</p>
        	</div>
        <p><b>Start Date:</b> {{ job.start_date }}</p>
        <p><b>Rate:</b> £{{ job.rate }}</p>
        <button class=" btn btn-primary">View Job</button>
        <hr>
    	</div>
    	
	</div>

</div>
</template>


<script>
	export default {

		data() {
			return {
				jobs:[],
				routes:[],
				operators:[],
				aircrafts:[],

				filters: {
					aircraftId: 0,
					operatorId: 0
				}

			};
		},

		methods: {

			search(){

				this.$http.post('http://api.fattendant.local/api/jobs/search', this.filters)
                        .then(function(response) {
                            console.log(response);
                            this.jobs = response.body
                        });
			},

			resetFilters(){

				this.filters.aircraftId = 0;
				this.filters.operatorId = 0;
				this.search();
			}
		},

		mounted(){
                this.$http.get('http://api.fattendant.local/api/jobs')
                .then(response => {
                    this.jobs = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });

                this.$http.get('http://api.fattendant.local/api/routes')
                .then(response => {
                    this.routes = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });

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
        
        }
	}
</script>
