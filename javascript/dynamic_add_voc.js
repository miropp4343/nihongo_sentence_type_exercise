
// JS
// 建立陣列儲存資料

//import {findOneQuery} from 'mongodb.js';

//var mydb = require('./mymongodb');

var farms = [
  {
    farmer: "卡斯伯",
    dogs: ["張姆士", "龐的"]
  },
  {
    farmer: "查理",
    dogs: ["皮皮"]
  }
];
var voc_list = [
  {
    voc_jp: "ちかごろろろろろ",
    accent:4,
    kanji:"近頃",
    type:"形。名",
    voc_ch:"[1]近日，這些日子裏。",
    sentence:["近頃はよく雨が降りますね<br>最近老下雨啊！","その事はちっとも知らない<br>那件事情我點也不知道"],
    chinese_words_sentences:[
        {
            word:"近日，這些日子裏。",
            sentence_pairs:[
                {
                   jp_ori_text:"この地方（ちほう）の主な産業は林業（りんぎょう）だ",
                   ch_trans_text:"最近老下雨啊！"
                },
                {
                    jp_ori_text:"あの子は算数が得意（とくい）だ",
                    ch_trans_text:"那孩子算術成績好"
                 }
            ]
        },
        {
            word:"加班",
            sentence_pairs:[
                {
                   jp_ori_text:"深夜（しんや）まで残業する",
                   ch_trans_text:"一直加班到深夜"
                },
                {
                    jp_ori_text:"この料理の仕方が分からない",
                    ch_trans_text:"我不懂這道菜的做法"
                 }
            ]
        }
    ]
  },

];
var tango_example = [
    {
    _id: '6026476ff0e6154eff0caf6a',
    level: 4,
    kanji: '一部',
    PoS_1: '名詞',
    accent: '2',
    voc_jp: 'いちぶ',
    content: [ {
                sents_content: 
                [ { explain: `只有一部分的人表示贊成。`, 
                       example_sent: '一部の人しか賛成しなかった' } 
                ],
                sent_num: 1, 
                ch_char: '一部分' 
               } 
            ],
    page: 3
  }
];
function GetPos(tango_dict)
{
    if(tango_dict.PoS_1 != null)
    {
        return tango_dict.PoS_1;
    }
}

function GetAccent(tango_dict)
{
    if(tango_dict.accent != null)
    {
        return tango_dict.accent;
    }
}
function GetKanJi(tango_dict)
{
    if(tango_dict.kanji != null)
    {
        return tango_dict.kanji;
    }
}

function GetJpWord(tango_dict)
{
    if(tango_dict.voc_jp != null)
    {
        return tango_dict.voc_jp;
    }
}

function GetContentNum(tango_dict)
{
    if(tango_dict.content != null)
    {
        return tango_dict.content.length;
    }
}

function GetSubContentByIdx(tango_dict, idx)
{
    if(tango_dict.content != null)
    {

        return tango_dict.content[idx];
    }
}
function GetSentPairsNum(sub_content_dict)
{
    if(sub_content_dict.sents_content != null)
    {
        return sub_content_dict.sents_content.length;
    }
}

function GetSentPairsContent(sub_content_dict,idx)
{
    if(sub_content_dict.sents_content != null)
    {
        return sub_content_dict.sents_content[idx];
    }
}

function  GetCurrentTime()
{
  return Date();
}
if (0) 
{
// 選取要編輯的 DOM 元素
var el = document.querySelector(".list");
// 儲存陣列資料的總筆數
var farmLen = farms.length;
// 建立一個空字串
var str = "";
// 跑 for 迴圈
for (var i = 0; i < farmLen; i++) {
  // 要插入的字串
  var content = '<span class="tone2">' + farms[i].farmer + "</span>";
  str += content;
}
el.innerHTML = str;
}

