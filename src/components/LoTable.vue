<script lang="ts">
import { CSSProperties, defineComponent } from "vue";

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
      required: true,
    },
    columnsConfig: {
      type: Array as () => ColumnConfig[],
      required: true,
    },
  },
  data() {
    return {
      ColumnTypes
    }
  },
  mounted() {
    console.log(this.items);
  }
});
</script>
<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th
          v-for="col in columnsConfig"
          :key="col.id"
        >
          {{ col.id }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td
          v-for="col in columnsConfig"
          :key="col.id"
          :style="col.style"
        >
          <!-- <img v-if="col.type === ColumnTypes.IMAGE" :src="item[col.name]" />
          <input v-if="col.type === ColumnTypes.CHECKBOX" type="checkbox" />
          <button v-if="col.type === ColumnTypes.ACTION" type="button" />
          <span v-if="!col.type || col.type === ColumnConfigTypes.TEXT"> -->
          {{ item[col.id] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
