import { Button } from './Button';
import { Input } from './Input';

export default function Search({
  handleSearch,
  handleInputValue,
}: {
  handleSearch: () => void;
  handleInputValue: (value: string) => void;
}) {
  return (
    <div>
      <Input handleInputValue={handleInputValue} />
      <Button handleSearch={handleSearch} />
    </div>
  );
}
