enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  COMPLETED = 'COMPLETED',
}

export interface TaskType {
  id?: string,
  title: string
  description: string
  status: TaskStatusEnum
  deadline: Date
}