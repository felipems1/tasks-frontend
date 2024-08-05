export interface TaskType {
  id?: string,
  title: string
  description: string
  status: 'TO_DO' | 'COMPLETED'
  deadline: Date
}