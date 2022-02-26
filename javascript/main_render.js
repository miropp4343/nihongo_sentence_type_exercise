var sentence = [
    {
    　//,:、　．：。
      article: 'パソコンは苦手がと言う人の大半',
      seqnum_article:[4,1,2,1,1,2,1,1,2],
      Hiragana:'パソコンはにがてがというひとのたいはん',
      romaji:'PASOKONNHANIGATEGATOIUHITONOTAIHANN',
      seqnum:[2,2,2,2,2,4,2,2,2,1,1,4,2,3,4]
    },
   
   
];
var kakasi_format_sent = [
    {
        "orig": "私",
        "orig_len": 1,
        "hira": "わたし",
        "hira_len": 3,
        "hepburn": "watashi",
        "hepburn_len": 7
    } ,
    {
        "orig": "は",
        "orig_len": 1,
        "hira": "は",
        "hira_len": 1,
        "hepburn": "ha",
        "hepburn_len": 2
    } ,
    {
        "orig": "毎月",
        "orig_len": 2,
        "hira": "まいつき",
        "hira_len": 4,
        "hepburn": "maitsuki",
        "hepburn_len": 8
    } ,
    {
        "orig": "東京",
        "orig_len": 2,
        "hira": "とうきょう",
        "hira_len": 5,
        "hepburn": "toukyou",
        "hepburn_len": 7
    } ,
    {
        "orig": "、",
        "orig_len": 1,
        "hira": "、",
        "hira_len": 1,
        "hepburn": ",",
        "hepburn_len": 1
    } ,
    {
        "orig": "大阪間",
        "orig_len": 3,
        "hira": "おおさかかん",
        "hira_len": 6,
        "hepburn": "oosakakan",
        "hepburn_len": 9
    } ,
    {
        "orig": "を",
        "orig_len": 1,
        "hira": "を",
        "hira_len": 1,
        "hepburn": "wo",
        "hepburn_len": 2
    } ,
    {
        "orig": "通って",
        "orig_len": 3,
        "hira": "とおって",
        "hira_len": 4,
        "hepburn": "tootte",
        "hepburn_len": 6
    } ,
    {
        "orig": "いる",
        "orig_len": 2,
        "hira": "いる",
        "hira_len": 2,
        "hepburn": "iru",
        "hepburn_len": 3
    }
];


