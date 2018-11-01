<template>
	<div>
	<div class="row">
		<div class="col header-row">
			<h1>Operator User Profile</h1>
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
	<div class="row">
		<div class="col">
			<div class="form-group">
				<label class="control-label"><b>Operator</b> </label>
				<select v-model="operator_id" class="form-control">
				<option value="">Select Operator</option>
				<option v-for="operator in operators" :value="operator.id">{{ operator.name }}</option>
				</select>
			</div>
		</div>
	</div>

	<button class="btn btn-primary app-btn" @click.prevent="updateProfile">Update profile</button>

</div>
</template>

<script>
	export default {

		data() {
			return {
				user: {},
				operators: [],
				operator_id: '',
			}
		},

		mounted() {
			this.user = JSON.parse(localStorage.getItem('fullDetails'))

			this.$http.get('http://api.fattendant.local/api/operators')
                .then(response => {
                    this.operators = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });
		},

		methods: {
			updateProfile () {
				this.$http.post('http://api.fattendant.local/api/updateOperatorProfile',
				{
					userId: this.user.id,
					operatorId: this.operator_id
				})
                .then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                });
			}

		}
	}

</script>