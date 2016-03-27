<?php 

/*
# =================================================
# functions.php
#
# Theme functions
# =================================================
*/

/*=================================
=            Constants            =
=================================*/

define ('THEMEROOT', get_stylesheet_directory_uri());


/*==============================================
=            Theme styles & scripts            =
==============================================*/

if (! function_exists('nd_scripts')){
	function nd_scripts(){

		// Javascript
		wp_register_script( 'scripts', THEMEROOT . '/dist/script.min.js', array('jquery'), false, true );
		wp_enqueue_script( 'scripts' );

		// Stylesheets
		wp_enqueue_style('fira-sans', 'https://fonts.googleapis.com/css?family=Fira+Sans:400,500');
	}
	add_action('wp_enqueue_scripts', 'nd_scripts');
}





?>