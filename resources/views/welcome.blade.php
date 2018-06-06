@extends('layouts.master')

@section('content')

<div class="row">

    <div class="col">

        <h1>Jobs:</h1>

    </div>
</div>

<hr>

<div class="row" v-for="job in jobs">

    <div class="col">

        <h2><b>Job ID:</b> @{{ job.id }}</h2>
        <p><b>Routing:</b> Luton (EGGW) to Norwich (EGSH)</p>
        <p><b>Aircraft:</b> Hawker 900XP</p>
        <p><b>Departure Date:</b> 10/10/2010</p>
        <p><b>Rate:</b> £150</p>
        <button class=" btn btn-primary">View Job</button>
    </div>
</div>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.3.4/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.min.js"></script>
<script type="text/javascript">
 new Vue({
            el: '#app',
            data: {
                jobs:[]
            },
            mounted(){
                this.$http.get('http://api.fattendant.local/api/jobs')
                .then(response => {
                    this.jobs = response.body;
                    console.log(response)
                }, error => {
                    console.log(error)
                });
        
        }
    })
</script>









@endsection