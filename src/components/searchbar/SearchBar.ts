import { defineComponent, ref, computed } from "vue";
import SearchResults from "@/components/search-results/SearchResults.vue";
import { usePlacesStore } from '@/composables'


export default defineComponent({
  name: 'SearchBar',
  components: { SearchResults },
  setup() {

    const searchTerm = ref('');
    const debounceTimeout = ref();

    const { searchPlaceByQuery } = usePlacesStore();

    return {
      searchTerm: computed({
        get() {
          return searchTerm.value
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(async () => {
            searchTerm.value = val;

            await searchPlaceByQuery(searchTerm.value)

          }, 1000)
        }
      })
    }

  }
})
