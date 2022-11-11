export type CourseType = {
  id?: number;
  title?: string;
  thumbnail?: string;
  price?: number;
};

export type SeatType = {
  id?: number;
  numberPeople: number;
  seats: [
    {
      title: string;
      thumbnail: string;
    }
  ];
};