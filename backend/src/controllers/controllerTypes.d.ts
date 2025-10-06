/*
    .d.ts is a file that you don't export/import
    the types are just available everywhere
*/

type ControllerResult<T> = {
  status?: number;
  message: string;
  data: T | null;
  error?: any;
};

type NewProjectInput = {
  name: string;
  description?: string;
  img?: string;
};
