type SubmitButtonProps = {
  pending: boolean;
  label: string;
  pendingLabel?: string;
};

export function SubmitButton({ pending, label, pendingLabel = 'Sending…' }: SubmitButtonProps) {
  return (
    <button className="button button--gold" type="submit" disabled={pending}>
      {pending ? pendingLabel : label}
    </button>
  );
}
