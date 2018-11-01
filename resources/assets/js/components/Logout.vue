<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>Logout</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h3> Are you sure you want to logout?</h3>
		</div>
	</div>
	<div class="row">
		<div class="col">
					<button class="btn btn-primary app-btn" @click.prevent="logout">Yes</button>

		</div>
	</div>

</div>
</template>

<script>
	export default {

		data() {
			return {
		
			}
		},

		mounted() {
			console.log(localStorage.getItem('authToken'));
		},

		methods: {

			logout() {
				axios.post('http://api.fattendant.local/api/auth/logout', false, {
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('authToken')
					}
				})
					.then(response => {
						localStorage.clear();
						alert('You are logged out');
						this.$router.push("Jobs")
						console.log(response)
					}, error => {
					console.log(error)
				
				});
			},

		}
	}

</script>