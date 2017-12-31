/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.10
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "vortexicon.png"

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = false;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = true;

/*Default available videos:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add your own video backgrounds
Just make sure they are using webm VP8 format 
(Place the videos in the backgrounds/videos folder)*/
var l_background = "VAPORWAVE.webm";

/*(Image-background only)
Enable map-based background image?
If enabled, the background will be an image based on the server current map
You need to have a background image with the same name as the map
Also, the image needs to be in .jpg format
E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
'true' or 'false'*/
var l_bgImageMapBased = false;

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
	"your.jpg",
	"mom.jpg",
	"is.jpg", 
	"gay.jpg"
];

/*(Image-background only)
Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 0;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = true;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
    {youtube: "la9C0n7jSsI", name: "Kero Kero Bonito-Flamingo (WTN3 Remix)"},
	{youtube: "Jmv5pTyz--I", name: "Stranger Things Theme Song (C418 REMIX)"},
	{youtube: "z-vRB294lJQ", name: "Altitude | Trains"},
	{youtube: "j2QKetnDHg0", name: "Miss Kobayashi's Dragon Maid-Ishukan Communication (Remix feat. Nikki-Chi)"}
];

/*Random music order?
'true' or 'false'*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 20;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"We Have Fully Custom Printers For You To Use.",
	"Just Wait For The Addons, It Is Worth It!",
	"If You Would Want A Song On The Loading Screen You Can Donate $1 To Get It Added.",
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};