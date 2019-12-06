<!--
______ _     _             
| ___ \ |   (_)            
| |_/ / |__  _ _ __   ___  
|    /| '_ \| | '_ \ / _ \ 
| |\ \| | | | | | | | (_) |
\_| \_|_| |_|_|_| |_|\___/ 

Version		1.0
Date		26/11/2019
Author		Steve Hong (https://hong115.com/)
Company		IT Partnership Solution (https://ips.com.my/)
-->
<html>

<head>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Title -->
    <title>RhinoJS</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.2/css/all.css">

    <!-- Rhino -->
    <link href="./assets/css/template.css" rel="stylesheet">
    <link href="./assets/css/custom.css" rel="stylesheet">
</head>

<body id="page-top">

	<div id="app"></div>

    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
	
    <!-- Popper.min.js -->
    <script src="//cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script
	
    <!-- Bootstrap -->
    <script src="//stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    <!-- jQuery UI  -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

    <!-- Rhino -->
    <script src="./assets/js/route.js"></script>
    <script src="./assets/js/template.js"></script>
    <script src="./assets/js/custom.js"></script>
	
	<!-- App -->
    <script src="./app/index.js"></script>

    <!-- Route -->
    <script src="./route/index.js"></script>

</body>

</html>
