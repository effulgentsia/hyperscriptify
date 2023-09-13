import factory from '../factory';
import { camelCase, mapKeys, mapValues, set } from 'lodash-es';
import htmlElementAttributeToPropMap from './reactHtmlAttributeToPropertyMap';

const propsify = factory({ camelCase, mapKeys, mapValues, set, htmlElementAttributeToPropMap });
export default propsify;
