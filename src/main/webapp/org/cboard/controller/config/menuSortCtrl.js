/**
 * Created by wanghaihua on 2017/9/8.
 */
/**
 * Created by wanghaihua on 2017/04/26.
 */


cBoard.controller('menuSortCtrl', function ($scope, $http) {

     $scope.showSecondMenu=false;
     $scope.getSecondMenu=function (id) {
         $scope.id=id;
         $scope.showSecondMenu=true;
     }
     $scope.saveOneMenu=function () {
         var arr=[];
         $("#sortable li").each(function (i,v) {
             var id=$(v).attr("id");
             arr.push({id:id,sort:i});
         })

         $http.post("dashboardmenu/updateCategory.do",{json:JSON.stringify({data:arr})}).success(function (response) {
            if(response.msg=="success"){
                alert("排序成功！")
            }else{
                alert("排序失败！")
            }
         });
     }

    $scope.saveSecondMenu=function () {
        var arr=[];
        $("#sortable1 li").each(function (i,v) {
            var id=$(v).attr("id");
            arr.push({id:id,sort:i});
        })
        $http.post("dashboardmenu/updateBoard.do",{json:JSON.stringify({data:arr})}).success(function (response) {
            if(response.msg=="success"){
                alert("排序成功！")
            }else{
                alert("排序失败！")
            }
        });
    }
});
