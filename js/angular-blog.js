var myBlog = angular.module("myBlog", []);
myBlog.controller("HomeBlogsController", ["$scope", "$http", function($scope, $http){
  $http.get("./resources/blogposts/posts.json").then(
    function(response) {
      $scope.posts = response.data.posts;
    },
    function(response) {
      console.log("Could not retrieve: " + response);
    }
  );
}]);


myBlog.controller("ArchivedBlogController", ["$scope", "$http", function($scope, $http) {
  $http.get("./resources/blogposts/posts.json").then(
    function(response) {
      $scope.posts = response.data.posts;
    },
    function(response) {
      console.log("Could not retrieve: " + response);
    }
  );
}]);
