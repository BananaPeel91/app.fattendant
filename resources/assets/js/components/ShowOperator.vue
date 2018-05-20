<template>
<div>
	<div class="row">
		<div class="col header-row">
			<h1>{{ operator.name }}</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			
			<h2>{{ operator.address }}</h2>
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<h2>{{ operator.name }}'s Jobs</h2>
		</div>
		<div class="col-12" v-for="job in operator.jobs">
			<h3><b>Job id:</b> {{ job.id }}</h3>
			<hr>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<h2>{{ operator.name }}'s Fleet</h2>
		</div>
		<div class="col-12" v-for="aircraft in operator.aircrafts">
			<h3><b>Model:</b> {{ aircraft.model }}</h3>
			<p><b>Registration:</b> {{ aircraft.registration }}</p>
			<P><b>Year of Manufacture:</b> {{ aircraft.yom }}</P>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				operator:{},
			};
		},

		mounted(){
			this.$http.get('http://api.fattendant.local/api/operators/' +this.$route.params.id)
                .then(response => {
                	
                    this.operator = response.body;
                    console.log(response)
                
                });
		}
	}
</script>