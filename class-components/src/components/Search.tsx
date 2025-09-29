import { Button } from './Button';
import { Input } from './Input';

export default function Search({
  handleSearch,
  handleInputValue,
  isLoading,
}: {
  handleSearch: () => void;
  handleInputValue: (value: string) => void;
  isLoading: boolean;
}) {
  return (
    <div>
      <Input handleInputValue={handleInputValue} />
      <Button handleSearch={handleSearch} isLoading={isLoading} />
    </div>
  );
}
