import Image from "next/image";

export default function Modal({
  visible = false,
  setVisible,
  children,
}: {
  visible?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 ${
        visible ? "" : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-screen max-h-[90vh] overflow-y-auto">
        <button
          onClick={(e) => {
            setVisible(false);
          }}
          className="absolute top-0 right-0 text-2xl m-4 z-50 bg-black bg-opacity-70 rounded-full p-1"
        >
          <Image src="/close.svg" alt="close icon" width={15} height={15} />
        </button>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
}
