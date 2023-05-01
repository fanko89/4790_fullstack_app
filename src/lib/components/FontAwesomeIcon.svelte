<script>
  import { fa } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { onMount } from 'svelte'

  export let icon

  onMount(() => {
    fa.library.add(icon)
  })
</script>

<FontAwesomeIcon :icon="{icon}" />