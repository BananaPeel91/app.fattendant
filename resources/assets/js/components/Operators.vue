<template>
<div>
	<div class="row">
		<div class="col header-row">
			<h1>Operators</h1>
		</div>
	</div>
	<div style="margin-top: 20px;" class="row" v-for="operator in operators">
		<div  class="col-12">
			<h1 style="color: #194769;"><router-link :to="{ name: 'ShowOperator', params: {id: operator.id } }"><b>{{ operator.name }}</b></router-link></h1>
			<p><b>Address</b> {{ operator.address }}</p>
		</div>

			<div v-if="operator.aircrafts.length > 0" class="col-12">
				<h3>{{ operator.name}}'s Fleet:</h3>
				<div v-for="aircraft in operator.aircrafts">
					<p><b>Model:</b> {{ aircraft.model }}</p>
					<p><b>Year of Manufacture:</b> {{ aircraft.yom }}</p>
					<hr>
				</div>
			</div>
			<div class="col">
			<router-link :to="{ name: 'ShowOperator', params: {id: operator.id } }"><button class="btn btn-primary app-btn">View Operator</button></router-link>
			</br>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data(){
		return {
			operators: [],
		};
	},

	mounted() {

		 this.$http.get('http://api.fattendant.local/api/operators')
                .then(response => {
                    this.operators = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });

	}
}
</script>