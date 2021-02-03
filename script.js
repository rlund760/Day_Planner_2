$(".btn-primary").on("click",function(){
    var id=$(this).attr("id")
    var timeblock=id.split("-")[0]
    var textInput=$(`#${timeblock}-planner`).val()
    console.log (id,timeblock,textInput)
    localStorage.setItem(timeblock,textInput)
})