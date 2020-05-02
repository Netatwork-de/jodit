/**
 * Check if element is array
 * @param elm
 */
import { JoditArray } from '../jodit-array';

export function isArray<T = any>(elm: unknown): elm is Array<T> {
	return Array.isArray(elm) || elm instanceof JoditArray;
}
