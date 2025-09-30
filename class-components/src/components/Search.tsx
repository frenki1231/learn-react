import { Button } from './Button/Button';
import { Input } from './Input/Input';

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
      <Button handleSearch={handleSearch} isLoading={isLoading}>
        Search
      </Button>
    </div>
  );
}
