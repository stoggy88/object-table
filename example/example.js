/**
*  Module
*
* gTableTest Description
*/

angular.module('test', ['objectTable']).controller('gTableTest', ['$scope','$http', function ($scope) {
	$scope.data = [{name: "Moroni", age: 50, money: -10},
    {name: "Tiancum", age: 43,money: 120},
    {name: "Jacob", age: 27, money: 5.5},
    {name: "Nephi", age: 29,money: -54},
    {name: "Enos", age: 34,money: 110},
    {name: "Tiancum", age: 43, money: 1000},
    {name: "Jacob", age: 27,money: -201},
    {name: "Nephi", age: 29, money: 100},
    {name: "Enos", age: 34, money: -52.5},
    {name: "Tiancum", age: 43, money: 52.1},
    {name: "Jacob", age: 27, money: 110},
    {name: "Nephi", age: 29, money: -55},
    {name: "Enos", age: 34, money: 551},
    {name: "Tiancum", age: 43, money: -1410},
    {name: "Jacob", age: 27, money: 410},
    {name: "Nephi", age: 29, money: 100},
    {name: "Enos", age: 34, money: -100}];

    $scope.test = function() {
      alert('Alert from controller!');
  }
}]);