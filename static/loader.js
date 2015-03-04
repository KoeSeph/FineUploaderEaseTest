  $(document).ready(function() {
    $('#thumbnail-fine-uploader').fineUploader({
      template: "qq-simple-thumbnails-template",
      thumbnails: {
        placeholders: {
          waitingPath: "waiting-generic.png",
          notAvailablePath: "not_available-generic.png"
        }
      },
      request: {
        endpoint: '/upload'
      },
      validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png', 'txt', 'webm']
      }
    });
  });