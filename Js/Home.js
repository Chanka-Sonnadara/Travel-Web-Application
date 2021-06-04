window.onscroll = function(){
    scrollFuction()
};


/**start back to top */
function scrollFuction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("topbtn").style.display = "block";

    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}