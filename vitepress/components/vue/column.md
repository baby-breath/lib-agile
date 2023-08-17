<script setup>
  import column from '../../../src/components/column/index.vue'
</script>

# 三栏布局

大部分布局都可以拆分成左中右、上中下或者左右、左中等等方式，该组件能很好的满足这些场景。

## 左中右布局

左边固定宽度，右边自适应宽度，中间余下宽度
<column>
<template #start>

<div style="background:#ddd;width:150px">固定宽度</div>
</template>

  <div style="background:#4565d8;width:100%">中</div>
  <template #end>
    <div style="background:#ddd">自适应宽度</div>
  </template>
</column>

## 左右布局

左边固定宽度，右边自适应宽度

<column>
  <template #start>
  <div style="background:#ddd;width:150px">固定宽度</div>
  </template>
  <template #end>
  <div style="background:#ddd">自适应宽度</div>
  </template>
</column>