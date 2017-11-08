/**
 * Created by Administrator on 2017/11/8.
 */
var vm=avalon.define({
    $id:"box",
    name:"赵德华",
    flag:false,
    w:10,
    names:["tom","cat"],
    peoples:[{
        name:"tome",
        job:"IT"
    },{
        name:"cat",
        job:"Can"
    }],
    cssFont:"font-10",
    array: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
    clickHandle:function () {
       this.flag=!this.flag;
    }

});
