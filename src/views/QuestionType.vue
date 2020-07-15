<template>
  <div
    :class="selectedClass"
    @click="updateQuestionType()"
    @keydown.space="updateQuestionType()"
  >
    <span class="option">{{ option.name }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'question.type',
    event: 'onUpdateQuestionType'
  },
  props: {
    questiontyp: {
      type: String,
      default: () => ''
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    selectedClass () {
      return this.questiontype === this.option.code ? 'selected' : ''
    }
  },
  methods: {
    updateQuestionType () {
      this.$emit('onUpdateQuestionType', this.option.code)
    }
  }
}
</script>

<style>
</style>
