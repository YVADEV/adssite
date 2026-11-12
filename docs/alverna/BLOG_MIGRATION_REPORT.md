# Blog migration report

Generated: 2026-11-12T13:06:30.628Z

## Totals
- Unique articles in Yoast post sitemap: **42**
- Unique articles in WordPress REST: **42**
- Successfully migrated: **42**
- Blocked or incomplete: **0**
- Images stored under `public/blog/`: **702**
- Image download failures: **0**
- Author records: **4**
- Author photographs migrated: **4**
- Internal links recorded: **439**
- External links recorded: **77**
- Unresolved unique internal destinations: **6**

## URL pattern
Original article URLs live at `https://alvernadental.com/{slug}/` (not `/blog/{slug}/`). Listing remains `/blog/`. The new site preserves that split.

## Authors
- Alverna (id 1, slug administrator) photo: /blog/authors/b50149689f.jpg
- Alverna (id 2, slug alverna) photo: /blog/authors/16314f43a6.jpg
- cristina (id 8, slug cristina) photo: /blog/authors/d02c32091b.jpg
- Dr. Vigh-Nicoara Petra (id 9, slug dr-vigh-nicoara-petra) photo: /blog/authors/ef9a6324f5.jpg

WordPress exposes two users named "Alverna" (ids 1 and 2). Attribution is preserved per article, not merged.

## Missing featured images
- anunt-important-despre-locatiile-alverna-dental-studio — not present on the source post

## Character-count drops (>15%)
These are expected where WordPress srcset/gallery URL strings were replaced with local paths. Body paragraphs were not summarized.
- cat-rezista-un-implant-dentar: 10478 → 8558
- cat-costa-operatia-de-aditie-osoasa-pentru-implanturi-dentare: 7875 → 6085
- recuperare-dupa-implant-dentar: 16889 → 13277
- etapele-implantului-dentar: 17523 → 13743
- cat-costa-o-fateta-dentara-si-ce-implica-procesul-de-aplicare: 8318 → 4654
- cat-costa-un-aparat-dentar: 16841 → 13151
- cat-rezista-o-coroana-dentara: 14821 → 11159
- cat-costa-o-albire-dentara-profesionala: 12547 → 8960

## Unresolved internal destinations
These URLs existed as hrefs in historical content but are not posts in the sitemap and have no matching new page:
- /albire-dentara-cu-laser/
- /multumim-2/
- /footer/
- /shop/checkout/
- /multumim/
- /shop/cart/

`/shop/*`, `/footer/` and `/multumim*` appear to be leftover WordPress chrome in older posts. `/albire-dentara-cu-laser/` is a dead internal article URL (not in the post sitemap).

## Redirects
No extra 301s were added: destination paths equal original post paths. Trailing-slash canonicals use `https://alvernadental.com/{slug}/`.

