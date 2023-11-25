document.addEventListener('DOMContentLoaded', function () {
  var tableRows = document.querySelectorAll('#play-history table tr');
  tableRows.forEach(function (row) {
    row.addEventListener('click', function () {
      alert('回念音乐，是灵魂的旅程，记录着时光的和声，编织着心灵的旋律。');
    });
  });
});