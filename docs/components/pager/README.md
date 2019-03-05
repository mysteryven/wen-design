# Pager 分页器

## 引入

```bash
import {Pager} from 'wwz-ui'
```

## 预览

<ClientOnly>
<pager-demo/>   
</ClientOnly>  

## 代码

```vue
<div class="z-pager-demo">
    <z-pager :total="77" :current.sync="current"></z-pager>
    <div style="margin-top: 16px;">当前页: {{current}}</div>
</div>
```
 
## API

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| total | 总共多少页，必填 | Number | - |
| current | 指定当前处于第几页，需要 `.sync` 修饰符 | Number | - |

