function PauseIcon({ color = "#dc2626" }: { color?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 1H2V15H7V1Z" fill={color} />
      <path d="M14 1H9V15H14V1Z" fill={color} />
    </svg>
  );
}

export default PauseIcon;