var kakasi_format_sent1 =[
{
    "orig": "私",
    "orig_len": 1,
    "hira": "わたし",
    "hira_len": 3,
    "hepburn": "watashi",
    "hepburn_len": 7
} ,
{
    "orig": "は",
    "orig_len": 1,
    "hira": "は",
    "hira_len": 1,
    "hepburn": "ha",
    "hepburn_len": 2
} ,
{
    "orig": "毎月",
    "orig_len": 2,
    "hira": "まいつき",
    "hira_len": 4,
    "hepburn": "maitsuki",
    "hepburn_len": 8
} ,
{
    "orig": "東京",
    "orig_len": 2,
    "hira": "とうきょう",
    "hira_len": 5,
    "hepburn": "toukyou",
    "hepburn_len": 7
} ,
{
    "orig": "、",
    "orig_len": 1,
    "hira": "、",
    "hira_len": 1,
    "hepburn": ",",
    "hepburn_len": 1
} ,
{
    "orig": "大阪間",
    "orig_len": 3,
    "hira": "おおさかかん",
    "hira_len": 6,
    "hepburn": "oosakakan",
    "hepburn_len": 9
} ,
{
    "orig": "を",
    "orig_len": 1,
    "hira": "を",
    "hira_len": 1,
    "hepburn": "wo",
    "hepburn_len": 2
} ,
{
    "orig": "通って",
    "orig_len": 3,
    "hira": "とおって",
    "hira_len": 4,
    "hepburn": "tootte",
    "hepburn_len": 6
} ,
{
    "orig": "いる。",
    "orig_len": 3,
    "hira": "いる。",
    "hira_len": 3,
    "hepburn": "iru.",
    "hepburn_len": 4
} ,
{
    "orig": "ベットを",
    "orig_len": 4,
    "hira": "べっとを",
    "hira_len": 4,
    "hepburn": "bettowo",
    "hepburn_len": 7
} ,
{
    "orig": "飼う",
    "orig_len": 2,
    "hira": "かう",
    "hira_len": 2,
    "hepburn": "kau",
    "hepburn_len": 3
} ,
{
    "orig": "。",
    "orig_len": 1,
    "hira": "。",
    "hira_len": 1,
    "hepburn": ".",
    "hepburn_len": 1
} ,
{
    "orig": "ご",
    "orig_len": 1,
    "hira": "ご",
    "hira_len": 1,
    "hepburn": "go",
    "hepburn_len": 2
} ,
{
    "orig": "意見",
    "orig_len": 2,
    "hira": "いけん",
    "hira_len": 3,
    "hepburn": "iken",
    "hepburn_len": 4
} ,
{
    "orig": "を",
    "orig_len": 1,
    "hira": "を",
    "hira_len": 1,
    "hepburn": "wo",
    "hepburn_len": 2
} ,
{
    "orig": "伺い",
    "orig_len": 2,
    "hira": "うかがい",
    "hira_len": 4,
    "hepburn": "ukagai",
    "hepburn_len": 6
} ,
{
    "orig": "たい。",
    "orig_len": 3,
    "hira": "たい。",
    "hira_len": 3,
    "hepburn": "tai.",
    "hepburn_len": 4
},
{
    "orig": "ご",
    "orig_len": 1,
    "hira": "ご",
    "hira_len": 1,
    "hepburn": "go",
    "hepburn_len": 2
} ,
{
    "orig": "意見",
    "orig_len": 2,
    "hira": "いけん",
    "hira_len": 3,
    "hepburn": "iken",
    "hepburn_len": 4
} ,
{
    "orig": "を",
    "orig_len": 1,
    "hira": "を",
    "hira_len": 1,
    "hepburn": "wo",
    "hepburn_len": 2
} ,
{
    "orig": "伺い",
    "orig_len": 2,
    "hira": "うかがい",
    "hira_len": 4,
    "hepburn": "ukagai",
    "hepburn_len": 6
} ,
{
    "orig": "たい。",
    "orig_len": 3,
    "hira": "たい。",
    "hira_len": 3,
    "hepburn": "tai.",
    "hepburn_len": 4
},
{
    "orig": "ご",
    "orig_len": 1,
    "hira": "ご",
    "hira_len": 1,
    "hepburn": "go",
    "hepburn_len": 2
} ,
{
    "orig": "意見",
    "orig_len": 2,
    "hira": "いけん",
    "hira_len": 3,
    "hepburn": "iken",
    "hepburn_len": 4
} ,
{
    "orig": "を",
    "orig_len": 1,
    "hira": "を",
    "hira_len": 1,
    "hepburn": "wo",
    "hepburn_len": 2
} ,
{
    "orig": "伺い",
    "orig_len": 2,
    "hira": "うかがい",
    "hira_len": 4,
    "hepburn": "ukagai",
    "hepburn_len": 6
} ,
{
    "orig": "たい。",
    "orig_len": 3,
    "hira": "たい。",
    "hira_len": 3,
    "hepburn": "tai.",
    "hepburn_len": 4
},
{
    "orig": "ご",
    "orig_len": 1,
    "hira": "ご",
    "hira_len": 1,
    "hepburn": "go",
    "hepburn_len": 2
} ,
{
    "orig": "意見",
    "orig_len": 2,
    "hira": "いけん",
    "hira_len": 3,
    "hepburn": "iken",
    "hepburn_len": 4
} ,
{
    "orig": "を",
    "orig_len": 1,
    "hira": "を",
    "hira_len": 1,
    "hepburn": "wo",
    "hepburn_len": 2
} ,
{
    "orig": "伺い",
    "orig_len": 2,
    "hira": "うかがい",
    "hira_len": 4,
    "hepburn": "ukagai",
    "hepburn_len": 6
} ,
{
    "orig": "たい。",
    "orig_len": 3,
    "hira": "たい。",
    "hira_len": 3,
    "hepburn": "tai.",
    "hepburn_len": 4
}

];

