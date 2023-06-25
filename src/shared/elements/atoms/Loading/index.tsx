type Props = {
  className?: string;
};

export const Loading = ({ className }: Props) => {
  return <div className={`loading ${className}`}></div>;
};