if (0) {
var query = {voc_jp:`いちぶ`};
mydb.findOneQuery(query).then(out =>{

    
   //console.log(timestamp);
   console.log(out.content[0]);
   console.log(out);
   console.log(GetPos(out));
   console.log(GetKanJi(out));
   console.log(GetJpWord(out));
   console.log(GetContentNum(out));
   var i =0;
   for(i=0 ;i<GetContentNum(out); i++ )
   {
       console.log(GetSubContentByIdx(out,i));
       var subcont = GetSubContentByIdx(out,i);
       console.log(GetSentPairsContent(subcont, 0));
   }
});
}
function insertAfter(newEl, targetEl)
{
      var parentEl = targetEl.parentNode;

      if(parentEl.lastChild == targetEl)
      {
           parentEl.appendChild(newEl);
      }else
      {
           parentEl.insertBefore(newEl,targetEl.nextSibling);
      }  
}

function clickAudio(clicked_id) {
  //alert(clicked_id)
  var coll = document.getElementById(clicked_id);
  console.log(coll.innerHTML)
  console.log(coll)
  console.log(coll.nextElementSibling)
  if(coll != null)
    {
      var content = coll.nextElementSibling;
      if (content.style.maxHeight){
         content.style.maxHeight = null;
       } else {
         content.style.maxHeight = content.scrollHeight + "px";
       }
    }
}

function popup(id) {
    //alert(id)
    var coll = document.getElementById(id);
    //alert(coll.innerHTML)
    if(coll != null && coll.nextElementSibling != null)
      {
        console.log(coll.innerHTML)
        console.log(coll)
        console.log(coll.nextElementSibling)
        var content = coll.nextElementSibling;
        if (content.style.maxHeight){
           content.style.maxHeight = null;
         } else {
           content.style.maxHeight = content.scrollHeight + "px";
         }
      }
  }
