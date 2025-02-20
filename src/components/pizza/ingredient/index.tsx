interface Props {
  ingName: string;
}

export const Ingredient = ({ ingName }: Props) => {
  return <img src={`/img/${ingName}.png`} alt={ingName} />;
};
