<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>Login</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">

					<div class="form-group">
						<label class="control-label"><b>Email</b></label>
						<input v-model="user.username" type="text" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Password</b></label>
						<input v-model="user.password" type="password" class="form-control">
					</div>	
		</div>
	</div>
	<div class="row">
		<div class="col">
					<button class="btn btn-primary app-btn" @click.prevent="login">Login</button>

		</div>
	</div>

</div>
</template>

<script>
	export default {

		data() {
			return {
				user:{
					username: '',
					password: '',
					
				},
			}
		},

		mounted() {
		},

		methods: {

			login() {
				console.log(this.user);
				axios.post('http://api.fattendant.local/api/auth/login', this.user)
				.then(response => {
					localStorage.setItem('authToken',response.data.access_token);

					axios.post('http://api.fattendant.local/api/auth/user', false, {
            			headers: {
                			'Authorization': 'Bearer ' + localStorage.getItem('authToken')
            			}
        				})
        			.then(response => {
            			localStorage.setItem('permissions', response.data.permissions);
            			localStorage.setItem('type', response.data.type);
            			localStorage.setItem('fullDetails', JSON.stringify(response.data.fullDetails))
            			this.$router.push("Jobs")
            			console.log(response.data)
            		});
				}, error => {
					console.log(error)
				
				});
			},

		}
	}

</script>