window.onload = function () {
  document.getElementById('search-form').addEventListener('submit', function (event) {
    var query = document.getElementsByName('query')[0].value;
    if (query !== '求神呐') {
      event.preventDefault();
      alert('只有在搜索“求神呐”才会跳转到search_results.html页面');
    }
  });
};