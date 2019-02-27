<template>
    <div class="cascader-demo">
        <h3>同步版本</h3>
        <z-cascader :source="source" :selected.sync="selected1">
            <z-button>{{selectedString1 || '&nbsp;'}}</z-button>
        </z-cascader>
        <h3>异步版本</h3>
         <z-cascader :source.sync="artists" :selected.sync="selected2" :loadData="loadData">
            <z-button>{{selectedString2 || '&nbsp;'}}</z-button>
        </z-cascader>

    </div>
</template>

<script>
    import ZCascader from '../../../src/cascader/cascader'
    import ZButton from '../../../src/button/button'

    export default {
        components: {ZCascader, ZButton},
        data() {
            return {
                selected1: [],
                selected2: [],
                source: [
                    {
                        id: 1,
                        name: '山东',
                        children: [
                            {id: 11, name: '莱芜', children: [{name: '莱芜区'}, {name: '莱城区'}]},
                            {id: 12, name: '济南', children: [{name: '历下区'}, {name: '历城区'}]},
                            {id: 13, name: '潍坊', children: [{name: '潍城区'}, {name: '寒亭区'}]}
                        ]
                    },
                    {
                        id: 2,
                        name: '福建',
                        children: [
                            {
                                id: 22, name: '泉州', children: [{name: '鲤城区'}, {name: '丰泽区'},
                                    {name: '洛江区'}, {name: '泉港区'}]
                            },
                            {
                                id: 23, name: '厦门', children: [
                                    {name: '集美区'}, {name: '海沧区'}, {name: '湖里区'}]
                            },
                            {
                                id: 24, name: '漳州', children: [
                                    {name: '芗城区'}, {name: '龙文区'}
                                ]
                            }
                        ]
                    }
                ],
                db: [
                    {parentId: 0, id: 1, name: '绘画', isLeaf: false},
                    {parentId: 1, id: 11, name: '达芬奇', isLeaf: false},
                    {parentId: 11, id: 111, name: '蒙娜丽莎', isLeaf: true},
                    {parentId: 111, id: 1111, name: '新蒙娜丽莎', isLeaf: true},
                    {parentId: 111, id: 1112, name: '旧蒙娜丽莎', isLeaf: true},
                    {parentId: 11, id: 112, name: '最后的晚餐', isLeaf: true},
                    {parentId: 1, id: 12, name: '拉斐尔', isLeaf: false},
                    {parentId: 12, id: 121, name: '雅典学派', isLeaf: true},
                    {parentId: 0, id: 2, name: '雕塑', isLeaf: false},
                    {parentId: 2, id: 21, name: '米开朗琪罗', isLeaf: true},
                    {parentId: 0, id: 3, name: '音乐', isLeaf: false},
                    {parentId: 3, id: 31, name: '贝多芬', isLeaf: true},
                    {parentId: 31, id: 311, name: '第 1 交响曲', isLeaf: false},
                    {parentId: 31, id: 312, name: '第 2 交响曲', isLeaf: false},
                    {parentId: 31, id: 313, name: '第 3 交响曲', isLeaf: false},
                    {parentId: 31, id: 314, name: '第 4 交响曲', isLeaf: false},
                    {parentId: 31, id: 315, name: '第 5 交响曲', isLeaf: false},
                    {parentId: 3, id: 32, name: '勃拉姆斯', isLeaf: true},
                    {parentId: 3, id: 33, name: '肖邦', isLeaf: true},
                    {parentId: 3, id: 34, name: '巴赫', isLeaf: true},
                    {parentId: 3, id: 34, name: '拉赫玛尼诺夫', isLeaf: true},
                    {parentId: 3, id: 34, name: '舒曼', isLeaf: true},
                    {parentId: 3, id: 34, name: '莫扎特', isLeaf: true},
                    {parentId: 3, id: 34, name: '李斯特', isLeaf: true},
                    {parentId: 3, id: 34, name: '柴可夫斯基', isLeaf: true},
                    {parentId: 3, id: 34, name: '瓦格纳', isLeaf: true},
                ],
                artists: []
            }
        },
        computed: {
            selectedString1() {
                if (this.selected1.length === 0) {
                    return '选择省市区'
                } else {
                    return this.selected1.map((item) => item.name).join('/')
                }
            },
             selectedString2() {
                if (this.selected2.length === 0) {
                    return '选择作品'
                } else {
                    return this.selected2.map((item) => item.name).join('/')
                }
            }
        },
        created() {
            this.ajax().then((res)=>{
                this.artists = res
            })
        },
        methods: {
            loadData(node, updateSource) {
                let {id} = node
                this.ajax(id).then((res)=>{
                    updateSource(res)
                })
            },
            ajax(id=0) {
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        let result = this.db.filter((item)=>{
                            return item.parentId === id 
                        })
                        result.forEach(node => {
                            if (this.db.filter(item => item.parentId === node.id).length > 0) {
                                node.isLeaf = false
                            }else{
                                node.isLeaf = true
                            }
                        })
                        resolve(result)
                    }, 700)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .cascader-demo {
        margin-top: 32px;
        margin-bottom: 32px;
    }
</style>