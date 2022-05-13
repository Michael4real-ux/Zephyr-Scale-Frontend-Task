export type TestItem = {
  id: number;
  name: string;
  executionStatus: ExecutionStatus;
};

type ExecutionStatus = string;

export interface Status {
  id: number;
  name: string;
  executionStatus: string;
}

export type RouteParams = {
  testItemId: string
};

