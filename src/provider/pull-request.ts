import { Response } from './client';

export interface PullRequest {
  id: number;
  number: number;
  state: 'open' | 'closed';
  title: string;
  body: string;
  url: string;
  sourceBranch: string;
  targetBranch: string;
  mergeable?: boolean|null;

  merge(body: MergeBody): Promise<Response<MergeResult>>;
}

export interface MergeBody {
  mergeMethod: MergeMethod;
}

export type MergeMethod = 'merge' | 'squash' | 'rebase';

export interface MergeResult {
  sha?: string;
  merged?: boolean;
  message: string;
}