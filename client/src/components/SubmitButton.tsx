type SubmitButtonProps = {
  pending: boolean;
  label: string;
  pendingLabel?: string;
  disabled?: boolean;
};

export function SubmitButton({ pending, label, pendingLabel = 'Sending…', disabled = false }: SubmitButtonProps) {
  return (
    <button className="button button--gold" type="submit" disabled={pending || disabled}>
      {pending ? pendingLabel : label}
    </button>
  );
}
