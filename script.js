$(".btn-primary").on("click",function(){
    var id=$(this).attr("id")
    var timeblock=id.split("-")[0]
    var textInput=$(`#${timeblock}-planner`).val()
    console.log (id,timeblock,textInput)
    localStorage.setItem(timeblock,textInput)
})
var currenthour = moment().hours()
console.log(currenthour)
$("#today").text(moment())
for(let i=8; i<18;i++){
    var localStorageData=localStorage.getItem(i)
    $(`#${i}-planner`).val(localStorageData)
    if(i>currenthour){
        $(`#${i}-planner`).addClass("bg-info")
    } else if(i=== currenthour){
        $(`#${i}-planner`).addClass("bg-warning")
    }else{
        $(`#${i}-planner`).addClass("bg-danger")
    }
}