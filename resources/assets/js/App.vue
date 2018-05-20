<template>
	<div class="row">
	<div class="col-md-3" style="background-color: #194769; height:200vh; text-align:center; color:white; font-weight: bold;  padding:0px;">

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

                   
                    
                    <a  style="width:100%; padding-top:10px; padding-bottom:10px; " href="#"><li  class="nav-item login">

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

<style>

.header-row{
    background-color: #F2855E;
    color:white;

}
.header-row h1{
    font-weight: bold;
}
h2, h2 a, h1 a{
    color: #194769;
    font-weight:bold;
}
.app-btn{
    background-color: #F2855E;
    border-color: #F2855E;
    font-weight: bold;
}
.app-btn:hover{
    background-color: #194769;
    border-color: #194769;
}
.nav a:hover{
    background-color: #F2855E;
    text-decoration: none;
}
.nav a:hover > .nav-item.login{
    color:white;
}
.nav-item {
    color:white;
}
.nav-item.login{
    color:#F2855E;
}


</style>