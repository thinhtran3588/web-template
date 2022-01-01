import type {NextPage} from 'next';

export type Page<P = {}, IP = P> = NextPage<IP, P> & {
  hideLayout?: boolean;
};
