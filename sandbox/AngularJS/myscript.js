var mainCtrl = function($scope) {
    $scope.users = [
        {"name":"taguchi", "score":10},
        {"name":"tanaka", "score":30},
        {"name":"yamada", "score":20},
        {"name":"yamadan", "score":40},
        ];
    $scope.today = new Date();
}