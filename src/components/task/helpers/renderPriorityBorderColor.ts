import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priotiry: string,
): string => {
  switch (priotiry) {
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.high:
      return 'errro.light';
    default:
      return 'grey.900';
  }
};
