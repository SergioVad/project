import { buildSelector } from '@/shared/lib/store';

export const [useStateInited, getStateInited] = buildSelector((state) => state.user._inited);
