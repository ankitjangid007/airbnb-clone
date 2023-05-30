"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div
      className="px-4 py-3 font-semibold phandleClickx-4 hover:bg-neutral-100"
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
