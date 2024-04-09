interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpendFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      name=""
      id=""
      onChange={e => onSelectCategory(e.target.value)}
    >
      <option value="">all category</option>
      <option value="jonas">jonas</option>
      <option value="jack">jack</option>
      <option value="james">james</option>
    </select>
  );
};

export default ExpendFilter;
