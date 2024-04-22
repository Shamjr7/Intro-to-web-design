function ClearForm(){
    //document.getElementById("fullname").value ='';
    document.getElementById("Contactform").reset();
}

function hidePtags(){
    let ptags = document.getElementsByTagName('p');
     for(let item of ptags){
        item.style.visibility = 'hidden';
        item.style.display = 'none';
    }
}

$('#jqueryBtn').click(function(){
    $('p').hide();

})