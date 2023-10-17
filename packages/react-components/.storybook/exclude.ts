import { supportedAttributes } from '../src/internals/mnt_attributes';

export const excluded = new Set(supportedAttributes);

// White listed attributes that can appear on stories
excluded.delete('children');
excluded.delete('color');
excluded.delete('disabled');
excluded.delete('type');
excluded.delete('size');
