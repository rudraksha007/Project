function convert(id){
    x = document.getElementById(id);
    if (x.style.gridTemplateRows == '1fr' || x.style.gridTemplateRows == ''){
        x.style.gridTemplateRows = '0fr'
    }
    else{
        x.style.gridTemplateRows = '1fr'
    }
}