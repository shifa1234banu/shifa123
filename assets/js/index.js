$(document).ready(function() {

    $("#name").blur(function (){
        var text=$(this).val()
        if (text.length<4) {
            $("#err1").show()
            flag1=1;
            if(flag1==1){
                console.log("err1btn")
                $("#submitbtn").prop("disabled", true);
            }
           
        } else {
            $("#err1").hide()
            flag1=0;
            $("#submitbtn").prop("disabled", false);
        }
    })
    
    $("#emailinput").blur(function(){
    
        var inputvalues=$(this).val()
        if(/^[a-zA-Z0-9-.]+\@[a-zA-Z]+\.[a-zA-Z]+$/.test(inputvalues)==false){
            $("#err2").show()
            flag2=1;
            if(flag2==1){
                $("#submitbtn").prop("disabled", true);
            }
        }else{
            $("#err2").hide()
            flag2=0;
            $("#submitbtn").prop("disabled", false);
    
        }
    })
    
    $("#subject").blur(function (){
        var text=$(this).val()
        if (text.length<4) {
            $("#err3").show()
            flag1=1;
            if(flag1==1){
                console.log("err1btn")
                $("#submitbtn").prop("disabled", true);
            }
           
        } else {
            $("#err3").hide()
            flag1=0;
            $("#submitbtn").prop("disabled", false);
        }
    })

    $("#message").blur(function (){
        var text=$(this).val()
        if (text.length<4) {
            $("#err4").show()
            flag1=1;
            if(flag1==1){
                console.log("err1btn")
                $("#submitbtn").prop("disabled", true);
            }
           
        } else {
            $("#err4").hide()
            flag1=0;
            $("#submitbtn").prop("disabled", false);
        }
    })
})