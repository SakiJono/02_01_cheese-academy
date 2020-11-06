window.onload = function Init() {
  startVideo();
}

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      document.getElementById('video').srcObject = stream;
    }).catch(function (error) { // 失敗時の処理はこちら.
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });
}

