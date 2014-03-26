

var query = 'uncontrollable laughter';
var apiKey = 'AIzaSyAPnhyBukd2LPFOAI3QyD3oHdLiOjdPfyI';

// object that does API query, handles return and generates YouTube iframe elements
var laughGenerator = {
  // YouTube API query url
  url: 'https://www.googleapis.com/youtube/v3/search?part=id&q=people+laughing&relatedToVideoId=9fCYYPCtHGs&order=relevance&maxResults=30&type=video&key=AIzaSyAPnhyBukd2LPFOAI3QyD3oHdLiOjdPfyI',
  // AJAX Get request
  requestVideo: function() {
      var req = new XMLHttpRequest();
      req.open("GET", this.url, true);
      req.onload = this.showVideo.bind(this)
      req.send(null);
      console.log("QUERY: " + query)
  },
  // Handle req.onload by grabbing the response and generating YouTube embed html.
  showVideo: function(e){
    var videoData = e.target.responseText;
    var json_response = JSON.parse(videoData)
    var videoItems = json_response.items;
    var iframes = []
    for (var i=0;i<videoItems.length;i++) { 
      var iframe = document.createElement('iframe');
      iframe.src = this.constructEmbed(videoItems[i].id.videoId)
      iframe.setAttribute('id', "ytplayer")
      iframe.setAttribute('type', "text/html")
      iframe.setAttribute('id', "ytplayer")
      iframe.setAttribute('width', "640")
      iframe.setAttribute('height', "360")
      iframe.setAttribute('frameborder', "0")
      iframes.push(iframe)
    }
    // grab a random iframe embed link and create an iframe element to append to the html body
    document.body.appendChild(iframes[Math.floor(Math.random() * (videoItems.length - 1 + 1)) + 1]);
    console.log(iframes[Math.floor(Math.random() * (videoItems.length - 1 + 1)) + 1]);
  },

  constructEmbed: function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId +''
  },
};

// Run the laugh video generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Content loaded")
  laughGenerator.requestVideo();
});


