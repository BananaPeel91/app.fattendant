<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>Sign Up</h1>
		</div>
	</div>
	<div class="row">
		<div class="col">

					<div class="form-group">
						<label class="control-label"><b>Name</b></label>
						<input v-model="user.name" type="text" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Email</b></label>
						<input v-model="user.email" type="text" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Password</b></label>
						<input v-model="user.password" type="password" class="form-control">
					</div>

					<div class="form-group">
						<label class="control-label"><b>Your role</b> </label>
						<select  v-model="user.user_type" class="form-control">
						<option value="1">I am a flight attendant</option>
						<option value="2">I work for an operator</option>
						</select>
					</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
					<button class="btn btn-primary app-btn" @click.prevent="signUp">Sign Up</button>

		</div>
	</div>

</div>
</template>

<script>
	export default {

		data() {
			return {
				user:{
					name: '',
					email: '',
					password: '',
					user_type: '',
				},
			}
		},

		mounted() {
		},

		methods: {

			signUp() {
				console.log(this.user);
				this.$http.post('http://api.fattendant.local/api/auth/signup', this.user)
				.then(response => {
						alert(response.body.message);
						console.log(response)
				}, error => {
					console.log(error)
				
				});
			},

		}
	}

</script>