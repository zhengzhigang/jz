(function(){
  var nodeList = document.querySelectorAll('.play_video')
  var video = document.getElementById('videoBox')
  var mask = document.querySelector('.video_mask')

  for (var i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i])
    nodeList[i].onclick = function() {
      video.play()
      mask.style.display = 'none'
    }
  }
}())
