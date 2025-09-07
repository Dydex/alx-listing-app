// interfaces/index.ts

// Placeholder for Card component props
export interface CardProps {
  image: string;
  title: string;
  price: number;
  location: string;
}

// Placeholder for Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}