## Article checklist
- [x] anunt-important-despre-locatiile-alverna-dental-studio: title preserved; date 2025-11-28; author Alverna; featured NO; chars 1185→1185
- [x] cat-rezista-un-implant-dentar: title preserved; date 2025-06-13; author Dr. Vigh-Nicoara Petra; featured yes; chars 10478→8558
- [x] obturatia-de-canal-ce-este-cand-ai-nevoie-de-ea: title preserved; date 2025-06-13; author Dr. Vigh-Nicoara Petra; featured yes; chars 5268→5268
- [x] tartru-dentar-ce-este-cum-il-previi: title preserved; date 2025-06-13; author Dr. Vigh-Nicoara Petra; featured yes; chars 5080→5080
- [x] ce-poti-manca-dupa-implant-dentar: title preserved; date 2025-05-13; author Alverna; featured yes; chars 9467→9467
- [x] cand-si-de-ce-ai-nevoie-de-un-tratament-endodontic: title preserved; date 2025-05-12; author Dr. Vigh-Nicoara Petra; featured yes; chars 5310→5310
- [x] recuperare-dupa-aditie-de-os-alimentatie-si-reactii-adverse: title preserved; date 2025-05-12; author Dr. Vigh-Nicoara Petra; featured yes; chars 6721→6721
- [x] simptome-respingere-implant-dentar: title preserved; date 2025-04-17; author Dr. Vigh-Nicoara Petra; featured yes; chars 12601→12601
- [x] cand-sa-alegi-proteza-fixa-fara-implant: title preserved; date 2025-04-16; author Dr. Vigh-Nicoara Petra; featured yes; chars 9729→9729
- [x] cand-nu-se-poate-pune-aparat-dentar-motive-solutii-recomandari: title preserved; date 2025-04-16; author Dr. Vigh-Nicoara Petra; featured yes; chars 7949→7949
- [x] cand-nu-se-poate-face-implant-dentar: title preserved; date 2025-03-31; author Dr. Vigh-Nicoara Petra; featured yes; chars 11828→11828
- [x] coroane-dentare-zirconiu: title preserved; date 2025-03-28; author Dr. Vigh-Nicoara Petra; featured yes; chars 9200→9200
- [x] albire-dentara-avantaje-costuri: title preserved; date 2025-03-28; author Dr. Vigh-Nicoara Petra; featured yes; chars 4418→4418
- [x] aparat-dentar-safir-vs-ceramic: title preserved; date 2025-02-10; author Dr. Vigh-Nicoara Petra; featured yes; chars 13250→11437
- [x] cat-costa-operatia-de-aditie-osoasa-pentru-implanturi-dentare: title preserved; date 2025-02-10; author Dr. Vigh-Nicoara Petra; featured yes; chars 7875→6085
- [x] recuperare-dupa-implant-dentar: title preserved; date 2025-02-10; author Dr. Vigh-Nicoara Petra; featured yes; chars 16889→13277
- [x] tipuri-de-implanturi-dentare: title preserved; date 2025-01-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 7404→7404
- [x] cat-costa-un-aparat-dentar-pentru-copii: title preserved; date 2025-01-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 4332→4332
- [x] cat-timp-se-poarta-gutiera-dupa-aparat-dentar: title preserved; date 2025-01-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 7127→7127
- [x] etapele-implantului-dentar: title preserved; date 2024-12-11; author Dr. Vigh-Nicoara Petra; featured yes; chars 17523→13743
- [x] tipuri-de-coroane-dentare-cum-alegi-cea-mai-potrivita-varianta: title preserved; date 2024-12-11; author Dr. Vigh-Nicoara Petra; featured yes; chars 8130→8130
- [x] aditia-osoasa-dentara-ce-este-si-cand-este-necesara: title preserved; date 2024-12-11; author Dr. Vigh-Nicoara Petra; featured yes; chars 6812→6812
- [x] cat-persista-durerea-dupa-un-implant-dentar: title preserved; date 2024-11-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 11499→11499
- [x] aparat-dentar-invisalign: title preserved; date 2024-11-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 9975→9975
- [x] cat-costa-o-fateta-dentara-si-ce-implica-procesul-de-aplicare: title preserved; date 2024-11-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 8318→4654
- [x] cat-costa-un-aparat-dentar: title preserved; date 2024-10-31; author Dr. Vigh-Nicoara Petra; featured yes; chars 16841→13151
- [x] cat-rezista-o-coroana-dentara: title preserved; date 2024-10-31; author Dr. Vigh-Nicoara Petra; featured yes; chars 14821→11159
- [x] cat-costa-o-albire-dentara-profesionala: title preserved; date 2024-10-31; author Dr. Vigh-Nicoara Petra; featured yes; chars 12547→8960
- [x] cat-te-costa-sa-iti-pui-implanturi-dentare-in-toata-gura: title preserved; date 2024-10-14; author Dr. Vigh-Nicoara Petra; featured yes; chars 12747→10906
- [x] ce-este-cat-costa-un-implant-dentar: title preserved; date 2024-09-18; author Dr. Vigh-Nicoara Petra; featured yes; chars 6495→6495
- [x] sinus-lift: title preserved; date 2023-04-12; author Dr. Vigh-Nicoara Petra; featured yes; chars 3392→3392
- [x] ce-este-un-pivot-dentar: title preserved; date 2023-03-22; author Dr. Vigh-Nicoara Petra; featured yes; chars 3729→3729
- [x] implanturi-dentare-tipuri-etape-avantaje: title preserved; date 2023-02-23; author Dr. Vigh-Nicoara Petra; featured yes; chars 3579→3579
- [x] diferenta-dintre-obturatia-coronara-si-inlay-onlay: title preserved; date 2019-03-27; author Dr. Vigh-Nicoara Petra; featured yes; chars 8991→8991
- [x] igiena-dentara-la-copii-cum-ne-asiguram-ca-cei-mici-au-dinti-sanatosi: title preserved; date 2019-03-20; author Dr. Vigh-Nicoara Petra; featured yes; chars 4036→4036
- [x] diferenta-dintre-albirea-dentara-facuta-acasa-si-cea-facuta-in-cabinetul-stomatologic: title preserved; date 2019-03-04; author Dr. Vigh-Nicoara Petra; featured yes; chars 15638→15638
- [x] boala-parodontala-cauze-preventie-si-tratamente: title preserved; date 2019-02-18; author Dr. Vigh-Nicoara Petra; featured yes; chars 13933→13933
- [x] ce-este-profilaxia-dentara-si-care-e-importanta-ei-pentru-sanatatea-dintilor: title preserved; date 2019-01-28; author Dr. Vigh-Nicoara Petra; featured yes; chars 5286→5286
- [x] fatetele-dentare: title preserved; date 2019-01-08; author Dr. Vigh-Nicoara Petra; featured yes; chars 3051→3051
- [x] implant-megagen: title preserved; date 2018-11-22; author Dr. Vigh-Nicoara Petra; featured yes; chars 12103→12103
- [x] lampa-philips-zoom: title preserved; date 2018-10-12; author Dr. Vigh-Nicoara Petra; featured yes; chars 2720→2720
- [x] fast-and-fixed-un-nou-sistem-de-implant: title preserved; date 2018-07-11; author Dr. Vigh-Nicoara Petra; featured yes; chars 5579→5579