function _AppendChild(parent, child) {
   //console.log(parent);
   parent.appendChild(child);
   //console.log(parent);
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

 var fromMongoDict =0;
 function addMultiChs_SentencesPairs(sectionblock, voc_list)
 {
      var total_ch_chars;
      var cur_word;
      var i;
      if (fromMongoDict) {
        total_ch_chars = voc_list[0].chinese_words_sentences.length;
      }
      else {
        total_ch_chars = GetContentNum(voc_list);
      }
      for(i=0; i<total_ch_chars; i++)
      {
        var content;
        
        if (fromMongoDict) {
            cur_word = voc_list[0].chinese_words_sentences[i];
        }
        else {
            content = GetSubContentByIdx(voc_list, i);
            //cur_word =  GetSentPairsNum(content);
        }
        console.log(cur_word)
        var voc_ch = _CreateElementAndClassName("div",'voc_ch');
        var cur_word_idx=i+1;
        var voc_ch_str;
        if (fromMongoDict) {
            voc_ch_str = document.createTextNode("【"+cur_word_idx+"】"+cur_word.word);
        }
        else {
            voc_ch_str = document.createTextNode("【"+cur_word_idx+"】"+content.ch_char);
        }
        voc_ch.id ='ch'+i;

        voc_ch.addEventListener('click', function () {
            console.log(this.tagName);      // "label"
            popup(this.id);
          }, false);

        _AppendChild(voc_ch, voc_ch_str);
        var pair_cnt ;
        
        if (fromMongoDict) {
            pair_cnt = cur_word.sentence_pairs.length;
        }
        else {
            pair_cnt = GetSentPairsNum(content);
        }
        var w_sec = _CreateElementAndClassName("div",'content');

        for(pair_idx=0; pair_idx< pair_cnt; pair_idx++ )
        {
            var mongodb_ch_jp_sents_pair;
            var jp_example;
            var ch_explain;
            if (fromMongoDict) {
                jp_example = cur_word.sentence_pairs[pair_idx].jp_ori_text;
                ch_explain = cur_word.sentence_pairs[pair_idx].ch_trans_text;
            }
            else {
                mongodb_ch_jp_sents_pair =GetSentPairsContent(content, pair_idx) 
                jp_example =mongodb_ch_jp_sents_pair.example_sent;
                ch_explain =mongodb_ch_jp_sents_pair.explain;

            }
            var table = _CreateElementAndClassName("div",'sent_table');
            var row = _CreateElementAndClassName("div",'sent_table_row');
            var leftcell = _CreateElementAndClassName("div",'sent_table_cell');
            var rightcell = _CreateElementAndClassName("div",'sent_table_cell');
            _AppendChild(leftcell, _CreateBlockAndAddText("p",'hint_sent',"【例句】  "));
            _AppendChild(rightcell, _CreateBlockAndAddText("p",'sent',jp_example));
            _AppendChild(row, leftcell);
            _AppendChild(row, rightcell);
            _AppendChild(table, row);
            _AppendChild(w_sec, table);
            _AppendChild(w_sec, _CreateBlockAndAddText("div",'sent',"【翻譯】  "+ch_explain));
        }
        _AppendChild(sectionblock, voc_ch);
        _AppendChild(sectionblock, w_sec);
      }

 }
if (1) {
$(document).ready(function(){

    
  $('#play_sound_txt').click(function(){
     var sound_txt = $('#sound_txt'); 
     sound_txt[0].currentTime = 0;
    sound_txt[0].play();
  });


  $('#sound3_txt').click(function(){
     var sound1_txt = $('#sound1_txt'); 
     sound1_txt[0].currentTime = 0;
    sound1_txt[0].play();
  });

  $('#update').click(function(){
     $("section").remove();

    //create a jp word section here
     var section_0 = document.createElement("section");
     var parentSection = document.getElementById("head")
     parentSection.appendChild(section_0);

     //var el = document.querySelector("#voc1");
     section_0.id = 'voc2';
     //insertAfter(section_0,parentSection);

     var voc_jp ="";
     var VOC_Region = _CreateElementAndClassName("h2","voc_jp");

    
     _AppendChild(section_0, _CreateBlockAndAddText("p","TimeInfo", GetCurrentTime()));
     _AppendChild(section_0, VOC_Region);
     if (voc_list[0].accent == 0) {
         var str_low="";
         var str_high="";
         str_low = voc_list[0].voc_jp.slice(0,1);
         str_high = voc_list[0].voc_jp.slice(1,);

         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone1',str_low));
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone4',str_high));
         
         console.log(VOC_Region);
         voc_jp = '<span class="tone1">' + str_low + "</span>";
         voc_jp +='<span class="tone4">' + str_high + "</span>";
     }
     else if (voc_list[0].accent == 1){
         var str_low="";
         var str_high="";
         str_high = voc_list[0].voc_jp.slice(0,1);
         str_low = voc_list[0].voc_jp.slice(1,);
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone2',str_high));
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone3',str_low));

         voc_jp = '<span class="tone2">' + str_high + "</span>";
         voc_jp +='<span class="tone3">' + str_low + "</span>"; 
     }
    else {
         var str_low="";
         var str_middle_high="";
         var str_change_low="";
         var str_remain_low="";
         str_low = voc_list[0].voc_jp.slice(0,1);
         str_middle_high = voc_list[0].voc_jp.slice(1,voc_list[0].accent-1);
         str_change_low = voc_list[0].voc_jp.slice(voc_list[0].accent-1,voc_list[0].accent);
         str_remain_low = voc_list[0].voc_jp.slice(voc_list[0].accent,);
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone1',str_low));
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone4',str_middle_high));
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone2',str_change_low));
         _AppendChild(VOC_Region, _CreateBlockAndAddText("span",'tone3',str_remain_low));
         voc_jp = '<span class="tone1">' + str_low + "</span>";
         voc_jp +='<span class="tone4">' + str_middle_high + "</span>"; 
         voc_jp +='<span class="tone2">' + str_change_low + "</span>"; 
         voc_jp +='<span class="tone3">' + str_remain_low + "</span>"; 

    }
    var str = "";
      //voc_jp = '<h2 class="voc_jp">'+voc_jp+'<sup>'+voc_list[0].accent+'</sup>'+'</h2>';
      //voc_jp =  voc_jp ;

    var voc_type= _CreateElementAndClassName("span",'type');
    var voc_type_str = document.createTextNode(voc_list[0].type);
    _AppendChild(voc_type, voc_type_str); 
    var kanji= _CreateElementAndClassName("div",'kanji');
    var kanji_str = document.createTextNode(voc_list[0].kanji);
    _AppendChild(kanji, voc_type);
    _AppendChild(kanji, kanji_str); 
    //_AppendChild(section_0, kanji);


    var type_kanji_table = _CreateElementAndClassName("div",'type_kanji_table');
    var type_kanji_row = _CreateElementAndClassName("div",'type_kanji_table_row');
    var typecell = _CreateElementAndClassName("div",'type_kanji_table_cell');
    var kanjicell = _CreateElementAndClassName("div",'type_kanji_table_cell');
    var _kanji= _CreateBlockAndAddText("div",'kanji',voc_list[0].kanji);
    _AppendChild(kanjicell, _kanji);
    _AppendChild(typecell, _CreateBlockAndAddText("span",'type',voc_list[0].type));
    _AppendChild(type_kanji_row, typecell);
    _AppendChild(type_kanji_row, kanjicell);
    _AppendChild(type_kanji_table, type_kanji_row);
    //_AppendChild(_kanji, _CreateBlockAndAddText("span",'type',voc_list[0].type));
    _AppendChild(section_0, type_kanji_table);


    addMultiChs_SentencesPairs(section_0, tango_example[0]);
    if (0){
      var total_words=voc_list[0].chinese_words_sentences.length;
      var scan_word;
      var i;
      for(i=0; i<total_words; i++)
      {
        scan_word = voc_list[0].chinese_words_sentences[i];
        console.log(scan_word)
        var voc_ch = _CreateElementAndClassName("div",'voc_ch');
        var cur_word_idx=i+1;
        var voc_ch_str = document.createTextNode("【"+cur_word_idx+"】"+scan_word.word);
        voc_ch.id ='ch'+i;
        voc_ch.addEventListener('click', function () {
            console.log(this.tagName);      // "label"
            popup(this.id);
          }, false);
        //voc_ch.onclick = function(){popup();};
        console.log(voc_ch.innerHTML)
        _AppendChild(voc_ch, voc_ch_str);
        var pair_cnt =scan_word.sentence_pairs.length;
        var w_sec = _CreateElementAndClassName("div",'content');
        for(pair_idx=0; pair_idx<pair_cnt; pair_idx++ )
        {
            var table = _CreateElementAndClassName("div",'sent_table');
            var row = _CreateElementAndClassName("div",'sent_table_row');
            var leftcell = _CreateElementAndClassName("div",'sent_table_cell');
            var rightcell = _CreateElementAndClassName("div",'sent_table_cell');
            _AppendChild(leftcell, _CreateBlockAndAddText("p",'hint_sent',"【例句】  "));
            _AppendChild(rightcell, _CreateBlockAndAddText("p",'sent',scan_word.sentence_pairs[pair_idx].jp_ori_text));
            _AppendChild(row, leftcell);
            _AppendChild(row, rightcell);
            _AppendChild(table, row);
            _AppendChild(w_sec, table);
            //var tmp_sent1 = _CreateElementAndClassName("div",'sent');
            //var tmp_sent_str1 = document.createTextNode("【翻譯】  "+scan_word.sentence_pairs[pair_idx].ch_trans_text);
            //_AppendChild(tmp_sent1, tmp_sent_str1);
            //_AppendChild(tmp_sent1, _CreateBlockAndAddText("div",'sent',"【翻譯】  "+scan_word.sentence_pairs[pair_idx].ch_trans_text));
            _AppendChild(w_sec, _CreateBlockAndAddText("div",'sent',"【翻譯】  "+scan_word.sentence_pairs[pair_idx].ch_trans_text));
        }
        _AppendChild(section_0, voc_ch);
        _AppendChild(section_0, w_sec);
        }
    }
      
      //_AppendChild(section_0, voc_ch);
       voc_jp =  voc_jp +   '<div class="kanji">'+  '<span class="type">'+voc_list[0].type+'</span>'+voc_list[0].kanji+'</div>';
       //voc_jp =  voc_jp + '</br>'+  '<div class="voc_ch"'+'id="ch'+'0'+'" onclick="clickAudio(this.id)">'+voc_list[0].voc_ch+' </div>';
      
       console.log(voc_list[0].sentence.length)
       voc_jp =  voc_jp +  '<div class="content">'+'<div class="sent">'+voc_list[0].sentence[0]+'</div>'+'<div     class="sent">'+voc_list[0].sentence[1]+'</div>'+'</div>';
       str += voc_jp;
       el.innerHTML = str;
  });
});
}