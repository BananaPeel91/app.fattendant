<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>User Details</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h3> Below are your details</h3>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<ul>
				<li>Name: {{ user.name }}</li>
				<li>Email: {{ user.email }}</li>
				<li>User Type: {{ user.user_type }}</li>
			</ul>

		</div>
	</div>

</div>
</template>

<script>
	export default {

		data() {
			return {
				user: [],
			}
		},

		mounted() {
			axios.post('http://api.fattendant.local/api/auth/user', false, {
				headers: {
					'Authorization': 'Bearer ' + localStorage.getItem('authToken')
				}
			})
			.then(response => {
				this.user = response.data;
				}, error => {
					console.log(error)
			});
		},

		methods: {

		}
	}

</script>