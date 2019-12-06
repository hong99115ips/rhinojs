$("#page").route({
    default: "overview",
    routes: [
	
        {
            url: "overview",
            view: "views/overview.php"
        },
		
        {
            url: "users",
            view: "views/users.php"
        },
		
    ]
});