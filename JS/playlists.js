var songBlocks = document.querySelectorAll('.playlist-card');
songBlocks.forEach(function (block, index) {
  block.addEventListener('click', function () {
    switch (index) {
      case 0:
        alert('浪漫旋律，是夜空中绽放的恋曲，柔软如月光般温暖心房。');
        break;
      case 1:
        alert('夜晚放松，是星光的私语，轻拂心弦，带来心灵的静谧与安宁。');
        break;
      case 2:
        alert('热门流行，是都市的节奏，跃动着激情与活力，谱写着时代的旋律。');
        break;
      default:
        alert('经典老歌，是岁月的卷轴，诉说着往昔的记忆，散发着岁月的芬芳。');
        break;
    }
  });
});