$(".btn-primary").on("click",function(){
    var id=$(this).attr("id")
    var timeblock=id.split("-")[0]
    var textInput=$(`#${timeblock}-planner`).val()
    console.log (id,timeblock,textInput)
    localStorage.setItem(timeblock,textInput)
})
for(let i=8; i<18;i++){
    var localStorageData=localStorage.getItem(i)
    $(`#${i}-planner`).val(localStorageData)
}