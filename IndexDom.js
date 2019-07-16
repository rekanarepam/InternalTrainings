window.onload = function () {
    loadHeader();
    loadMainContent();
    loadSideContent();
    loadFooter();
    storeData();
};
var storeData = function () {
    window.localStorage.setItem('TV9title1', 'TV9 HeadLines');
    window.localStorage.setItem('TV9title2', 'TV9 Business');
    window.localStorage.setItem('TV9title3', 'TV9 Sports');

    window.localStorage.setItem('TV9News1', 'The second attempt to launch the Chandrayaan 2 moon mission is likely to be made this month, sources in the Indian Space Research Organisation said today. The launch of Indias most ambitious space mission yet was aborted less than an hour before its scheduled lift-off at 2:51 am due to a technical snag in the rocket system, the ISRO said.');
    window.localStorage.setItem('TV9News2', 'The second attempt to launch the Chandrayaan 2 moon mission is likely to be made this month, sources in the Indian Space Research Organisation said today. The launch of Indias most ambitious space mission yet was aborted less than an hour before its scheduled lift-off at 2:51 am due to a technical snag in the rocket system, the ISRO said.');
    window.localStorage.setItem('TV9News3', 'The second attempt to launch the Chandrayaan 2 moon mission is likely to be made this month, sources in the Indian Space Research Organisation said today. The launch of Indias most ambitious space mission yet was aborted less than an hour before its scheduled lift-off at 2:51 am due to a technical snag in the rocket system, the ISRO said.');

    window.localStorage.setItem('NDTVtitle1', 'NDTV HeadLines');
    window.localStorage.setItem('NDTVtitle2', 'NDTV Business');
    window.localStorage.setItem('NDTVtitle3', 'NDTV Sports');

    window.localStorage.setItem('NDTVNews1', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');
    window.localStorage.setItem('NDTVNews2', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');
    window.localStorage.setItem('NDTVNews3', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');

    window.localStorage.setItem('AAJTAKtitle1', 'AAJTAK HeadLinese');
    window.localStorage.setItem('AAJTAKtitle2', 'AAJTAK Business');
    window.localStorage.setItem('AAJTAKtitle3', 'AAJTAK Sports');

    window.localStorage.setItem('AAJTAKNews1', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');
    window.localStorage.setItem('AAJTAKNews2', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');
    window.localStorage.setItem('AAJTAKNews3', 'New Zealand gave a performance to be proud. They gave skill, effort and sheer bloody mindedness. When you give the best of yourself and you have no more to give, what more can you do?');


}
var loadFooter = function () {
    var mainwrapperDiv = document.getElementById('main-wrapper');
    var footer = document.createElement('footer');
    footer.innerHTML = " &copy; News Feed 2019";
    mainwrapperDiv.appendChild(footer);
}
var loadHeader = function () {
    var mainwrapperDiv = document.getElementById('main-wrapper');
    var header = document.createElement('header');
    header.innerHTML = "NEWSFEED";


    let yetAnotherDiv = document.createElement('div');
    yetAnotherDiv.className = "yetanother";

    let spanYetAnother = document.createElement('SPAN');
    spanYetAnother.innerText = "Yet another newsfeed";
    yetAnotherDiv.appendChild(spanYetAnother);

    header.appendChild(yetAnotherDiv);
    mainwrapperDiv.appendChild(header);

};

var loadSideContent = function () {

    var sideboxDiv = document.createElement("div");
    sideboxDiv.className = "side-box";


    var sidemarginDiv = document.createElement("div");
    sidemarginDiv.className = "sidemargin";

    var selectSpan = document.createElement("SPAN");
    selectSpan.innerText = "SELECT CATEGORY";
    sidemarginDiv.appendChild(selectSpan);

    sideboxDiv.appendChild(sidemarginDiv);

    //Create array of options to be added
    var array = ["TV9", "NDTV", "AAJTAK"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    selectList.className = "select";
    //selectList.setAttribute("onchange", loadSectionContent(this.value));
    sideboxDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];

        selectList.appendChild(option);
    }

    selectList.addEventListener(
        'change',
        function () { loadSectionContentByDropDown(this.selectedIndex) },
        false
    );

    var divSide = document.createElement("div");
    divSide.style = "margin-top:30px";
    var subscribeSpan = document.createElement("SPAN");
    subscribeSpan.innerText = "SUBSCRIBE";
    divSide.appendChild(subscribeSpan);
    sideboxDiv.appendChild(divSide);

    var divSide2 = document.createElement("div");
    divSide2.style = "margin-top:10px";
    sideboxDiv.appendChild(divSide2);

    //textBox
    var subscribeTxtBox = document.createElement("input");
    subscribeTxtBox.className = "txtbox";
    subscribeTxtBox.setAttribute("type", "text");
    subscribeTxtBox.setAttribute("name", "SUBSCRIBE");
    divSide2.appendChild(subscribeTxtBox);
    //Subscribe Button
    var subscribeButton = document.createElement("input");
    subscribeButton.className = "buttonSubscribe";
    subscribeButton.setAttribute("type", "button");
    subscribeButton.setAttribute("name", "SUBSCRIBE");
    subscribeButton.setAttribute("value", "SUBSCRIBE");
    divSide2.appendChild(subscribeButton);

    var mainSection = document.getElementById("main-content").parentNode;
    mainSection.appendChild(sideboxDiv);
}


var loadMainContent = function () {

    var mainDivElement = document.createElement('div');
    var sectionMain = document.createElement('section');
    sectionMain.id = "main-content";

    mainDivElement.appendChild(sectionMain);

    var mainwrapperDiv = document.getElementById('main-wrapper');
    mainwrapperDiv.appendChild(mainDivElement);

    loadSectionContent();
}

var loadSectionContent = function () {
    var sectionMainContent = document.getElementById('main-content');
    //sectionMainContent.parentNode.removeChild(element);

    for (var i = 0; i < 3; i++) {

        //load three articles
        var article = document.createElement('article');
        article.id = "article" + i;
        //article.className = "posts";
        if (i == 2) {
            article.className = "poststhird";
        }
        else { article.className = "posts"; }
        

        var image = document.createElement('IMAGE');
        image.id = "image" + i;
        image.className = 'thumbnail';
        article.appendChild(image);

        var title = document.createElement("H1");
        title.id = "title" + i;
        title.innerText = "Title One";
        article.appendChild(title);

        var spanTextSmall = document.createElement("SPAN");
        spanTextSmall.id = "spanTextSmall" + i;
        spanTextSmall.className = "txtSmall";
        spanTextSmall.innerText = "Posted on 29 June,2019 //Category: Category One";
        article.appendChild(spanTextSmall);

        var sectionDiv = document.createElement('div');
        sectionDiv.id = "sectionDiv" + i;
        var contentPara = document.createElement('p');
        contentPara.id = "contentPara" + i;
        contentPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio tortor, vulputate at suscipit ac, hendrerit vitae lectus.Duis convallis risus et nunc tincidunt, non ornare semsagittis.Ut ut mollis lorem.Vestibulum ultrices eros id mattis bibendum.';
        sectionDiv.appendChild(contentPara);

        var element = document.createElement("input");
        element.id = "element" + i;
        element.className = "button";
        element.setAttribute("type", "Button");
        element.setAttribute("value", "Continue Reading");
        element.setAttribute("name", "Continue Reading");

        element.addEventListener(
            'click',
            function () { window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"); },
            false
        );

        sectionDiv.appendChild(element);
        article.appendChild(sectionDiv);
        sectionMainContent.appendChild(article);
        //

    }
}

var loadSectionContentByDropDown = function (selectedIndex) {
    var skillsSelect = document.getElementById("mySelect");
    var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;

    var title1 = document.getElementById("title0");
    title1.innerText = window.localStorage.getItem(selectedText + "title1");//TV9+title+1

    var title2 = document.getElementById("title1");
    title2.innerText = window.localStorage.getItem(selectedText + "title2");//TV9+title+1

    var title3 = document.getElementById("title2");
    title3.innerText = window.localStorage.getItem(selectedText + "title3");//TV9+title+1

    var contentPara1 = document.getElementById("contentPara0");//TV9News1
    contentPara1.innerText = window.localStorage.getItem(selectedText + "News1");//TV9+title+1

    var contentPara2 = document.getElementById("contentPara1");//TV9News1
    contentPara2.innerText = window.localStorage.getItem(selectedText + "News2");//TV9+title+1

    var contentPara3 = document.getElementById("contentPara2");//TV9News1
    contentPara3.innerText = window.localStorage.getItem(selectedText + "News3");//TV9+title+1

}