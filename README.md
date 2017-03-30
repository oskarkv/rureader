rureader
========

![Sceenshot](http://i.imgur.com/3Mc3tPx.png)

How to Use
----------
1. Paste a Russian or English (or both) text.
2. As you read it, click on words to have them looked up, in the other
   language, right next to the text.
3. You may save words in a list (translated automatically) as you read.
4. There are links to [forvo](http://www.forvo.com/) and additional dictionaries
   on the top of the page, that will look up the current word on those sites.
5. You can open `page.html` with a `?text=` query, to have the text
   automatically loaded on startup. This is useful, for example, if you want a
   link to this app, with a word loaded, on a flash card in Anki.

How to Install and Run
----------------------
1. Download the zip here on this github page (to the right).
2. Download a browser extension of your choice that ignores `x-frame-options`.
   (This allows you to put all pages in frames.)
3. [Get an API Key from Yandex (the "translate api"
   service)](http://api.yandex.com/translate/)
4. Open `page.html` in a text editor and replace the text `init_page("YOUR
   YANDEX API KEY HERE");` with your own API Key, so it says something like
   `init_page("dict.1.1...");` instead, and save the file. (Remember to do
   this step again if you get a new version.)
5. Click `page.html` to start (you may want to bookmark it).
