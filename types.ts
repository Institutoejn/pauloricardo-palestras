
export interface Lecture {
  id: number;
  title: string;
  description: string;
  forWho: string;
  resolve: string;
  result: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}