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

$(function(){
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(item){
        if(pathname.includes(pages[item])){
            $(this).addClass('actives');
            $(this).attr('aria-current', 'page');
        }

    })
});