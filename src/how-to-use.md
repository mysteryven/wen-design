```html

<z-cascader :options="source" :selected.sync="selected"
            :source.sync="source" :load-data="loadData">
    <div class="selected">{{selectedString || '&nbsp;'}}</div>
</z-cascader>


<z-carousel class="slides" :selected.sync="selected" autoPlay :interval="5000" arrowVisible>
   <z-carousel-item class="item" name="1"> 1 </z-carousel-item>
   <z-carousel-item class="item" name="2"> 2 </z-carousel-item>
   <z-carousel-item class="item" name="3"> 3 </z-carousel-item>
</z-carousel>

<z-menu :selected.sync="selected">
            <z-menu-item name="draw" >绘画</z-menu-item>
            <z-menu-item name="opera">歌剧</z-menu-item>
            <z-sub-menu name="sub1">
                <template slot="title">
                    音乐
                </template>
                <z-sub-menu name="sub2">
                   <template slot="title">古典音乐</template>
                    <z-menu-item name="baLuoKe">巴洛克主义</z-menu-item>
                    <z-sub-menu name="sub3">
                        <template slot="title">
                          浪漫主义
                        </template>
                        <z-menu-item name="liSiTe">李斯特</z-menu-item>
                        <z-menu-item name="brams">勃拉姆斯</z-menu-item>
                    </z-sub-menu>
                    <z-menu-item name="classic">古典主义</z-menu-item>
                </z-sub-menu>
                <z-menu-item name="rock">摇滚</z-menu-item>
                <z-menu-item name="rb">R&B</z-menu-item>
            </z-sub-menu>
        </z-menu>
         <z-pager :total="4" :current.sync="current"></z-pager>
          <z-table v-if="xxx"  :columns="columns" :data-source="dataSource" striped bordered :selected-items.sync="selected"
                 :sort-directions.sync="sortDirections" :height="200"  >
                     <template slot-scope="source">
                         <button @click="edit(source)">编辑</button>
                     </template>
                 </z-table>
                  <z-sticky :distance="100">
                                 <button>hello</button>
                             </z-sticky>
```
