/**
 * Enum for the 'Priority' data
 */
export enum Priority {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

/**
 * Interface for the 'GoalList' data
 */
export interface GoalListEntity {
  id: string;
  title: string;
  description?: string;
  deadline?: Date;
  priority: Priority; 
}
