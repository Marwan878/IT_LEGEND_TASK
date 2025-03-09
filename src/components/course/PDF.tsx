import { RoundButton } from "@/components/general";

function PDF({
  src,
  setPdfIsOpen,
}: {
  src: string;
  setPdfIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="inset-0 w-[100dvw] h-screen fixed">
      <iframe src={src} className="w-full h-full" />
      <RoundButton onClick={() => setPdfIsOpen(false)} />
    </div>
  );
}

export default PDF;
