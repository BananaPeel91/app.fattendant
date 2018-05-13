<template>
	<div class="row">
		<div class="col">
			<h1>Job id: {{ job.id }}</h1>
			<h3>Route </h3>
			<h3>Aircraft Model:</h3>
			<h3>Rate:</h3>

			<button class="btn btn-primary">Apply</button>


		</div>
	</div>
</template>

<script>
	export default {

		data() {

			return {

				job:{
					
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