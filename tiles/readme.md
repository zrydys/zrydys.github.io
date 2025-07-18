
## Electronic Light Table features - and free Tiles Demo 

This is a demo of using open-source to explore ELT GIS imagery from any modern web browser:

  [https://ZryDys.github.io/elt.html](https://ZryDys.github.io/elt.html)


1. **Layering Imagery:** from multiple sources on top of each other, for Electronic Light Table.
    
2. **Visual Comparison:** compare imagery from different sources (satellite, aerial, historical, etc.) in real-time by just toggling layers on the right-side menu.
    
3. **Interactive Interface:** coded in JS Leaflets to let zoom, pan, and inspect imagery closely, just as you would manipulate layers on a physical light table.
    
4. **Free and Accessible:** All these tools provide open sources versions for public use.
    


---
### Further reading

 https://ZryDys.github.io/tiles/ based on https://infchg.github.io/ProtecInt.html


## Custom ELT labelling and custom tiles

Borders based on UN international documents, 

### Additional notes

The layers label countries and DMZs and UN zones according to ISO2 codes:

- **Ireland** (`.ie`): 🇮🇪
- **Djibouti** (`.dj`): 🇩🇯
- **Liechtenstein** (`.li`): 🇱🇮
- **Switzerland** (`.ch`): 🇨🇭
- **Portugal** (`.pt`): 🇵🇹
- **Sweden** (`.se`): 🇸🇪
- **Western Sahara** (`.eh`): 🇪🇭
- **Croatia** (`.hr`): 🇭🇷
- **Algeria** (`.dz`): 🇩🇿
- **Tunisia** (`.tn`): 🇹🇳
- **Italy** (`.it`): 🇮🇹
- **Norway** (`.no`): 🇳🇴
- **Romania** (`.ro`): 🇷🇴
- **Turkey** (`.tr`): 🇹🇷

## Borders of EU considering EU and its outermost regions (OR)

North: Nuorgam, Finland Latitude: 70°05′N
South: La Restinga, Canary Islands (Spain) at 27°38′ N (OR)
West: Monchique Islet, Azores (Portugal) at 31°16′30″ W (OR)
East: (de jure, Northern Cyprus – EU law suspended) de facto Cape Greco, Cyprus (34°05′ E)

From OR official EU listing: French Guiana, Guadeloupe, Martinique, Mayotte, Réunion, Saint‑Martin (France) Azores, Madeira (Portugal) Canary Islands (Spain)



--
### examples of useful technical commands

Adding Flags according to img magik tools:

        convert 4-8-4.png -font Symbola   -gravity Northwest -pointsize 18 -annotate +85+70 "🇳🇴"   -gravity Northwest -pointsize 18 -annotate +190+60 "🇸🇪"   -gravity Northwest -pointsize 18 -annotate +70+220 "🇩🇰"   flagged_4-8-4.png #% for CC ISO2 codes only



        convert 4-8-4.png -font Symbola  -pointsize 8 -annotate +85+130 "🇳🇴" -annotate +190+160 "🇸🇪"  -annotate +110+240 "🇩🇰"   flagged_4-8-4.png #% simpler symbols on CCs


        convert -background white -fill black  -density 32 -pointsize 32 -gravity center  "pango:<span font='DejaVu-Sans'> flags🇸🇪 ⌁ Electricity\n🔌 Chargers\n🔋 Powerbanks</span>"  out.png #%usage pango for UTF8 flags


examples of flag combination when pango not available

         convert input.png   \( se.png -thumbnail x25 \) -gravity west   -geometry  +0+30 -composite  \( no.png -thumbnail x25 \) -gravity center -geometry +80+30 -composite  \( se.png -thumbnail x25 \) -gravity east   -geometry  +0+30 -composite   output.png


and of flag generation with embedded pango:

        convert -background white -fill black  -density 32 -pointsize 32 -gravity center  "pango:<span font='DejaVu-Sans'>🇸🇪.se</span>"  se.png



Sucessfully overlap flags over map tiles: 

        convert input.png   \( se.png -thumbnail x12 \)  -geometry  +160+130 -composite  \( no.png -thumbnail x12 \)  -geometry +80+130 -composite  \( se.png -thumbnail x12 \)  -geometry  +140+210 -composite   output.png #% overlap flags over map Ok

---

_CC-BY ZryDys & CJ 2025_




---

Tokelao example L1=T; L2=K; printf -v FL  $(printf '\\U%08X\\U%08X' $((0x1F1E6 + $(printf '%d' "'$L1") - 65))  $((0x1F1E6 + $(printf '%d' \'$L2) - 65)) )
echo $FL


a='EH'
L1=${a:0:1}  # First character
L2=${a:1:1}  # Second character

