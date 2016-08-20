'use strict';
console.log('clickHandler');
(function() {
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = appUrl + '/api/:id/clicks';

  function updateClickCount (data) {
    var clicksObject = JSON.parse(data);
    console.log('updateClickCount', clicksObject);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  ajaxFunctions.ready(
    ajaxFunctions.ajaxRequest('GET', apiUrl, function(data) {
      console.log('init', data);
      updateClickCount(data);
    })
  );

  addButton.addEventListener('click', function() {
    console.log('clicked');
    ajaxFunctions.ajaxRequest('POST', apiUrl, function(data) {
      console.log('posted', data);
      ajaxFunctions.ajaxRequest('GET', apiUrl, function(data) {
        updateClickCount(data);
      });
    });
  }, false);

  deleteButton.addEventListener('click', function() {
    ajaxFunctions.ajaxRequest('DELETE', apiUrl, function() {
      ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
    });
  }, false);

})();