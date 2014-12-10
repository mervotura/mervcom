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
    			'title': 'Produk',
    			'description': 'Aplikasi yang dikustomisasi dan disesuaikan untuk memberikan kinerja tinggi.',
    			'faClass': 'icon-dice',
                'link': '#products'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Layanan',
    			'description': 'Pengembangan bersama (joint development) atau usaha bersama (joint venture) dan konsultansi.',
    			'faClass': 'icon-cogs',
                'link': '#service'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Pelatihan',
    			'description': 'Pelatihan materi kurikulum jTechnopreneur dengan pendekatan Agnostik.',
    			'faClass': 'icon-copy2',
                'link': '#training'
    		},
            {
                'image': 'images/bg4.jpg',
                'text': 'title',
                'title': 'Layanan Online',
                'description': 'Layanan online berdasarkan produk atau program di bawah Meruvian.',
                'faClass': 'icon-cloud',
                'link': '#online-services'
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