class WordContainer  {
    defaultParams = {
        container: null,
        containerHoverColor: '#8f8383',
        sentArray: null,
        jointext:null
    }
    static create(params) {
        const wordContainer = new WordContainer(params);
        return wordContainer
    }
    constructor(params) {
        this.params = Object.assign({}, this.defaultParams, params);

        this.params.containerHoverColor = this.defaultParams.containerHoverColor;
        this.container =
                'string' == typeof params.container
                ? document.querySelector(this.params.container)
                : this.params.container;
        this.sentArray =
                'object' == typeof params.sentArray
                ? this.params.sentArray
                :null;
        if(!this.sentArray)
            throw new Error(`textcontent not exist !`);
        this.renderBoxlist.call(this, this.container, this.params.containerHoverColor);
        this.params.jointext = this.JoinText(this.container, '.romaji_no_color') ; 
        return this;
    }
    printParams(){
        console.log(this.container);
        
    }
    renderBoxlist(dataContainer, hovercolver){
        var seq =1;
        this.sentArray.forEach(function(c) {
            var box =_CreateElementAndClassName('div','contain_flexbox');
            var row_top_box = _CreateElementAndClassName('span', 'row_box');
            var row_middle_box = _CreateElementAndClassName('span', 'row_box');
            var row_bottom_box = _CreateElementAndClassName('span', 'row_box');
            
            row_top_box.setAttribute('data-layer',1);
            row_middle_box.setAttribute('data-layer',2);
            row_bottom_box.setAttribute('data-layer',3);

            var orig_colored =_CreateBlockAndAddText('span','keyin_colored', '');
            var orig_no_colored =_CreateBlockAndAddText('span','not_key_color',c.orig);
        
            var RomajiHitted =_CreateBlockAndAddText('span','romaji_color','');
            var RomajiNoHit =_CreateBlockAndAddText('span','romaji_no_color',c.hepburn.toUpperCase());

            RomajiNoHit.setAttribute('data-romaji',c.hepburn.toUpperCase());
            RomajiNoHit.setAttribute('data-romaji-seq',seq);

            var HiraHitted =_CreateBlockAndAddText('span','hira_color','');
            var HiraNoHit =_CreateBlockAndAddText('span','hira_no_color',c.hira);

            row_bottom_box.style.display = "none";
            row_middle_box.style.display = "none";
            _AppendChild(row_top_box, orig_colored);
            _AppendChild(row_top_box, orig_no_colored);
            _AppendChild(row_middle_box, RomajiHitted);
            _AppendChild(row_middle_box, RomajiNoHit);
            
            _AppendChild(row_bottom_box, HiraHitted);
            _AppendChild(row_bottom_box, HiraNoHit);

            _AppendChild(box, row_top_box);
            _AppendChild(box, row_middle_box);
            _AppendChild(box, row_bottom_box);

            _AppendChild(dataContainer, box);
            box.addEventListener('click', function(){
                box.querySelectorAll("[data-layer]").forEach( function(dom_query){
                    dom_query.style.display = "";
                });
                //console.log(this.innerHTML);
            });

            box.onmouseover =
                function() {
                    box.style.background =hovercolver;
                };
           
            box.onmouseout =function() {
                box.style.background ="white";
                };
            seq+=1;
        });
    }
    destory(){
        while(this.container.firstChild) this.container.removeChild(this.container.firstChild);
    }
    changeContent(newData){
        if(!newData)
            throw new Error(`new textcontent not exist !`);
        this.sentArray =
                'object' == typeof newData
                    ? newData:null;
    }
    showAll(){
        document.querySelectorAll("[data-layer]").forEach( function(dom_query){
            //console.log(dom_query.innerHTML);
            dom_query.style.display = '';
        });
    }
    hiddenAll(){
        document.querySelectorAll("[data-layer='2']").forEach( function(dom_query){
            dom_query.style.display = "none";
        }); 
    }

    JoinText(dataContainer, query){
        var joinedText='';
        dataContainer.querySelectorAll(query).forEach(function(c) {
            //var hira_dom = c.querySelector(query);
            joinedText += c.innerText;
        });
        return joinedText;
    }

