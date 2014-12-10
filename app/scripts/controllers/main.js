'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Products',
    			'description': 'Aplikasi yang dikustomisasi dan disesuaikan untuk memberikan kinerja tinggi.',
    			'faClass': 'icon-iconmonstr-brick',
                'link': '#mip-ed'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Services',
    			'description': 'Join development, join venture and consulting.',
    			'faClass': 'icon-iconmonstr-sitemap',
                'link': '#mip-ion'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Training',
    			'description': 'Training materi kurikulum jTechnopreneur dengan Agnostic approach.',
    			'faClass': 'icon-iconmonstr-tablet',
                'link': '#mip-iot'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Online Services',
                'description': 'Layanan online berdasarkan produk atau program di bawah Meruvian.',
                'faClass': 'icon-iconmonstr-cloud',
                'link': '#mip-db'
            }
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
