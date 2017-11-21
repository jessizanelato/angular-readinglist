(function(){
	'use strict';

	angular.module('readingList', [])

	.controller("ReadingListController", function() {
		this.books = books;
		this.genres = genres;
	})

	.directive("bookGenres", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/book-genres.html',
			scope: {
				genres: '='
			}
		}
	})

	.directive("bookCover", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/book-cover.html',
			scope: {
				book: "="
			}
		}
	})

	.directive("bookInfo", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/book-info.html',
			scope: {
				book: '='
			}
		}
	})

	.directive("reviewForm", function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/review-form.html',
			controller: function() {
				this.showForm = false;
				this.rating = rating;
				this.book = {genres:{}};
				this.success = '';
				this.addReview = function(form){
					books.push(this.book);
					this.book = {genres:{}};
					form.$setPristine();
					this.success = "This is a success alert!";
				};
				this.clearSuccess = function(){
					this.success = '';
				};
			},
			controllerAs: "reviewFormCtrl",
			scope: {
				books: "=",
				genres: "="
			}
		}
	});

var genres = ['fantasy', 'poetry', 'drama', 'romance', 'humor', 'horror', 'mistery', 'non-fiction'];
var rating = [5,4,3,2,1];
var books = [{
				title:'Before I go',
				author: 'Colleen Oakley',
				isbn: '1476761663',
				review: 'Gummi bears pie ice cream. Dessert wafer sugar plum carrot cake bear claw. Marzipan dragée bear claw lollipop. Lemon drops biscuit cake bear claw.',
				rating: 4,
				genres: {'romance': true, 'drama': true}
			},
			{
				title:'Harry Potter and the Sorcerer\'s Stone',
				author: 'J.K. Rowling',
				isbn: '0439708184',
				review: 'Cupcake bear claw oat cake sweet roll cheesecake chocolate cake jelly-o powder danish. Apple pie gingerbread macaroon. Bonbon lollipop toffee cupcake cake marzipan. Gingerbread cheesecake oat cake donut gummi bears icing cake gummi bears jelly.',
				rating: 4,
				genres: {'fiction': true}
			},
			{
				title:'The girl on the train',
				author: 'Paula Hawkins',
				isbn: '1594634025',
				review: 'Marzipan chocolate donut. Powder candy chocolate cake cake marzipan croissant dragée. Jujubes danish liquorice liquorice cotton candy topping.',
				rating: 5,
				genres: {'mistery': true}
			}]
})();