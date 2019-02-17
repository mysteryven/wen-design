```html

<z-cascader :options="source" :selected.sync="selected"
            :source.sync="source" :load-data="loadData">
    <div class="selected">{{selectedString || '&nbsp;'}}</div>
</z-cascader>
<z-cascader :options="source" :selected.sync="selected"
            :source.sync="source" :load-data="loadData">
    <div class="selected">{{selectedString || '&nbsp;'}}</div>
</z-cascader>


<z-carousel class="slides" :selected.sync="selected" autoPlay :interval="5000" arrowVisible>
   <z-carousel-item class="item" name="1"> 1 </z-carousel-item>
   <z-carousel-item class="item" name="2"> 2 </z-carousel-item>
   <z-carousel-item class="item" name="3"> 3 </z-carousel-item>
</z-carousel>
```
