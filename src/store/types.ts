export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
  birthDate: number;
  practiseInYears: number;
  skills: Array<number>;
  projects: Array<number>;
  comments: Array<number>;
};
export type Skills = {
  id: number;
  name: string;
  rate: number | string;
  category: number;
};
export type SkillsCategory = {
  id: number;
  name: string;
};
export type Project = {
  id: number;
  name: string;
  company: string;
  from: number | undefined | string | null;
  to?: number | undefined | string | null;
  status: number | string;
  description?: string;
  participants?: Array<number>;
  comments?: Array<number>;
};
export type Comment = {
  id: number;
  author: string;
  text: string;
};
export interface DataInStore {
  students: {
    allIds: number[];
    byId: {
      [key: number]: Student;
    };
  };
  skills: {
    allIds: number[];
    byId: {
      [key: number]: Skills;
    };
    categories: {
      allIds: number[];
      byId: {
        [key: number]: SkillsCategory;
      };
    };
  };
  projects: {
    allIds: number[];
    byId: {
      [key: number]: Project;
    };
    statuses: Array<{ id: number; name: string }>;
  };
  comments: {
    allIds: number[];
    byId: {
      [key: number]: Comment;
    };
  };
}

export interface setNewStudentDataPayload {
  newComment: saveNewComment;
  editedStudent: setNewStudentData;
}
export interface saveNewComment {
  studentId: number;
  id: number;
  author: string;
  text: string;
}
export interface saveNewSkill {
  studentId: number;
  id: number;
  rate: string;
  category: number;
  value: string;
}
export interface setNewStudentData {
  birthDate: number;
  comments: number[];
  id: number;
  lastname: string;
  name: string;
  photo: string;
  practiseInYears: number;
  projects: number[];
  skills: number[];
}
