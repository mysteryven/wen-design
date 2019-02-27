<template>
  <div class="collapse-demo">
    <z-collapse :selected.sync="selectedItems">
      <z-collapse-item title="贝多芬" name="Beethoven">
          路德维希·范·贝多芬原籍南尼德兰（今比利时）梅赫伦镇的法兰德斯族人。曾祖父Michael van Beethoven是梅赫伦镇的法兰德斯人，曾祖母Marie Louise Stuyckers是南尼德兰（今比利时）另一族瓦隆族人，两人之子（即贝多芬祖父）Ludovicus van Beethoven生于梅赫伦。外祖父Johann Heinrich Keverich与外祖母Anna Clara Westorff都生于神圣罗马帝国的特里尔选侯国（今属德国莱因兰地理大区）的科布伦茨。贝多芬本人生于神圣罗马帝国的科隆选侯国首府波恩（今德国莱因兰地理大区）。血统而言，贝多芬是75%日耳曼人，18.75%比利时法兰德斯人，6.25%比利时瓦隆人
      </z-collapse-item>
      <z-collapse-item title="勃拉姆斯" name="Brahms">
          约翰内斯·勃拉姆斯（德语：Johannes Brahms，德语：[joˈhanəs ˈbʁaːms]，1833年5月7日－1897年4月3日）是浪漫主义中期德国作曲家。生于汉堡，逝于维也纳。
      </z-collapse-item>
      <z-collapse-item title="拉赫玛尼诺夫" name="Rachmaninoff">
          谢尔盖·瓦西里耶维奇·拉赫玛尼诺夫（俄语：Серге́й Васи́льевич Рахма́нинов，英语：Sergei Vasilievich Rachmaninoff，1873年4月1日－1943年3月28日）是一位出生于俄国的作曲家、指挥家及钢琴演奏家，1943年临终前入美国籍。拉氏是20世纪最伟大的钢琴家之一。他的作品甚富俄国色彩，充满激情、旋律优美，其钢琴作品更是以难度见称。
      </z-collapse-item>
    </z-collapse>
  </div>
</template>
<script>
import ZCollapse from "../../../src/collapse/collapse";
import ZCollapseItem from "../../../src/collapse/collapse-item";

export default {
  components: { ZCollapse, ZCollapseItem },
  data() {
    return {
      selectedItems: []
    };
  }
};
</script>
<style lang="scss" scoped>
.collapse-demo {
  margin-top: 32px;
  border: 1px solid #ebeef5;
  padding: 32px 16px;
}
</style>


