const TASKS_STATUS = {
  BACKLOG: 'backlog',
  READY: 'ready',
  IN_PROGRESS: 'inProgress',
  FINISHED: 'finished'
};

const TASKS_TITLES = {
  [TASKS_STATUS.BACKLOG]: 'Backlog',
  [TASKS_STATUS.READY]: 'Ready',
  [TASKS_STATUS.IN_PROGRESS]: 'In Progress',
  [TASKS_STATUS.FINISHED]: 'Finished'
}

export {TASKS_STATUS, TASKS_TITLES}