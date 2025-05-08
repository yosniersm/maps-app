import { defineComponent, ref, computed } from "vue";
import SearchResults from "@/components/search-results/SearchResults.vue";


export default defineComponent({
  name: 'SearchBar',
  components: { SearchResults },
  setup() {

    const searchTerm = ref('');
    const debounceTimeout = ref();



    return {
      searchTerm: computed(() => ({
        get() {
          return searchTerm.value
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            searchTerm.value = val;
          }, 500)
        }
      }))
    }

  }
})
