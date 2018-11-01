<template>
<div>
	<div class="row">
		<div class="col header-row">
			<h1>{{ attendant.name }}</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<p><b>Email: </b>{{ attendant.email}}</p>
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h2>{{ attendant.name }}'s Aircraft Experience:</h2>
		</div>
	</div>
	<div class="row" v-for="aircraft in attendant.aircrafts">
		<div class="col">
			<p><b>{{ aircraft.manufacturer.name }}</b> {{ aircraft.model }}</p>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				attendant: {},
				aircrafts: [],
			}
		},

		mounted() {	
			
				this.$http.get('http://api.fattendant.local/api/attendants/' +this.$route.params.id)
                .then(response => {
                	
                    this.attendant = response.body;
                    console.log(response)
                
                });
		}
	}
</script>