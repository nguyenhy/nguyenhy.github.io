import{U as s,v as c,D as e,K as a}from"./q-a904f00a.js";const t=[{text:"Simulate-Live from HLS VOD",id:"simulate-live-from-hls-vod",level:1},{text:"Description",id:"description",level:2},{text:"Problem",id:"problem",level:2},{text:"Find the Solution",id:"find-the-solution",level:2},{text:"What HLS is?",id:"what-hls-is",level:3},{text:"Building blocks of HLS",id:"building-blocks-of-hls",level:3},{text:"Main playlist",id:"main-playlist",level:4},{text:"Media (Level) playlist",id:"media-level-playlist",level:4},{text:"How Hls work",id:"how-hls-work",level:3},{text:"How HLS Live Stream Works",id:"how-hls-live-stream-works",level:2},{text:"Idea",id:"idea",level:3},{text:"Debugging",id:"debugging",level:2},{text:"Demo",id:"demo",level:2},{text:"Conclusion",id:"conclusion",level:2}],d={title:"Simulate-Live from HLS VOD",meta:[],styles:[],links:[],frontmatter:{tag:["hyn","hls","vod","live","y2025","m2","d7"],meta:{description:"This article explores how to transform an HLS Video on Demand (VOD) stream into a simulated live experience.",url:"https://nguyenhy.github.io/blogs/vod-simulate-live/1738907578230/",keywords:["blog","me","hyn"],article:{published_time:1738907578230}}}},h={title:"Simulate-Live from HLS VOD",tag:["hyn","hls","vod","live","y2025","m2","d7"],meta:{description:"This article explores how to transform an HLS Video on Demand (VOD) stream into a simulated live experience.",url:"https://nguyenhy.github.io/blogs/vod-simulate-live/1738907578230/",keywords:["blog","me","hyn"],article:{published_time:1738907578230}}};function r(n){const l=Object.assign({h1:"h1",a:"a",span:"span",h2:"h2",p:"p",h3:"h3",h4:"h4",div:"div",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},n.components);return e(a,{children:[e(l.h1,{id:"simulate-live-from-hls-vod",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#simulate-live-from-hls-vod",children:e(l.span,{class:"icon icon-link"})}),"Simulate-Live from HLS VOD"]}),`
`,e(l.h2,{id:"description",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#description",children:e(l.span,{class:"icon icon-link"})}),"Description"]}),`
`,e(l.p,{children:"This article explores how to transform an HLS Video on Demand (VOD) stream into a simulated live experience. By modifying the HLS manifest dynamically, we can ensure that users joining the stream see content at a real-time-simulated position rather than from the beginning. We discuss the problem, the idea behind the solution, debugging to find the right approach, step-by-step implementation, and the final JavaScript code that makes it possible."}),`
`,e(l.h2,{id:"problem",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#problem",children:e(l.span,{class:"icon icon-link"})}),"Problem"]}),`
`,e(l.p,{children:`HLS (HTTP Live Streaming) is widely used for delivering video content over the internet.
However, many videos are available as Video on Demand (VOD), meaning users can start, pause, and seek through the content at any time.`}),`
`,e(l.p,{children:"While this flexibility is useful, there are scenarios where we need to simulate a live broadcast experience from a VOD source. This means that when a user joins, they should see the video at the point where a real-time stream would have been if it were truly live."}),`
`,e(l.h2,{id:"find-the-solution",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#find-the-solution",children:e(l.span,{class:"icon icon-link"})}),"Find the Solution"]}),`
`,e(l.h3,{id:"what-hls-is",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#what-hls-is",children:e(l.span,{class:"icon icon-link"})}),"What HLS is?"]}),`
`,e(l.p,{children:`HLS (HTTP Live Streaming) is a streaming technology developed by Apple, that allows video files to be broken into smaller chunks and delivered over HTTP.
This makes streaming more efficient and adaptable to different network conditions. The core of HLS is the M3U8 playlist file and its segments file.`}),`
`,e(l.h3,{id:"building-blocks-of-hls",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#building-blocks-of-hls",children:e(l.span,{class:"icon icon-link"})}),"Building blocks of HLS"]}),`
`,e(l.p,{children:"HLS (HTTP Live Streaming) operates using two main types of M3U8 playlists: main playlist and media playlist"}),`
`,e(l.h4,{id:"main-playlist",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#main-playlist",children:e(l.span,{class:"icon icon-link"})}),"Main playlist"]}),`
`,e(l.p,{children:`A main playlist is an M3U8 file that tells the HLS player which video quality options are available.
It contains multiple variants of the same video at different bitrates or resolutions, allowing the player to adapt to network conditions dynamically.`}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTM3U"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=1280000,AVERAGE-BANDWIDTH=1000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/low.m3u8"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=2560000,AVERAGE-BANDWIDTH=2000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/mid.m3u8"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=7680000,AVERAGE-BANDWIDTH=6000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/hi.m3u8"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:'#EXT-X-STREAM-INF:BANDWIDTH=65000,CODECS="mp4a.40.5"'})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/audio-only.m3u8"})})]})})}),`
`,e(l.p,{children:"Example of main playlist contains:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Low quality (e.g., 480p, lower bitrate)"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=1280000,AVERAGE-BANDWIDTH=1000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/low.m3u8"})})]})})}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Medium quality (e.g., 720p, moderate bitrate)"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=2560000,AVERAGE-BANDWIDTH=2000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/mid.m3u8"})})]})})}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"High quality (e.g., 1080p, high bitrate)"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-STREAM-INF:BANDWIDTH=7680000,AVERAGE-BANDWIDTH=6000000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/hi.m3u8"})})]})})}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Audio-only option"}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:'#EXT-X-STREAM-INF:BANDWIDTH=65000,CODECS="mp4a.40.5"'})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/audio-only.m3u8"})})]})})}),`
`,e(l.h4,{id:"media-level-playlist",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#media-level-playlist",children:e(l.span,{class:"icon icon-link"})}),"Media (Level) playlist"]}),`
`,e(l.p,{children:"A Media Playlist (or Level Playlist) contains the actual video segments (chunks of video) that are played sequentially."}),`
`,e(l.p,{children:"Types of Media Playlists:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["VOD (Video on Demand): Fixed playlist with an ",e(l.code,{children:"#EXT-X-ENDLIST"})," tag."]}),`
`]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTM3U"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-PLAYLIST-TYPE:VOD"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-TARGETDURATION:10"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-VERSION:4"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-MEDIA-SEQUENCE:0"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10.0,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/movie1/fileSequenceA.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10.0,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/movie1/fileSequenceB.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10.0,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/movie1/fileSequenceC.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:9.0,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"http://example.com/movie1/fileSequenceD.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-ENDLIST"})})]})})}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["Live Streaming: Updates dynamically with ",e(l.code,{children:"#EXT-X-MEDIA-SEQUENCE"})]}),`
`]}),`
`,e(l.pre,{children:e(l.code,{children:`#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-VERSION:4
#EXT-X-MEDIA-SEQUENCE:1
#EXTINF:10.0,
fileSequence1.ts
#EXTINF:10.0,
fileSequence2.ts
#EXTINF:10.0,
fileSequence3.ts
#EXTINF:10.0,
fileSequence4.ts
#EXTINF:10.0,
fileSequence5.ts
`})}),`
`,e(l.h3,{id:"how-hls-work",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#how-hls-work",children:e(l.span,{class:"icon icon-link"})}),"How Hls work"]}),`
`,e(l.p,{children:`HLS works by breaking video content into small chunks (segments) and providing an M3U8 playlist file that lists these segments.
The player continuously fetches and plays these segments, enabling adaptive bitrate streaming. An M3U8 playlist file may include:`}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:[`
`,e(l.p,{children:[e(l.code,{children:"#EXTM3U"})," – Indicates that this is an M3U8 playlist."]}),`
`]}),`
`,e(l.li,{children:[`
`,e(l.p,{children:[e(l.code,{children:"#EXT-X-TARGETDURATION"})," – The maximum segment duration."]}),`
`]}),`
`,e(l.li,{children:[`
`,e(l.p,{children:[e(l.code,{children:"#EXTINF"})," – Specifies the duration of each segment."]}),`
`]}),`
`,e(l.li,{children:[`
`,e(l.p,{children:[e(l.code,{children:"#EXT-X-ENDLIST"})," – Marks the end of a VOD playlist."]}),`
`]}),`
`]}),`
`,e(l.p,{children:"Example of m3u8 for VOD"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTM3U"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-VERSION:3"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-PLAYLIST-TYPE:VOD"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-TARGETDURATION:10"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment1.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment2.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment3.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-ENDLIST"})})]})})}),`
`,e(l.h2,{id:"how-hls-live-stream-works",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#how-hls-live-stream-works",children:e(l.span,{class:"icon icon-link"})}),"How HLS Live Stream Works"]}),`
`,e(l.p,{children:"Unlike VOD, live HLS streams update continuously as new segments are generated. Key differences include:"}),`
`,e(l.p,{children:["No ",e(l.code,{children:"#EXT-X-ENDLIST"}),", allowing the playlist to grow dynamically."]}),`
`,e(l.p,{children:["The presence of ",e(l.code,{children:"#EXT-X-MEDIA-SEQUENCE"}),", indicating the sequence number of the first segment in the playlist."]}),`
`,e(l.p,{children:"The playlist only contains a moving window of the latest segments, simulating real-time playback."}),`
`,e(l.p,{children:"Example of m3u8 for live stream at"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:[`
`,e(l.p,{children:["timestamp ",e(l.code,{children:"t1"})]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"m3u8","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"m3u8","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTM3U"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-VERSION:3"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-TARGETDURATION:10"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXT-X-MEDIA-SEQUENCE:1000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment1000.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment1001.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#abb2bf"},children:"segment1002.ts"})})]})})}),`
`]}),`
`,e(l.li,{children:[`
`,e(l.p,{children:["timestamp ",e(l.code,{children:"t2"})]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"diff","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"diff","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" #EXTM3U"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" #EXT-X-VERSION:3"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" #EXT-X-TARGETDURATION:10"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"-#EXT-X-MEDIA-SEQUENCE:1000"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#98C379"},children:"+#EXT-X-MEDIA-SEQUENCE:1001"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"-#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"-segment1000.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" #EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" segment1001.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" #EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:" segment1002.ts"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#98C379"},children:"+#EXTINF:10,"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#98C379"},children:"+segment1003.ts"})})]})})}),`
`]}),`
`]}),`
`,e(l.h3,{id:"idea",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#idea",children:e(l.span,{class:"icon icon-link"})}),"Idea"]}),`
`,e(l.p,{children:"To achieve a simulated live experience from an HLS VOD stream, we can manipulate the playlist (.m3u8) dynamically. The goal is to:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Remove indicators that define the stream as VOD."}),`
`,e(l.li,{children:"Trim the playlist so that playback starts at a calculated point, mimicking a real-time progression."}),`
`]}),`
`,e(l.p,{children:["There many player that could be used to play HLS stream, but in this article, we will use ",e(l.a,{href:"https://github.com/video-dev/hls.js",children:e(l.strong,{children:"HLS.js"})}),`, a JavaScript library that implements an HLS client.
Checkout its `,e(l.a,{href:"https://hlsjs.video-dev.org/demo/",children:e(l.strong,{children:"reference player"})}),`.
Also, the version of HLS.js that we will use is `,e(l.a,{href:"https://github.com/video-dev/hls.js/tree/v1.5.20",children:e(l.code,{children:"1.5.20"})})," at the time write this article."]}),`
`,e(l.h2,{id:"debugging",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#debugging",children:e(l.span,{class:"icon icon-link"})}),"Debugging"]}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:["We first need to know how HLS.js works and how it loads the playlist. Look at the image below we could see that HLS.js use ",e(l.a,{href:"https://github.com/video-dev/hls.js/blob/v1.5.20/src/loader/playlist-loader.ts#L66",children:e(l.code,{children:"playlist-loader"})})," to handle it."]}),`
`]}),`
`,e("img",{loading:"lazy",src:"/assets/blogs/vod-simulate-live/1738907578230/debug-load-playlist.png",alt:"debug load playlist"}),`
`,e(l.p,{children:["Further more debug, we could see that HLS.js use ",e(l.code,{children:"loader"})," to load the segment and we can config the loader via ",e(l.code,{children:"config.pLoader"})," or ",e(l.code,{children:"config.loader"}),` in the HLS.js config.
`,e(l.a,{href:"https://github.com/video-dev/hls.js/blob/v1.5.20/src/loader/playlist-loader.ts#L103-L126",children:"reference to source"})]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"ts","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"ts","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"/**"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"   * Returns defaults or configured loader-type overloads (pLoader and loader config params)"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"   */"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#E06C75"},children:"private"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#61AFEF"},children:"createInternalLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:"("})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#E06C75"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#E06C75"},children:"PlaylistLoaderContext"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  ): "}),e(l.span,{style:{color:"#E06C75"},children:"Loader"}),e(l.span,{style:{color:"#56B6C2"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"LoaderContext"}),e(l.span,{style:{color:"#56B6C2"},children:">"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    const "}),e(l.span,{style:{color:"#E06C75"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"this"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E5C07B"},children:"hls"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    const "}),e(l.span,{style:{color:"#E06C75"},children:"PLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"pLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    const "}),e(l.span,{style:{color:"#E06C75"},children:"Loader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"loader"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    const "}),e(l.span,{style:{color:"#E06C75"},children:"InternalLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"PLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"||"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"Loader"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    const "}),e(l.span,{style:{color:"#E06C75"},children:"loader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#C678DD"},children:"new"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#61AFEF"},children:"InternalLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:") "}),e(l.span,{style:{color:"#C678DD"},children:"as"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"Loader"}),e(l.span,{style:{color:"#ABB2BF"},children:"<"}),e(l.span,{style:{color:"#E5C07B"},children:"PlaylistLoaderContext"}),e(l.span,{style:{color:"#ABB2BF"},children:">;"})]}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    this.loaders["}),e(l.span,{style:{color:"#E5C07B"},children:"context"}),e(l.span,{style:{color:"#E06C75"},children:".type"}),e(l.span,{style:{color:"#ABB2BF"},children:"]"}),e(l.span,{style:{color:"#E06C75"},children:" = loader;"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"    return loader;"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"  }"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"  private getInternalLoader("})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"    context"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#E06C75"},children:"PlaylistLoaderContext"}),e(l.span,{style:{color:"#ABB2BF"},children:","})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  ): "}),e(l.span,{style:{color:"#E06C75"},children:"Loader"}),e(l.span,{style:{color:"#56B6C2"},children:"<"}),e(l.span,{style:{color:"#E06C75"},children:"LoaderContext"}),e(l.span,{style:{color:"#56B6C2"},children:">"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"|"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#D19A66"},children:"undefined"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    return this.loaders["}),e(l.span,{style:{color:"#E5C07B"},children:"context"}),e(l.span,{style:{color:"#E06C75"},children:".type"}),e(l.span,{style:{color:"#ABB2BF"},children:"]"}),e(l.span,{style:{color:"#E06C75"},children:";"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#E06C75"},children:"  }"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#E06C75"},children:"  private resetInternalLoader(contextType)"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#C678DD"},children:"void"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#61AFEF"},children:"if"}),e(l.span,{style:{color:"#ABB2BF"},children:" (this.loaders["}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"contextType"}),e(l.span,{style:{color:"#ABB2BF"},children:"]) {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#C678DD"},children:"delete"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"this"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"loaders"}),e(l.span,{style:{color:"#ABB2BF"},children:"["}),e(l.span,{style:{color:"#E06C75"},children:"contextType"}),e(l.span,{style:{color:"#ABB2BF"},children:"];"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"    }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"  }"})})]})})}),`
`,e(l.p,{children:["At this port, we gonna use ",e(l.code,{children:"config.pLoader"}),` to config the loader to load the playlist and modify the playlist before it's loaded.
Checkout `,e(l.a,{href:"https://github.com/video-dev/hls.js/blob/v1.5.20/docs/API.md#ploader",children:e(l.code,{children:"config.pLoader"})}),` document, we could see that the document already prepare this for us.
And all we have to do it copy it and modify the `,e(l.code,{children:"process"})," function to fit our need."]}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",children:e(l.pre,{style:{backgroundColor:"#282c34"},tabindex:"0","data-language":"js","data-theme":"one-dark-pro",children:e(l.code,{"data-language":"js","data-theme":"one-dark-pro",children:[e(l.span,{class:"line",children:e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// special playlist post processing function"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C678DD"},children:"function"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#61AFEF"},children:"process"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"playlist"}),e(l.span,{style:{color:"#ABB2BF"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#C678DD"},children:"if"}),e(l.span,{style:{color:"#ABB2BF"},children:" ("}),e(l.span,{style:{color:"#E5C07B"},children:"playlist"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#61AFEF"},children:"includes"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#98C379"},children:"'#EXT-X-STREAM-INF'"}),e(l.span,{style:{color:"#ABB2BF"},children:")) {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// we only process media playlist"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#C678DD"},children:"return"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"playlist"}),e(l.span,{style:{color:"#ABB2BF"},children:" "})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"  }"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// Remove VOD tag indicator"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#C678DD"},children:"return"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"playlist"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      ."}),e(l.span,{style:{color:"#61AFEF"},children:"replace"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#98C379"},children:"'#EXT-X-PLAYLIST-TYPE:VOD"}),e(l.span,{style:{color:"#56B6C2"},children:"\\n"}),e(l.span,{style:{color:"#98C379"},children:"'"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#98C379"},children:"''"}),e(l.span,{style:{color:"#ABB2BF"},children:")"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      ."}),e(l.span,{style:{color:"#61AFEF"},children:"replace"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#98C379"},children:"'#EXT-X-ENDLIST"}),e(l.span,{style:{color:"#56B6C2"},children:"\\n"}),e(l.span,{style:{color:"#98C379"},children:"'"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#98C379"},children:"''"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C678DD"},children:"class"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"pLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#C678DD"},children:"extends"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"Hls"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E5C07B"},children:"DefaultConfig"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E5C07B"},children:"loader"}),e(l.span,{style:{color:"#ABB2BF"},children:" {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#C678DD"},children:"constructor"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#E5C07B",fontStyle:"italic"},children:"super"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#C678DD"},children:"var"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"load"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"this"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E5C07B"},children:"load"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#61AFEF"},children:"bind"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E5C07B"},children:"this"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"    "}),e(l.span,{style:{color:"#E5C07B"},children:"this"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#61AFEF"},children:"load"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#C678DD"},children:"function"}),e(l.span,{style:{color:"#ABB2BF"},children:" ("}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"callbacks"}),e(l.span,{style:{color:"#ABB2BF"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#C678DD"},children:"if"}),e(l.span,{style:{color:"#ABB2BF"},children:" ("}),e(l.span,{style:{color:"#E5C07B"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"type"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"=="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#98C379"},children:"'manifest'"}),e(l.span,{style:{color:"#ABB2BF"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"        "}),e(l.span,{style:{color:"#C678DD"},children:"var"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"onSuccess"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E5C07B"},children:"callbacks"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"onSuccess"}),e(l.span,{style:{color:"#ABB2BF"},children:";"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"        "}),e(l.span,{style:{color:"#E5C07B"},children:"callbacks"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#61AFEF"},children:"onSuccess"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#C678DD"},children:"function"}),e(l.span,{style:{color:"#ABB2BF"},children:" ("}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"response"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"stats"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75",fontStyle:"italic"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:") {"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"          "}),e(l.span,{style:{color:"#E5C07B"},children:"response"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"data"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#61AFEF"},children:"process"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E5C07B"},children:"response"}),e(l.span,{style:{color:"#ABB2BF"},children:"."}),e(l.span,{style:{color:"#E06C75"},children:"data"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"          "}),e(l.span,{style:{color:"#61AFEF"},children:"onSuccess"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75"},children:"response"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75"},children:"stats"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"        };"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"      }"})}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"      "}),e(l.span,{style:{color:"#61AFEF"},children:"load"}),e(l.span,{style:{color:"#ABB2BF"},children:"("}),e(l.span,{style:{color:"#E06C75"},children:"context"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75"},children:"config"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#E06C75"},children:"callbacks"}),e(l.span,{style:{color:"#ABB2BF"},children:");"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"    };"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"  }"})}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"}"})}),`
`,e(l.span,{class:"line",children:" "}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#C678DD"},children:"var"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#E06C75"},children:"hls"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#56B6C2"},children:"="}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#C678DD"},children:"new"}),e(l.span,{style:{color:"#ABB2BF"},children:" "}),e(l.span,{style:{color:"#61AFEF"},children:"Hls"}),e(l.span,{style:{color:"#ABB2BF"},children:"({"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#E06C75"},children:"pLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#E06C75"},children:"pLoader"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// to create make sure simulate live work"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#E06C75"},children:"liveDurationInfinity"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#D19A66"},children:"true"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// to remove the duration in the video tag"})]}),`
`,e(l.span,{class:"line",children:[e(l.span,{style:{color:"#ABB2BF"},children:"  "}),e(l.span,{style:{color:"#E06C75"},children:"startPosition"}),e(l.span,{style:{color:"#ABB2BF"},children:": "}),e(l.span,{style:{color:"#D19A66"},children:"0"}),e(l.span,{style:{color:"#ABB2BF"},children:", "}),e(l.span,{style:{color:"#7F848E",fontStyle:"italic"},children:"// start playing position"})]}),`
`,e(l.span,{class:"line",children:e(l.span,{style:{color:"#ABB2BF"},children:"});"})})]})})}),`
`,e(l.h2,{id:"demo",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#demo",children:e(l.span,{class:"icon icon-link"})}),"Demo"]}),`
`,e("iframe",{src:"/assets/blogs/vod-simulate-live/1738907578230/demo.html",style:"width: 100%; height: 350px"}),`
`,e(l.p,{children:["Available demo at ",e(l.a,{href:"/assets/blogs/vod-simulate-live/1738907578230/demo.html",children:"here"})]}),`
`,e(l.h2,{id:"conclusion",children:[e(l.a,{"aria-hidden":"true",tabindex:"-1",href:"#conclusion",children:e(l.span,{class:"icon icon-link"})}),"Conclusion"]}),`
`,e(l.p,{children:"By intercepting and modifying the HLS manifest, we can create a simulated live experience for VOD content. This approach ensures users experience the video as if it were a live stream, enhancing engagement for specific use cases like scheduled replays or simulated broadcasts. Using a custom HLS.js loader, we can dynamically adjust playback behavior while keeping the infrastructure simple and scalable."})]})}function i(n={}){const{wrapper:l}=n.components||{};return l?e(l,Object.assign({},n,{children:e(r,n)})):r(n)}const p=()=>s(c,{children:s(i,{},3,null)},3,"CfENRSgl");export{p as default,h as frontmatter,d as head,t as headings};
