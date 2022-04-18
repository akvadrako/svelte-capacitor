
import { readable } from "svelte/store";
import { beforeUrlChange } from "@roxi/routify"

export const pageState = readable({ count: 0 }, set => {

    function addCount(event, route) {
        if(! event.state) {
            return true
        }

        if(! event.state.count) {
            event.state.count = ((history.state || {}).count || 0) + 1
        }

        set(event.state)
        return true;
    }

    beforeUrlChange.subscribe(listen => listen(addCount))

    addEventListener("popstate", event => {
        console.log('popstate', event.state)
        set(event.state || { count: 0 })
    }, false);
});
