// import modules
const express = require('express')
const hbs = require("express-handlebars")
const fetch = require('node-fetch')
const withQuery = require('with-query').default



// config env
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000
const API_KEY = process.env.API_KEY || ""
const endpoint = 'https://api.giphy.com/v1/gifs/search'

// create instance of app
const app = express()

app.use(express.static('public'))


/* const giphyObj = {
    "data":
    [
        {
            "type": "gif",
            "id": "TVyR1JQjABvu8",
            "url": "https://giphy.com/gifs/TVyR1JQjABvu8",
            "slug": "TVyR1JQjABvu8",
            "bitly_gif_url": "http://gph.is/299fsDV",
            "bitly_url": "http://gph.is/299fsDV",
            "embed_url": "https://giphy.com/embed/TVyR1JQjABvu8",
            "username": "",
            "source": "http://imgur.com/gallery/EDuSZkR",
            "title": "maracas GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "imgur.com",
            "source_post_url": "http://imgur.com/gallery/EDuSZkR",
            "is_sticker": 0,
            "import_datetime": "2016-07-01 18:48:52",
            "trending_datetime": "1970-01-01 00:00:00",
            "images":
            {
                "original":
                {
                    "height": "425",
                    "width": "480",
                    "size": "2828973",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.gif",
                    "mp4_size": "412814",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.mp4",
                    "webp_size": "461286",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.webp",
                    "frames": "46",
                    "hash": "27a24cd6a69d8d6a1ce9149d5a2f8fcd"
                },
                "downsized":
                {
                    "height": "425",
                    "width": "480",
                    "size": "1581339",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-downsized.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized.gif"
                },
                "downsized_large":
                {
                    "height": "425",
                    "width": "480",
                    "size": "2828973",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.gif"
                },
                "downsized_medium":
                {
                    "height": "425",
                    "width": "480",
                    "size": "2828973",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.gif"
                },
                "downsized_small":
                {
                    "height": "272",
                    "width": "307",
                    "mp4_size": "85971",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-downsized-small.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized-small.mp4"
                },
                "downsized_still":
                {
                    "height": "425",
                    "width": "480",
                    "size": "37362",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-downsized_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized_s.gif"
                },
                "fixed_height":
                {
                    "height": "200",
                    "width": "226",
                    "size": "543328",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.gif",
                    "mp4_size": "106250",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/200.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.mp4",
                    "webp_size": "134448",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/200.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.webp"
                },
                "fixed_height_downsampled":
                {
                    "height": "200",
                    "width": "226",
                    "size": "76262",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200_d.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_d.gif",
                    "webp_size": "53888",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/200_d.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_d.webp"
                },
                "fixed_height_small":
                {
                    "height": "100",
                    "width": "113",
                    "size": "191831",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/100.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.gif",
                    "mp4_size": "42728",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/100.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.mp4",
                    "webp_size": "57310",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/100.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.webp"
                },
                "fixed_height_small_still":
                {
                    "height": "100",
                    "width": "113",
                    "size": "5022",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/100_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100_s.gif"
                },
                "fixed_height_still":
                {
                    "height": "200",
                    "width": "226",
                    "size": "13200",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_s.gif"
                },
                "fixed_width":
                {
                    "height": "177",
                    "width": "200",
                    "size": "496807",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.gif",
                    "mp4_size": "85492",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.mp4",
                    "webp_size": "116368",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.webp"
                },
                "fixed_width_downsampled":
                {
                    "height": "177",
                    "width": "200",
                    "size": "64466",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w_d.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_d.gif",
                    "webp_size": "47188",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w_d.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_d.webp"
                },
                "fixed_width_small":
                {
                    "height": "89",
                    "width": "100",
                    "size": "163653",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/100w.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.gif",
                    "mp4_size": "35876",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/100w.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.mp4",
                    "webp_size": "50774",
                    "webp": "https://media1.giphy.com/media/TVyR1JQjABvu8/100w.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.webp"
                },
                "fixed_width_small_still":
                {
                    "height": "89",
                    "width": "100",
                    "size": "4403",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/100w_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w_s.gif"
                },
                "fixed_width_still":
                {
                    "height": "177",
                    "width": "200",
                    "size": "11149",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/200w_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_s.gif"
                },
                "looping":
                {
                    "mp4_size": "3914926",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-loop.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-loop.mp4"
                },
                "original_still":
                {
                    "height": "425",
                    "width": "480",
                    "size": "106882",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy_s.gif"
                },
                "original_mp4":
                {
                    "height": "424",
                    "width": "480",
                    "mp4_size": "412814",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.mp4"
                },
                "preview":
                {
                    "height": "168",
                    "width": "190",
                    "mp4_size": "35242",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-preview.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.mp4"
                },
                "preview_gif":
                {
                    "height": "72",
                    "width": "81",
                    "size": "48623",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-preview.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.gif"
                },
                "preview_webp":
                {
                    "height": "102",
                    "width": "116",
                    "size": "34004",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-preview.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.webp"
                },
                "hd":
                {
                    "height": "662",
                    "width": "748",
                    "mp4_size": "1859796",
                    "mp4": "https://media1.giphy.com/media/TVyR1JQjABvu8/giphy-hd.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-hd.mp4"
                },
                "480w_still":
                {
                    "height": "425",
                    "width": "480",
                    "size": "2828973",
                    "url": "https://media1.giphy.com/media/TVyR1JQjABvu8/480w_s.jpg?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=480w_s.jpg"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPVRWeVIxSlFqQUJ2dTgmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02ZWU0ZTVkYWJpanF4YjdvaWNuYXE3cDQwZTA5cXNvcXVubTZ4b3FpZXpyejlxaHQ",
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=TVyR1JQjABvu8&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=TVyR1JQjABvu8&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=TVyR1JQjABvu8&action_type=SENT"
                }
            }
        },
        {
            "type": "gif",
            "id": "MTKpZ9rSgYYthtxf4e",
            "url": "https://giphy.com/gifs/nyc-new-york-1993-MTKpZ9rSgYYthtxf4e",
            "slug": "nyc-new-york-1993-MTKpZ9rSgYYthtxf4e",
            "bitly_gif_url": "https://gph.is/g/4zwVzLK",
            "bitly_url": "https://gph.is/g/4zwVzLK",
            "embed_url": "https://giphy.com/embed/MTKpZ9rSgYYthtxf4e",
            "username": "",
            "source": "",
            "title": "new york nyc GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-05-22 00:48:52",
            "trending_datetime": "0000-00-00 00:00:00",
            "images":
            {
                "original":
                {
                    "height": "270",
                    "width": "480",
                    "size": "6334302",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.gif",
                    "mp4_size": "1481990",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.mp4",
                    "webp_size": "1856894",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.webp",
                    "frames": "73",
                    "hash": "aba2d604a05f08caa372d2796e36167f"
                },
                "downsized":
                {
                    "height": "156",
                    "width": "278",
                    "size": "1361357",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-downsized.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized.gif"
                },
                "downsized_large":
                {
                    "height": "270",
                    "width": "480",
                    "size": "6334302",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.gif"
                },
                "downsized_medium":
                {
                    "height": "270",
                    "width": "480",
                    "size": "4580391",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-downsized-medium.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized-medium.gif"
                },
                "downsized_small":
                {
                    "height": "84",
                    "width": "149",
                    "mp4_size": "183844",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-downsized-small.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized-small.mp4"
                },
                "downsized_still":
                {
                    "height": "156",
                    "width": "278",
                    "size": "23576",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-downsized_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-downsized_s.gif"
                },
                "fixed_height":
                {
                    "height": "200",
                    "width": "356",
                    "size": "2896189",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.gif",
                    "mp4_size": "1035270",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.mp4",
                    "webp_size": "1329150",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200.webp"
                },
                "fixed_height_downsampled":
                {
                    "height": "200",
                    "width": "356",
                    "size": "254975",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200_d.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_d.gif",
                    "webp_size": "141218",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200_d.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_d.webp"
                },
                "fixed_height_small":
                {
                    "height": "100",
                    "width": "178",
                    "size": "929039",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.gif",
                    "mp4_size": "432256",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.mp4",
                    "webp_size": "529364",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100.webp"
                },
                "fixed_height_small_still":
                {
                    "height": "100",
                    "width": "178",
                    "size": "15421",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100_s.gif"
                },
                "fixed_height_still":
                {
                    "height": "200",
                    "width": "356",
                    "size": "40618",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200_s.gif"
                },
                "fixed_width":
                {
                    "height": "113",
                    "width": "200",
                    "size": "1156709",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.gif",
                    "mp4_size": "474214",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.mp4",
                    "webp_size": "612456",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w.webp"
                },
                "fixed_width_downsampled":
                {
                    "height": "113",
                    "width": "200",
                    "size": "100978",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w_d.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_d.gif",
                    "webp_size": "56380",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w_d.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_d.webp"
                },
                "fixed_width_small":
                {
                    "height": "57",
                    "width": "100",
                    "size": "330870",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100w.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.gif",
                    "mp4_size": "48362",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100w.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.mp4",
                    "webp_size": "226094",
                    "webp": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100w.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w.webp"
                },
                "fixed_width_small_still":
                {
                    "height": "57",
                    "width": "100",
                    "size": "5452",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/100w_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=100w_s.gif"
                },
                "fixed_width_still":
                {
                    "height": "113",
                    "width": "200",
                    "size": "19250",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/200w_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=200w_s.gif"
                },
                "looping":
                {
                    "mp4_size": "4249921",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-loop.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-loop.mp4"
                },
                "original_still":
                {
                    "height": "270",
                    "width": "480",
                    "size": "89175",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy_s.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy_s.gif"
                },
                "original_mp4":
                {
                    "height": "270",
                    "width": "480",
                    "mp4_size": "1481990",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy.mp4"
                },
                "preview":
                {
                    "height": "112",
                    "width": "199",
                    "mp4_size": "47388",
                    "mp4": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-preview.mp4?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.mp4"
                },
                "preview_gif":
                {
                    "height": "49",
                    "width": "87",
                    "size": "49277",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-preview.gif?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.gif"
                },
                "preview_webp":
                {
                    "height": "74",
                    "width": "132",
                    "size": "47040",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/giphy-preview.webp?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=giphy-preview.webp"
                },
                "480w_still":
                {
                    "height": "270",
                    "width": "480",
                    "size": "6334302",
                    "url": "https://media4.giphy.com/media/MTKpZ9rSgYYthtxf4e/480w_s.jpg?cid=6ee4e5dabijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&rid=480w_s.jpg"
                }
            },
            "analytics_response_payload": "e=Z2lmX2lkPU1US3BaOXJTZ1lZdGh0eGY0ZSZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTZlZTRlNWRhYmlqcXhiN29pY25hcTdwNDBlMDlxc29xdW5tNnhvcWllenJ6OXFodA",
            "analytics":
            {
                "onload":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=MTKpZ9rSgYYthtxf4e&action_type=SEEN"
                },
                "onclick":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=MTKpZ9rSgYYthtxf4e&action_type=CLICK"
                },
                "onsent":
                {
                    "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=bijqxb7oicnaq7p40e09qsoqunm6xoqiezrz9qht&event_type=GIF_SEARCH&gif_id=MTKpZ9rSgYYthtxf4e&action_type=SENT"
                }
            }
        }
    ]
} */
/* // extract the array data out from object
const arrayData = giphyObj.data
// length of array =  number of gifs returned
const length = arrayData.length
console.log(`this is the length of array: ${length}`)

let imageUrls = []
// maps all images url into an array
for (i = 0; i <length; i++)
{
    imageUrls[i] = arrayData[i].images.fixed_height.url
    // imageUrls[i] = imageUrls[i].fixed_height
    console.info(`this is array[${i}]\n`,imageUrls[i])
} */

// console.log(giphyObj)
// console.log(arrayData)

// const test2 = Object.keys(test1).map(function(key, index) {
//     return test1[key].fixed_height.url
// })

const giphyObj1 = {
    firstname: 'john',
    lastname: 'lee'
}

Object.getOwnPropertyNames(giphyObj1) //returns ['firstname','lastname']

Object.keys(giphyObj1) //returns ['firstname','lastname']

const write = Object.getOwnPropertyNames(giphyObj1)

const write2 = Object.keys(giphyObj1)

console.log('getownpropertynames: ' + write)
console.log('keys: ' + write2)

// set view engine
app.engine('hbs', hbs({
    defaultLayout: 'main.hbs'
}))
app.set('view engine', 'hbs')

// Parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// configure app
app.get('/', (req, res) => {
    res.status(200).type('html')
    res.render('search')
})

app.get('/search', async (req, res) => {

    const searchQuery = req.query.searchQuery
    const limit = req.query.limit
    const rating = req.query.rating

    // construct url with query params
    const url = withQuery(endpoint, {
        q: searchQuery,
        api_key: API_KEY,
        limit: limit,
        lang: 'en',
        rating: rating,
    })

    // .then() resolve
    const result = await fetch(url)

    // .then() resolve
    const data = await result.json()

    // results of json object
    // first level is data, array => map function
    // 2nd level is images, object => property is images
    // 3rd level is fixed_height, object
    // 4th level is url, object

    // lecture code
    /*     const imgs = []
    
        for (let i of data.data) {
            const title = i.title
            const url = i.images.fixed_height.url
            imgs.push({ title, url })
        } */


    // map function
    const imgs = data.data.map(element => {
        return {
            title: element.title,
            url: element.images.fixed_height.url,
        }
    })

    res.status(200).type('html')
    res.render('result', {
        imgs, searchQuery,
        hasContent: imgs.length > 0
        // ! turns img.length into a boolean
        // hasContent: !!imgs.length
    })
})

// all other uncaptured resources
app.use((req, res) => {
    res.redirect('/')
})

// app.listen if API_KEY is submitted
// does not check if api key is correct
if (API_KEY)
    app.listen(PORT, console.info(`APP started on ${PORT} on ${new Date()} on http://localhost:${PORT}`))
else {
    console.info('API KEY NOT IN ENV')
}
