/**
 * Init Elements in Elementor Frontend
 *
 */
;(function($, window, document, undefined){
    "use strict";

    $(window).on('elementor/frontend/init', function (){
        
        function auxGlobalElementorFrondEndElementReady( $scope ){
            // Initialize the Entrance Animation on render
            if( $scope.hasClass('aux-appear-watch-animation') ){
                $.fn.AuxinAppearAnimationsInit( $scope );
            }
            if( $scope.hasClass('aux-parallax-section') ){
                $.fn.AuxinParallaxSectionInit( $scope );
            }
        }
        
        elementorFrontend.hooks.addAction( 'frontend/element_ready/section', auxGlobalElementorFrondEndElementReady );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/column' , auxGlobalElementorFrondEndElementReady );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget' , auxGlobalElementorFrondEndElementReady );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_counter.default', function( $scope ) { $.fn.AuxinCounter( $scope ); } );
        
        elementorFrontend.hooks.addAction( 'frontend/element_ready/aux_faq.default',
            function( $scope ){ $.fn.AuxinIsotopeFAQInit( $('body') ); }
        );  
    });

})(jQuery, window, document);


/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */