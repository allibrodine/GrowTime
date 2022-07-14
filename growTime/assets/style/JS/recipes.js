const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41c64a1730mshdbae2ce298dfb19p128599jsn3fe16c6b06f2',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};
//setting list ingredient UL variables
var igList0 = document.getElementById(`igList0`);
var igList1 = document.getElementById(`igList1`);
var igList2 = document.getElementById(`igList2`);
var igList3 = document.getElementById(`igList3`);
var igList4 = document.getElementById(`igList4`);
var igList5 = document.getElementById(`igList5`);
var igList6 = document.getElementById(`igList6`);
//setting the ingredients lists array
var ingList0 = [];
var ingList1 = [];
var ingList2 = [];
var ingList3 = [];
var ingList4 = [];
var ingList5 = [];
var ingList6 = [];
//setting the labels aray
var labelList0 = [];
var labelList1 = [];
var labelList2 = [];
var labelList3 = [];
var labelList4 = [];
var labelList5 = [];
var labelList6 = [];
//sets the html list for Health labels
var hList0 = document.getElementById('hLabel0');
var hList1 = document.getElementById('hLabel1');
var hList2 = document.getElementById('hLabel2');
var hList3 = document.getElementById('hLabel3');
var hList4 = document.getElementById('hLabel4');
var hList5 = document.getElementById('hLabel5');
var hList6 = document.getElementById('hLabel6');

//link 
var link0 = document.getElementById('link0');
var link1 ="";
var link2 ="";
var link3 ="";
var link4 ="";
var link5 ="";
var link6 ="";


//adds pic 
function addPic(pic,id) {
    var img = document.createElement('img');
    img.src = pic;
    document.getElementById(id).appendChild(img);
};
//clears div
function delPic(id) {
    var div = document.getElementById(id);
    div.innerHTML = "";
};
function clearIng(id){
    list = document.getElementById(id)
    list.innerHTML = "";
};
var ingList = [];
//gets title element
var vegTitle = document.getElementById('vegName');
//gets search element
var input = document.getElementById('search');
//This sets the First page that will load
input.value = "Tomatillo";

//calls the Api for recipes and dynamically adds the html and content to the page.
var render = function(){
    
var search = input.value 
// for(var p = 0;p<7;p++){
//     delPic(`pic${p}`);
// };
 

fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${search}`, options)
.then(function(response){
    return response.json();
 })
.then(function(response){
    var vegName = (response.q).charAt(0).toUpperCase() + (response.q).slice(1);
    vegTitle.innerText = vegName;
    //for loop dynamically changes the recipes based on the search
     var recList = (response.hits);
    for(var l = 0;l<7;l++){
    clearIng(`igList${l}`);
    
};

     var pic0 = (response.hits[0].recipe.image);
     var pic1 = (response.hits[1].recipe.image);
     var pic2 = (response.hits[2].recipe.image);
     var pic3 = (response.hits[3].recipe.image);
     var pic4 = (response.hits[4].recipe.image);
     var pic5 = (response.hits[5].recipe.image);
     var pic6 = (response.hits[6].recipe.image);

     addPic(pic0, "pic0");
     addPic(pic1, "pic1");
     addPic(pic2, "pic2");
     addPic(pic3, "pic3");
     addPic(pic4, "pic4");
     addPic(pic5, "pic5");
     addPic(pic6, "pic6");
     
    var urlList = ''; 
    for(var i = 0;i < 7;i++){
        var recTitle = document.getElementById(`rec${i}`);
        ingList = (recList[i].recipe.ingredientLines);
        recTitle.innerText = (recList[i].recipe.label);
        urlList =  (recList[i].recipe.uri);
        // link0.setAttribute("href", `${urlList}`)



    }
    console.log(response);
    ingList0 = (response.hits[0].recipe.ingredientLines);
    labelList0 = (response.hits[0].recipe.healthLabels);

    for(var f=0; f< labelList0.length;f++ ){
        hList0.innerHTML += `<li>${labelList0[f]}</li>`;
        debugger;
    }; m
    for(var x = 0;x < ingList0.length;x++){
        igList0.innerHTML += `<li>${ingList0[x]}</li>`;
    };
    

    labelList1 = (response.hits[1].recipe.healthLabels);
    for(var g=0; g< labelList1.length;g++ ){
        hList1.innerHTML += `<li>${labelList1[g]}</li>`;
        
    };
    ingList1 = (response.hits[1].recipe.ingredientLines);
    for(var y = 0;y < ingList1.length;y++){
        igList1.innerHTML += `<li>${ingList1[y]}</li>`;
        
    };
    labelList2 = (response.hits[2].recipe.healthLabels);
    for(var h=0; h< labelList2.length;h++ ){
        hList2.innerHTML += `<li>${labelList2[h]}</li>`;
        debugger;
    };
    ingList2 = (response.hits[2].recipe.ingredientLines);
    for(var a = 0;a <ingList2.length;a++){
        igList2.innerHTML += `<li>${ingList2[a]}</li>`;    
    };

    labelList3 = (response.hits[3].recipe.healthLabels);
    for(var j=0; j< labelList3.length;j++ ){
        hList3.innerHTML += `<li>${labelList3[j]}</li>`;
    };
    ingList3 = (response.hits[3].recipe.ingredientLines);
    for(var b = 0;b < ingList3.length;b++){
        igList3.innerHTML += `<li>${ingList3[b]}</li>`;
        
    };

    labelList4 = (response.hits[4].recipe.healthLabels);
    for(var k=0; k< labelList4.length;k++ ){
        hList4.innerHTML += `<li>${labelList4[k]}</li>`;
    };
    ingList4 = (response.hits[4].recipe.ingredientLines);
    for(var c = 0;c < ingList4.length;c++){
        igList4.innerHTML += `<li>${ingList4[c]}</li>`;
        
    };

    labelList5 = (response.hits[5].recipe.healthLabels);
    for(var l=0; l< labelList5.length;l++ ){
        hList5.innerHTML += `<li>${labelList5[l]}</li>`;
       
    };
    ingList5 = (response.hits[5].recipe.ingredientLines);
    for(var d = 0;d < ingList5.length;d++){
        igList5.innerHTML += `<li>${ingList5[d]}</li>`;
        
    };

    labelList6 = (response.hits[6].recipe.healthLabels);
    for(var m=0; m< labelList6.length;m++ ){
        hList6.innerHTML += `<li>${labelList6[m]}</li>`;
    };
    ingList6 = (response.hits[6].recipe.ingredientLines);
    for(var e = 0;e < ingList6.length;e++){
        igList6.innerHTML += `<li>${ingList6[e]}</li>`;
        
    }
    
})
.catch(err => console.error(err));
};

render();