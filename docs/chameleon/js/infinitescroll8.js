 //document.addEventListener("DOMContentLoaded", got);

 const field = 'username';
  const pageSize = 3;
 doct = ""; 
//let docquery2;
//let lastVisibleid;
//let lastVisible;

//load our data

function got(){
const db = firebase.firestore();
docquery = db.collection("posts").orderBy("tm", "desc").startAfter(doct).limit(8);
docquery.get().then(function(querySnapshot) {
   console.log(querySnapshot);
// var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

//     console.log(lastVisible.data().id);
//var lastVisibleid = lastVisible.data().id;
  //    console.log(JSON.stringify(lastVisible.data()));
 // localStorage.setItem("lastVisibleid", lastVisibleid);
  //localStorage.setItem("lastVisible1", (lastVisible.data()));
    querySnapshot.forEach(function(doc) {
      
       doct = doc;
     // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        
        
        //display
  $("#disp").append("<div>"+ doc.data().ti + "<br>"+ doc.data().im +"</div><hr>");
    });
});
}

  //Infinite Scroll
$(window).on("scroll", function() {
  
 //page height
 var scrollHeight = $(document).height();
 //scroll position
 var scrollPos = $(window).height() + $(window).scrollTop();
 // fire if the scroll position is 300 pixels above the bottom of the page
 if(((scrollHeight - 1) >= scrollPos) / scrollHeight == 0){
   //$('.load-more-days-button').click();
  // loadmore();

//var lastVisibleid= localStorage.getItem("lastVisibleid");
 // console.log(lastVisibleid);
 //   console.log(doct);

//  var docquery2 = localStorage.getItem("d");
const db = firebase.firestore();
    var docquery2 = db.collection("posts").orderBy("tm", "desc").startAfter(doct).limit(5);
    docquery2.get().then(function(querySnapshot) {
 
   
    querySnapshot.forEach(function(doc) {
      
      doct = doc;
      
      console.log(doc.id, " => ", doc.data());
      /*
      var das = doc.data();
      
      $.grep(das, function (h) {
  return h.ti <= 1000
    && h.sqft >= 500
    && h.num_of_beds >= 2
    && h.num_of_baths >= 2.5
});
      */
      
          $("#disp").append("<div>"+ doc.data().ti + "<br>"+ doc.data().im +"</div><hr>");
        if(doc.data() == ""){
          console.log("no more documents");
        }
    });
   
//    var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

 //    console.log(lastVisible.data().id);
//var lastVisibleid = lastVisible.data().id;
  //    console.log(JSON.stringify(lastVisible.data()));
 // localStorage.setItem("lastVisibleid", lastVisibleid);
  //     console.log(lastVisibleid);
  //   console.log(localStorage.getItem(JSON.parse("lastVisible")));
  }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
   
  });
  
 
