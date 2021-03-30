function startPlay(level){
    setCookie("level",level)
    location.assign("./memory.html")
}
function chooseLevel(level) {
    switch (level) {
        case "Easy":
            startPlay(level)
            break;
            case "Medium":
                startPlay(level)
                break;
            case "Hard":
                startPlay(level)
                break;
        default:
            alert("choose level before start")
            break;
    }
}