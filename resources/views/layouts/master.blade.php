<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
     
        <link href="/css/app.css" rel="stylesheet" type="text/css">

        <title>Flight Attendant</title>

    </head>
    <body>
        <div class="container">

            <div class="row">

                <div class="col-md-3" style="background-color: #404040; height:100vh; text-align:center; color:white; font-weight: bold;  padding:0px;">

                    <div class="col">

                        <h1>LOGO</h1>

                    </div>

                    <ul class="nav" style="width:100%; padding:0px;">

                    <a style="width:100%; padding-top:10px; padding-bottom:10px;" href="#"><li class="nav-item" >

                        Jobs

                    </li></a>

                    <a style="width:100%; padding-top:10px; padding-bottom:10px;" href="#"><li class="nav-item" >

                        Operators

                    </li></a>
                   
                    <a style="width:100%; padding-top:10px; padding-bottom:10px;" href="#"><li class="nav-item" >

                        Attendants

                    </li></a>

                   
                    
                    <a style="width:100%; padding-top:10px; padding-bottom:10px; " href="{{ route('login') }}"><li style="color:#80d4ff;" class="nav-item">

                        Login

                    </li></a>
                    
                    <a style="width:100%; padding-top:10px; padding-bottom:10px;" href="{{ route('register') }}"><li style="color:#blue;" class="nav-item">

                        Register

                    </li></a>

                    </ul>
                
                

                   

                

                </div>

                <div class="col-md-9" style="background-color:white;">

                     @yield('content')

                </div>


               

                
            </div>
        </div>
    </body>
</html>
