import camelCase from "just-camel-case";
import mapKeys from "just-map-keys";
import mapValues from "just-map-values";
import set from "just-safe-set";
import { basicPropsifyFactory } from "../../../..";

const propsify = basicPropsifyFactory({
  mapKeys, mapValues, set, camelCase
});

export default propsify;
