# nihongo_sentence_type_exercise

Type Romaji exercise of nihongo sentence using Javascript & CSS

Live Demo
=============
![live_demo](https://user-images.githubusercontent.com/8225484/155835909-079213c8-847f-458a-b15b-567aab5a853d.gif)

Feature
=============

Formatted Nihongo Sentence with JSON
=============

```
 {
        "orig": "私",
        "orig_len": 1,
        "hira": "わたし",
        "hira_len": 3,
        "hepburn": "watashi",
        "hepburn_len": 7
    } ,
```
* hira: Hiragana[平假名] of orig item  
* hira_len: length of hira
* hepburn: romaji[日語羅馬字] of orig item
* hepburn_len: length of hepburn


Build Envrionment Setup
=============



Usage
=============
HTML

```
<script src="javascript/main_render.js"></script>
```

# Code Snippet #
## Declared Render Class ##


```
class WordContainer  {
.....
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
```
