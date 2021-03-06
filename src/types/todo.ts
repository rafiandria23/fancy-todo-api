import { Document, Types } from 'mongoose';
import { Moment } from 'moment';

// Types
import { Validation } from '@/types';

export interface ITodo {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  listId: Types.ObjectId | null;
  name: string;
  notes: string | null;
  url: string | null;
  due: Date;
  completed: boolean;
  priority: TodoPriority;
  createdAt?: Date | Moment | string;
  updatedAt?: Date | Moment | string;
}

export interface ITodoDocument extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  listId: Types.ObjectId | null;
  name: string;
  notes: string | null;
  url: string | null;
  due: Date;
  completed: boolean;
  priority: TodoPriority;
  createdAt?: Date | Moment | string;
  updatedAt?: Date | Moment | string;
}

export enum TodoPriority {
  NONE = 'none',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface ITodoValidator {
  Id: (input: string) => Validation;
  UserId: (input: string) => Validation;
  ListId: (input: string) => Validation;
  Name: (input: string) => Validation;
  Notes: (input: string | null) => Validation;
  URL: (input: string | null) => Validation;
  Due: (input: string) => Validation;
  Priority: (input: string) => Validation;
}

export interface IAddTodoFormValidations {
  userId: Validation;
  listId: Validation;
  name: Validation;
  notes: Validation;
  url: Validation;
  due: Validation;
  priority: Validation;
}

export interface IAddTodoFormData {
  userId: string;
  listId: string | null;
  name: string;
  notes: string | null;
  url: string | null;
  due: string;
  priority: string;
}

export interface IUpdateTodoFormValidations {
  _id: Validation;
  userId: Validation;
  listId: Validation;
  name: Validation;
  notes: Validation;
  url: Validation;
  due: Validation;
  priority: Validation;
}

export interface IUpdateTodoFormData {
  _id: string;
  userId: string;
  listId: string;
  name: string;
  notes: string | null;
  url: string | null;
  due: string;
  priority: string;
}

export interface IGetAllTodosOptions {
  listId: string | null;
  due: string | 'all';
}