    getJoinText(){
        return this.params.jointext;
    }
    /*
        Params: src, move_length, dst, src_remove_rule_byHead, dst_insert_rule_byHead
        Description: move one character from src textnode to dst textnode depend on remove_rule and insert_rule.
        TextNode: src , dst
        integer: move_length,  move char length
        bool:src_remove_rule_byHead, 0 -->remove char from src node tail, 1 -->remove char from src node head
        bool:dst_insert_rule_byHead, 0 -->insert char to dst node tail, 1 -->insert char to dst node head
    */
    TextNode_ChangeText(src, move_length, dst, src_remove_rule_byHead, dst_insert_rule_byHead) {
    var src_len = src.innerText.length;
    var dst_len = dst.innerText.length;
    var src_Text = src.innerText;
    var dst_Text = dst.innerText;
    var remove_char;

    if(!src_len) {
        console.log("[ERROR]src node string is empty");
        return;
    }
    if(move_length > src_len ) {
        console.log("[ERROR]src node string len is less than remove leg");
        return;
    }
    if( src_remove_rule_byHead == 1 && dst_insert_rule_byHead == 0)
    {
        remove_char=src_Text.slice(0,move_length);
        src.innerText = src_Text.slice(move_length,);
        dst.innerText +=remove_char;
    }
    }

     _AppendChild(parent, child) {
        parent.appendChild(child);
    }
    _CreateElementAndClassName(tagname, classname) {
        var tmp = document.createElement(tagname);
        tmp.className  = classname;
        return tmp;
    }
 
    _CreateBlockAndAddText(tag_name, tag_class_name, string) {
        var tmp = _CreateElementAndClassName(tag_name,tag_class_name);
        var tmp_str = document.createTextNode(string);
        this._AppendChild(tmp,tmp_str);
        return tmp;
    }
}


var input_div1 = document.querySelector('#input_block');
input_div1.className = 'full_flexbox';

wordContainer = WordContainer.create({
    container: '#input_block',
    sentArray:kakasi_format_sent1
});

wordContainer.printParams();
document.querySelector('#ShowAll').addEventListener('click',function(){
    wordContainer.showAll();
}); 
document.querySelector('#HideAll').addEventListener('click',function(){
    wordContainer.hiddenAll();
});

console.log(wordContainer.getJoinText());



//upload file
const uploadButton = document.getElementById('upload');

function handleFiles() {
  const fileList = this.files;
  const [file] = fileList; // 取出 File
  console.log(fileList);
}
uploadButton.addEventListener('change', handleFiles, false);


//download file
var downloadFile = function(filename, content) {
    var blob = new Blob([content], { type: 'text/plain' });

    const a = document.createElement('a');
    a.setAttribute('download', filename);
    a.setAttribute('href', window.URL.createObjectURL(blob)); 
    a.click();  
  };
 
  const downloadButton = document.getElementById('down');
  downloadButton.addEventListener('click', function(){
    downloadFile('json.txt',JSON.stringify(kakasi_format_sent1, null, '\t') );
  }, false);

/*
kakasi_format_sent1.forEach(function(c) {

    
    var container =_CreateElementAndClassName('div','contain_flexbox');
    var row_top_box = _CreateElementAndClassName('span', 'row_box');
    var row_middle_box = _CreateElementAndClassName('span', 'row_box');
    var row_bottom_box = _CreateElementAndClassName('span', 'row_box');

    var orig_colored =_CreateBlockAndAddText('span','keyin_colored', '');
    var orig_no_colored =_CreateBlockAndAddText('span','not_key_color',c.orig);

    
    var RomajiHitted =_CreateBlockAndAddText('span','romaji_color','');
    var RomajiNoHit =_CreateBlockAndAddText('span','romaji_no_color',c.hepburn.toUpperCase());
    var HiraHitted =_CreateBlockAndAddText('span','hira_color','');
    var hira_no_colored =_CreateBlockAndAddText('span','hira_no_color',c.hira);
    _AppendChild(container, orig_colored);
    _AppendChild(container, orig_no_colored);

    
    _AppendChild(row_middle_box, RomajiHitted);
    _AppendChild(row_middle_box, RomajiNoHit);
    _AppendChild(container, row_middle_box);

    _AppendChild(container, HiraHitted);
    _AppendChild(container, hira_no_colored);
    _AppendChild(input_div1, container);
    container.addEventListener('click', function(){
        console.log(this.innerHTML);
    });


});
*/
const container_list = document.querySelectorAll('.contain_flexbox');

//Nodelist is converted to array
var container_list_array = Array.from(container_list);
var romaji_full_str='';
container_list.forEach(function(c) {
    var hira_dom = c.querySelector('.romaji_no_color');
    romaji_full_str +=hira_dom.innerText;
});
//Nodelist reverse 
var container_list_array = container_list_array.reverse();
//pop first node 
var cur_node=container_list_array.pop();
var text_len=cur_node.querySelector('.romaji_no_color').innerText.length;

