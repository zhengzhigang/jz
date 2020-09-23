<template>
    <el-form>
        <el-form-item label="级联选择器">
            <v-cascader
                v-model="aaaaa"
                eventType="hover"
                :list="list"
                separator=">"
                :ids="selected"
                :names="selectTextArr"
                @selscted="skuStandardClass"
            ></v-cascader>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { warn } from 'vue-class-component/lib/util'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import VCascader from './components/cascader2/VCascader.vue'
import service from '@/api/service'
@Component({
    name: 'Demo',
    components: {
        VCascader
    }
})
export default class Recotor extends Vue {
    private list: any[] = []
    private selected: any[] = []
    private selectText: string = ''
    private selectTextArr: any[] = []
    private aaaaa: any[] = []

    private created() {
        this.getTagData()
    }

    private skuStandardClass(data) {
    }

    // 获取项目数据
    private getTagData() {
        service.getTagList().then(res => {
            this.list = res.data
        }).catch(err => {
            this.$message.error(err.message)
        })
    }
}
</script>