<template>
	<div class="row">
	<div class="col-md-3" style="background-color: #404040; height:200vh; text-align:center; color:white; font-weight: bold;  padding:0px;">

                    <div class="col">

                        <h1>LOGO</h1>

                    </div>

                    <ul class="nav" style="width:100%; padding:0px;">

                    <router-link style="width:100%; padding-top:10px; padding-bottom:10px;" to="/jobs"><li class="nav-item" >

                        Jobs

                    </li></router-link>

                    <router-link style="width:100%; padding-top:10px; padding-bottom:10px;" to="/operators"><li class="nav-item" >

                        Operators

                    </li></router-link>
                   
                   <router-link style="width:100%; padding-top:10px; padding-bottom:10px;" to="/attendants"><li class="nav-item" >

                        Attendants

                    </li></router-link>

                   
                    
                    <a style="width:100%; padding-top:10px; padding-bottom:10px; " href="#"><li style="color:#80d4ff;" class="nav-item">

                        Login

                    </li></a>
                    
                    <a style="width:100%; padding-top:10px; padding-bottom:10px;" href="#"><li style="color:#blue;" class="nav-item">

                        Register

                    </li></a>

                    </ul>
                
                

                   

                

                </div>

                <div class="col-md-9" style="background-color:white;">
                   <router-view></router-view>

                </div>

</div>


</template>

<script>
	
</script>