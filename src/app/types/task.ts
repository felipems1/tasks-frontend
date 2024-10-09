export interface TaskType {
  id?: string,
  title: string
  description: string
  deadline: string
  status: 'TO_DO' | 'COMPLETED'
}

export interface TaskFormType {
  title: string
  description: string
  deadline: string
}