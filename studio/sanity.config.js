import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  basePath: "/studio",
  name: "Sun Diagnostics Laboratory",
  title: "Sun Diagnostics Laboratory - Studio",
  name: "default",
  title: "sun-diagnostics-laboratory",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
