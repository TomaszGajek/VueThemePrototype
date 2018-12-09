<?php

include_once('includes/setup.php');
include_once('includes/enqueues.php');
include_once('includes/localize.php');
include_once('includes/vue-router.php');
include_once('includes/rest-api.php');

include_once('includes/navbar.php');


 function register_post_types() {

 		 $labels = array(
            'name'=>'atrakcje',
            'singular_name'=>'atrakcje',
            'add_new'=>'Add Item',
            'all_items'=>'All Items',
            'add_new_item'=>'Add Item',
            'edit_item'=>'Edit Item',
            'new_item'=>'New Item',
            'view_item'=>'View Item',
            'search_item'=>'Search Portfolio',
            'not_found'=>'No items found',
            'not_found_in_trash'=>'No items found in trash',
            'parent_item_colon'=>'Parent Item'
        );
        
        $args = array(
            'labels'=>$labels,
            'public'=>true,
            'has_archive'=>true,
            'publicly_queryable'=>true,
            'query_var'=>true,
            'rewrite'=>true,
            'capability_type'=>'post',
            'hierarchical'=>false,
            'show_in_rest' => true,
            'supports'=> array(
                'title',
                'editor',
                'comments',
                'exerpt',
                'thumbnail',
                'revisions'
            ),
            'taxonomies'=> array('category'),
            'menu_position'=>4,
            'exclude_from_search'=> false
        );
        register_post_type('atrakcje',$args); 

 }

  add_action( 'init','register_post_types');