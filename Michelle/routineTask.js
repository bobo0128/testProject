function TechFlowChart (doesItMove, ShouldItMove) {
let doesItMove = false
let ShouldItMove = false
    addTextToPage ('Does it move?')
    if (doesItMove) { 
        addTextToPage ('yes it moves')
        addTextToPage ('Should it move?')
        if (ShouldItMove) {
            addTextToPage ('yes it should')
            addTextToPage ('no problem')
        }
        else {
            addTextToPage ('no it shouldnt')
            addTextToPage ('apply duct tape')
        }
    }
    else { 
        addTextToPage ('No it does not move')
        addTextToPage ('Should it move')
        if (ShouldItMove) {
            addTextToPage ('yes it should')
            addTextToPage ('Apply WD40')
        }
        else {
            addTextToPage ('no it shouldnt')
            addTextToPage ('no problem')
        }
    }
}
