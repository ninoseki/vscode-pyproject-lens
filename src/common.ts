import { Cache, Info } from "./types";

export const cache: Cache = new Map<string, Info>();
export const dependencyRegexp = /^([a-zA-z0-9-_]+)\s*=+\s*.+["|']?\^*([0-9.]+)["|']?.+/;
export const packageNameRegexp = /^([a-zA-z0-9-_]+)\s*=+\s*/;
export const packageRequirementsRegexp = /["|']?\^*([0-9.]+)["|']?/;