console.log(romaji_full_str)

sentence[0].article.split('').forEach(function(c) {
    console.log(c+chkJPN(c));
});


function chkJPN(s) {
    var re1 = new RegExp("^[\u0800-\\u4e00]*$");     //日文的範圍
    //var s = s.replace(/(^\s*)|(\s*$)/g, '');
    if (s == '') { return false; }
    //console.log(s.substr(0, 1));
    var testChar = '';
    //console.log(s.length);
    var rc;
    for (var i = 0; i < s.length;i++){
        testChar = s.substr(i, 1);
        //console.log(testChar);
        if (!(re1.test(testChar))) {
            rc = false;
        }
        else
            return true;
    }
    if (rc == false) {
        return false;
    }
    else
        return true;
}

/*
  Params: src, move_length, dst, src_remove_rule_byHead, dst_insert_rule_byHead
  Description: move one character from src textnode to dst textnode depend on remove_rule and insert_rule.
    TextNode: src , dst
    integer: move_length,  move char length
    bool:src_remove_rule_byHead, 0 -->remove char from src node tail, 1 -->remove char from src node head
    bool:dst_insert_rule_byHead, 0 -->insert char to dst node tail, 1 -->insert char to dst node head
*/
function TextNode_ChangeText(src, move_length, dst, src_remove_rule_byHead, dst_insert_rule_byHead) {
    var src_len = src.innerText.length;
    var dst_len = dst.innerText.length;
    var src_Text = src.innerText;
    var dst_Text = dst.innerText;
    var remove_char;
    if(!src_len) {
        console.log("[ERROR]src node string is empty");
        return;
    }
    if(move_length > src_len ) {
        console.log("[ERROR]src node string len is less than remove leg");
        return;
    }
    if( src_remove_rule_byHead == 1 && dst_insert_rule_byHead == 0)
    {
        remove_char=src_Text.slice(0,move_length);
        src.innerText = src_Text.slice(move_length,);
        dst.innerText +=remove_char;
    }
 }

function _AppendChild(parent, child) {
    parent.appendChild(child);
 }
 function _CreateElementAndClassName(tagname, classname) {
    var tmp = document.createElement(tagname);
    tmp.className  = classname;
    return tmp;
 }
 
 function _CreateBlockAndAddText(tag_name, tag_class_name, string) {
     var tmp = _CreateElementAndClassName(tag_name,tag_class_name);
     var tmp_str = document.createTextNode(string);
     _AppendChild(tmp,tmp_str);
     return tmp;
  }

  var tmp = _CreateBlockAndAddText('div','not_key_color', sentence[0].text);
  var article_div = document.querySelector('#article');

  var input_div = document.querySelector('#input_block');
  var search = document.querySelector('#search');
  search.value =romaji_full_str;
  
 var cur_input_idx=0;
 var expec_next_en_char=0;
 var romaji =sentence[0].romaji;
 



 romaji = romaji_full_str ;
 var inner_node_text_idx =0;
  search.addEventListener('keyup', function handler(event) {
    expec_next_en_char = romaji[cur_input_idx];
    
    //if(String.fromCharCode(event.keyCode) != expec_next_en_char)
    //{
    //    console.log("expected:"+romaji[cur_input_idx]+", but input is"+event.key+"  "+String.fromCharCode(event.keyCode));
    //}

    if( (event.key != expec_next_en_char.toLowerCase()) && (event.key != expec_next_en_char.toUpperCase()))
    {
        console.log("expected:"+romaji[cur_input_idx]+", but input is"+event.key+"  "+String.fromCharCode(event.keyCode));
    }
    else {
        cur_input_idx+=1;
        inner_node_text_idx+=1;
        TextNode_ChangeText(cur_node.querySelector('.romaji_no_color'),1, cur_node.querySelector('.romaji_color'),1,0);
        if(inner_node_text_idx == text_len)
        {
            TextNode_ChangeText(cur_node.querySelector('.not_key_color'),cur_node.querySelector('.not_key_color').innerText.length, cur_node.querySelector('.keyin_colored'),1,0);
            inner_node_text_idx =0;
            cur_node=container_list_array.pop();
            text_len=cur_node.querySelector('.romaji_no_color').innerText.length;
        }
    }
    //results.appendChild(set);
  });

  input_div.addEventListener('keyup', function handler(event) {
    
    console.log(event.keyCode);
  });