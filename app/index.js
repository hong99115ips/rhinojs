/*
 * App
 *
**/
$("#app").append(`
<div id="wrapper">

    <ul class="sidebar navbar-nav pt-2" id="sidebar"></ul>

    <div id="content-wrapper">

        <nav class="navbar navbar-expand navbar-light border-bottom static-top mb-3" style="background-color:#f2f2f4">

            <a class="navbar-brand mr-1 py-2" href="javascript:;" id="sidebarToggle"><i class="fas fa-bars"></i></a>

        </nav>

        <div class="container-fluid h-min-100">

            <div id="page"></div>

        </div>

        <div id="copyright"></div>

    </div>

</div>
`);


/*
 * Sidebar
 *
**/
$("#sidebar").append(`
<img src="http://developers.ips.com.my/ERP/web-2/uploads/site/icon.png" class="rounded mx-auto d-block mt-4" style="width:35%;border:1px solid #383c4a">

<span class="d-block mx-auto mt-2 mb-3 text-muted hide">
    <i class="fa mr-1 fa-circle text-danger" style="font-size:5px;position:relative;bottom:3px"></i> Steve
</span>

<li class="nav-item">
    <a class="nav-link" href="#overview">
        <i class="fas fa-fw fa-tachometer-alt mr-1"></i>
        <span>Overview</span>
    </a>
</li>

<li class="nav-item">
    <a class="nav-link" href="#users">
        <i class="fas fa-fw fa-tachometer-alt mr-1"></i>
        <span>Users</span>
    </a>
</li>

<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder mr-1"></i>
        <span>Pages</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <h6 class="dropdown-header">Login Screens:</h6>
        <a class="dropdown-item" href="login.html">Login</a>
        <a class="dropdown-item" href="register.html">Register</a>
        <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
        <div class="dropdown-divider"></div>
        <h6 class="dropdown-header">Other Pages:</h6>
        <a class="dropdown-item" href="404.html">404 Page</a>
        <a class="dropdown-item" href="blank.html">Blank Page</a>
    </div>
</li>
<li class="nav-item">
    <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area mr-1"></i>
        <span>Charts</span></a>
</li>
<li class="nav-item">
    <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table mr-1"></i>
        <span>Tables</span></a>
</li>
`);


/*
 * Copyright
 *
**/
$("#copyright").append(`
<footer class="bg-light text-center py-4 small border-top">
	<div class="container my-auto">
		<div class="copyright text-center my-auto">
			<span>Copyright © Your Website 2019</span>
		</div>
	</div>
</footer>
`);