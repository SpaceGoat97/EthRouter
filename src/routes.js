import Home from "pages/Home.svelte";

import { ChunkGenerator } from "svelte-spa-chunk";
import ChunkComponent from "svelte-spa-chunk/Chunk.svelte";
const Chunk = ChunkGenerator(ChunkComponent);

const routes = {
  "/": Home,
  "/dashboard": Chunk(() =>  import ('pages/Dashboard.svelte')),
  "/profile/:name?": Chunk(() =>  import ('pages/Profile.svelte')),
  "/profile": Chunk(() =>  import ('pages/Profile.svelte')),

};

export default routes;
