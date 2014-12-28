rureader
========

![Sceenshot](http://i.imgur.com/3Mc3tPx.png)

How to Use
----------
1. Paste a Russian text.
2. As you read it, click on words that you don't understand to have them looked
   up right next to the text.
3. You may save words in a list (translated automatically) as you read.
4. There are links to [forvo](http://www.forvo.com/) and additional dictionaries
   on the top of the page, that will look up the current word on those sites.

How to Install and Run
----------------------
1. Download the zip here on this github page (to the right).
2. Download a browser extension of your choice that ignores `x-frame-options`.
   (This allows you to put all pages in a frame.)
3. [Get an API Key from Yandex (the "translate api"
   service)](http://api.yandex.com/translate/)
4. Open `page.html` in a text editor and replace the text `load_api_key("YOUR
   YANDEX API KEY HERE");` with your own API Key, so it says something like
   `load_api_key("dict.1.1...");` instead, and save the file.
5. Click `page.html` to start.
