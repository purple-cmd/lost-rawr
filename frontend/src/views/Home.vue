<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/api/api'
import Pet from '@/interfaces/Pet'
import LoTable, { ColumnConfig } from '@/components/LoTable.vue' // @ is an alias to /src

export default defineComponent({
  components: {
    LoTable
  },
  data () {
    const pagination = {
      pageSize: 3,
      offset: 0
    }
    const lostPets: Pet[] = []
    const columnsConfig: ColumnConfig[] = [
      {
        id: 'id'
      },
      {
        id: 'name'
      },
      {
        id: 'chipId'
      },
      {
        id: 'race'
      },
      {
        id: 'color'
      },
      {
        id: 'gender'
      },
      // {
      //   id: "pictureUrl",
      // },
      {
        id: 'lostDate'
      },
      {
        id: 'locationLiving'
      },
      {
        id: 'locationLastSeen'
      }
      // {
      //   id: "notes",
      // },
    ]

    return {
      pagination,
      lostPets,
      columnsConfig
    }
  },
  mounted () {
    this.getLostPets()
  },
  methods: {
    getLostPets () {
      const { offset, pageSize } = this.$data.pagination
      this.$data.pagination.offset += pageSize
      api({
        type: 'getLostPets',
        params: {
          pageSize,
          offset
        }
      }).then((res) => {
        this.$data.lostPets = [...this.lostPets, ...res.data]
      })
    }
  }
})
</script>

<template>
  <div class="home">
    <section>
      Welcome to lost-rawr, here you can see details about lost pets
    </section>
    <LoTable
      :items="lostPets"
      :columns-config="columnsConfig"
      :load-more-data="getLostPets"
    />
  </div>
</template>
<style lang="scss" scoped>
.home {
  height: calc(100vh - 90px);
  overflow: hidden;
}
</style>
