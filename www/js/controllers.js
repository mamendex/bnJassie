angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {})

  .controller('PrestacaoContasCtrl', function ($scope) {
    console.log('PrestacaoContasCtrl');

    let me = this;

    $scope.tirarFoto = function() {
      console.info("acessando camera...");
      let opcoesCamera = {
        saveToPhotoAlbum: true
      }
      navigator.camera.getPicture(me.onSucessoAoTirarFoto, me.onFailAoTirarFoto, opcoesCamera);
    }

    $scope.gravarAudio = function() {
      console.error("não implementado");
    }

    $scope.revisar = function() {
      console.error("não implementado");
    }


    me.onSucessoAoTirarFoto = function(imageData) {
      console.log("Camera cleanup success.")
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData
    }

    me.onFailAoTirarFoto = function(message) {
      alert('Failed because: ' + message);
    }

  })

  .controller('QRCodeCtrl', function ($scope) {
    console.log('QRCodeCtrl');
    $scope.version = 2;
    $scope.data = 'String';
    $scope.level = 'M';
    $scope.size = 200;
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
