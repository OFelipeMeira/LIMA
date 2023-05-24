var checkboxBracelets = document.querySelector('input[name="BRACELETS"]');
var braceletsClass = document.querySelectorAll(".bracelets");

checkboxBracelets.addEventListener('change', ()=>{
    if (checkboxBracelets.checked){
        braceletsClass.forEach(braceletsClass => {
            braceletsClass.style.display = 'block';
        })
    }else{
        braceletsClass.forEach(braceletsClass => {
        braceletsClass.style.display = 'none';
        })
    }
});
//-----------------------------------------------------------------------//
var checkboxNecklaces = document.querySelector('input[name="NECKLACES"]');
var necklacesClass = document.querySelectorAll(".necklaces");

checkboxNecklaces.addEventListener('change', ()=>{
    if (checkboxNecklaces.checked){
        necklacesClass.forEach(necklacesClass => {
            necklacesClass.style.display = 'block';
        })
    }else{
        necklacesClass.forEach(necklacesClass =>{
        necklacesClass.style.display = 'none';
        })
    }
});
//-----------------------------------------------------------------------//
var checkboxRings = document.querySelector('input[name="RINGS"]');
var ringsClass = document.querySelectorAll(".rings");

checkboxRings.addEventListener('change', ()=>{
    if(checkboxRings.checked){
        ringsClass.forEach(ringsClass => {
            ringsClass.style.display = 'block';
    })
    }else{
        ringsClass.forEach(ringsClass =>{
            ringsClass.style.display = 'none';
        })
    }
});