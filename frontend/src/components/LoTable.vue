<script lang="ts">
import { CSSProperties, defineComponent } from 'vue'

export interface ColumnConfig {
  id: string;
  name?: string;
  type?: ColumnTypes;
  style?: CSSProperties;
}

enum ColumnTypes {
  TEXT,
  IMAGE,
  CHECKBOX,
  ACTION,
}

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true
    },
    columnsConfig: {
      type: Array as () => ColumnConfig[],
      required: true
    },
    loadMoreData: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      ColumnTypes
    }
  },
  // created: {
  // Plus 1 because browser impl. bug
  // if (scrollTop + clientHeight + 1 >= scrollHeight) {
  //   this.$props.loadMoreData()
  // }
  // TODO - INITIAL LOADING B4 SCROLL
  // }
  methods: {
    onScroll (event: Event) {
      const target = event.target as HTMLDivElement
      const { scrollTop, clientHeight, scrollHeight } = target

      // Plus 1 because browser impl. bug
      if (scrollTop + clientHeight + 1 >= scrollHeight) {
        this.$props.loadMoreData()
      }
    }
  }
})
</script>
<template>
  <div class="lo-table">
    <section class="table-head">
      <div class="table-row">
        <div
          v-for="col in columnsConfig"
          :key="col.id"
          class="table-cell"
        >
          {{ col.id }}
        </div>
      </div>
    </section>
    <section
      class="table-body"
      @scroll="onScroll"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="table-row"
      >
        <div
          v-for="col in columnsConfig"
          :key="col.id"
          class="table-cell"
          :style="col.style"
        >
          {{ item[col.id] }}
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.lo-table {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.table-head {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.table-body {
  overflow-y: auto;
  flex: 1;

  .table-row {
    &:hover {
      background: #eef6ff;
      outline: 1px solid #2f80ed;
    }
  }
}

.table-row {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f2f2f2;
}

.table-cell {
  padding: 16px;
  text-align: center;
}
</style>
