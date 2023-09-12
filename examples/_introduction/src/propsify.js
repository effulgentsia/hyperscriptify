import {camelCase, mapKeys, mapValues, set} from "lodash-es";
import htmlElementAttributeToPropMap from '../../../reactHtmlAttributeToPropertyMap';
import { basicPropsifyFactory } from "../../..";

const propsify = basicPropsifyFactory({
  mapKeys, mapValues, set, camelCase, htmlElementAttributeToPropMap
});

export default propsify;
