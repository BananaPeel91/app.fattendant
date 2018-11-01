<template>
<div>
	<div class="row">
		<div class="col header-row">
			<h1>Attendants</h1>
		</div>
	</div>
	<div class="row" v-for="attendant in attendants">
		<div class="col">
			<h2><router-link :to="{ name: 'ShowAttendant', params: {id: attendant.id} }"><b>{{ attendant.name }}</b></router-link></h2>
			

			<p><b>Email:</b>{{ attendant.email }}</p>
			
			<h4 @click="showAircraft(attendant.id)">{{selectedAircraft == attendant.id ? "Hide" : "Show"}} {{ attendant.name }}'s aircraft experience:</h4>
			<div>
				<div v-if="selectedAircraft == attendant.id"  class="col" v-for="aircraft in attendant.aircrafts" >
					<p><b>Model :</b>{{ aircraft.model }}</p>
				</div>
			</div>
			
			<hr>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				
				attendants:[
			
				],
				selectedAircraft: ''
			}
		},

		

			
		

		mounted() {
			this.$http.get('http://api.fattendant.local/api/attendants')
                .then(response => {
                    this.attendants = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });
		},

		methods: {
			showAircraft(attendantId) {
				if(this.selectedAircraft == attendantId){
					this.selectedAircraft = '';
				} else {
				this.selectedAircraft = attendantId
				}
			}
		},
	}

</script>
<style scoped>
	.hidden{
		visibility:hidden;
		height: 0px;
		
	}
	.show{
		visibility:visible;
		height: 200px;
	}
	h4:hover{
		cursor:pointer;
		text-decoration: underline;
	}
</style>