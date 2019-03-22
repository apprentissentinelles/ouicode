export class Course {
  id: number;
  name: string;
  tags: string[];
  description: string;
  author_id: number;
  author_name: string;
  time_in_hour: number;
  price: number;
  price_is_public: boolean;
}